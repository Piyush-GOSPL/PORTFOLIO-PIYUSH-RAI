import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Html, Text } from "@react-three/drei";
import * as THREE from "three";
import { networkDevices, networkLinks, NetworkDevice, NetworkTopic } from "@/data/networkingLabs";

interface NetworkCanvasProps {
  selectedTopic: NetworkTopic;
  selectedDevice: NetworkDevice | null;
  onSelectDevice: (device: NetworkDevice) => void;
}

export const NetworkCanvas: React.FC<NetworkCanvasProps> = ({
  selectedTopic,
  selectedDevice,
  onSelectDevice,
}) => {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing select-none">
      <Canvas
        camera={{ position: [0, 4.5, 9.5], fov: 48 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[6, 10, 6]} intensity={2.0} color="#FFFFFF" />
        <pointLight position={[-6, 4, 2]} intensity={3.0} color="#00C8FF" />
        <pointLight position={[6, -2, -2]} intensity={2.5} color="#1263B5" />

        <OrbitControls
          enableDamping
          dampingFactor={0.08}
          minDistance={5}
          maxDistance={14}
          maxPolarAngle={Math.PI / 2.05}
          minPolarAngle={Math.PI / 8}
        />

        {/* Ground grid plane */}
        <GridFloor />

        {/* Network Device Nodes */}
        {networkDevices.map((device) => {
          const isActive = selectedTopic.activeDevices.includes(device.id);
          const isSelected = selectedDevice?.id === device.id;

          return (
            <DeviceNode3D
              key={device.id}
              device={device}
              isActive={isActive}
              isSelected={isSelected}
              onSelect={() => onSelectDevice(device)}
            />
          );
        })}

        {/* Network Cable Links */}
        {networkLinks.map((link) => {
          const fromDev = networkDevices.find((d) => d.id === link.from);
          const toDev = networkDevices.find((d) => d.id === link.to);
          if (!fromDev || !toDev) return null;

          const isLinkActive = selectedTopic.activeLinks.includes(link.id);

          return (
            <CableLink3D
              key={link.id}
              from={fromDev.position}
              to={toDev.position}
              type={link.type}
              isActive={isLinkActive}
            />
          );
        })}

        {/* Animated Packet Flow */}
        {selectedTopic.packetFlow.map((packet, idx) => {
          const fromDev = networkDevices.find((d) => d.id === packet.from);
          const toDev = networkDevices.find((d) => d.id === packet.to);
          if (!fromDev || !toDev) return null;

          return (
            <AnimatedPacket
              key={`${packet.from}-${packet.to}-${idx}`}
              from={fromDev.position}
              to={toDev.position}
              color={packet.color}
              label={packet.label}
              speed={0.65}
              offset={idx * 0.4}
            />
          );
        })}
      </Canvas>
    </div>
  );
};

// Subtle Cybernetic Floor Plane
const GridFloor: React.FC = () => {
  return (
    <group position={[0, -3.2, 0]}>
      <gridHelper args={[24, 24, "#0090D2", "#E2E8F0"]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
        <planeGeometry args={[26, 26]} />
        <meshBasicMaterial color="#F8FAFC" transparent opacity={0.6} />
      </mesh>
    </group>
  );
};

// 3D Device Mesh Component
const DeviceNode3D: React.FC<{
  device: NetworkDevice;
  isActive: boolean;
  isSelected: boolean;
  onSelect: () => void;
}> = ({ device, isActive, isSelected, onSelect }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = React.useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    if (isActive) {
      meshRef.current.position.y = device.position[1] + Math.sin(t * 3) * 0.08;
    } else {
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, device.position[1], 0.1);
    }
  });

  const primaryColor = isActive ? "#00C8FF" : hovered ? "#0090D2" : "#94A3B8";

  return (
    <group
      ref={meshRef}
      position={device.position}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
    >
      {/* Visual geometry based on device type */}
      {device.type === "router" && (
        <group>
          {/* Router cylinder chassis */}
          <mesh castShadow>
            <cylinderGeometry args={[0.55, 0.55, 0.28, 32]} />
            <meshStandardMaterial
              color={isActive ? "#0284C7" : "#334155"}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          {/* Top glowing cross indicator */}
          <mesh position={[0, 0.15, 0]}>
            <cylinderGeometry args={[0.42, 0.42, 0.02, 32]} />
            <meshStandardMaterial
              color={isActive ? "#00C8FF" : "#1E293B"}
              emissive={isActive ? "#00C8FF" : "#0284C7"}
              emissiveIntensity={isActive ? 1.5 : 0.2}
            />
          </mesh>
        </group>
      )}

      {device.type === "l3switch" && (
        <group>
          {/* Layer 3 Multi-Layer Switch Chassis */}
          <mesh castShadow>
            <boxGeometry args={[1.3, 0.35, 0.8]} />
            <meshStandardMaterial
              color={isActive ? "#0369A1" : "#1E293B"}
              metalness={0.85}
              roughness={0.2}
            />
          </mesh>
          {/* Glowing L3 Faceplate */}
          <mesh position={[0, 0, 0.41]}>
            <planeGeometry args={[1.1, 0.18]} />
            <meshBasicMaterial color={isActive ? "#00C8FF" : "#38BDF8"} />
          </mesh>
        </group>
      )}

      {device.type === "l2switch" && (
        <group>
          {/* Layer 2 Access Switch */}
          <mesh castShadow>
            <boxGeometry args={[1.1, 0.25, 0.7]} />
            <meshStandardMaterial
              color={isActive ? "#0284C7" : "#475569"}
              metalness={0.75}
              roughness={0.25}
            />
          </mesh>
          <mesh position={[0, 0, 0.36]}>
            <planeGeometry args={[0.9, 0.12]} />
            <meshBasicMaterial color={isActive ? "#00C8FF" : "#60A5FA"} />
          </mesh>
        </group>
      )}

      {device.type === "firewall" && (
        <group>
          {/* Firewall Shield Chassis */}
          <mesh castShadow>
            <boxGeometry args={[0.85, 0.65, 0.55]} />
            <meshStandardMaterial
              color={isActive ? "#DC2626" : "#7F1D1D"}
              metalness={0.8}
              roughness={0.25}
            />
          </mesh>
          {/* Glowing shield face */}
          <mesh position={[0, 0, 0.29]}>
            <planeGeometry args={[0.65, 0.45]} />
            <meshStandardMaterial
              color="#EF4444"
              emissive="#DC2626"
              emissiveIntensity={isActive ? 2 : 0.8}
            />
          </mesh>
        </group>
      )}

      {device.type === "server" && (
        <group>
          {/* Blade Server Enclosure */}
          <mesh castShadow>
            <boxGeometry args={[0.55, 0.9, 0.55]} />
            <meshStandardMaterial
              color={isActive ? "#0F172A" : "#1E293B"}
              metalness={0.9}
              roughness={0.15}
            />
          </mesh>
          {/* Glowing LED Slots */}
          <mesh position={[0, 0, 0.28]}>
            <planeGeometry args={[0.42, 0.72]} />
            <meshStandardMaterial
              color="#0284C7"
              emissive={isActive ? "#00C8FF" : "#0369A1"}
              emissiveIntensity={isActive ? 2 : 0.6}
            />
          </mesh>
        </group>
      )}

      {device.type === "pc" && (
        <group>
          {/* PC Monitor Screen */}
          <mesh position={[0, 0.25, 0]} castShadow>
            <boxGeometry args={[0.7, 0.45, 0.05]} />
            <meshStandardMaterial color="#E2E8F0" metalness={0.6} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0.25, 0.03]}>
            <planeGeometry args={[0.62, 0.38]} />
            <meshBasicMaterial color={isActive ? "#00C8FF" : "#38BDF8"} />
          </mesh>
          {/* Stand */}
          <mesh position={[0, -0.05, 0]}>
            <cylinderGeometry args={[0.04, 0.04, 0.2]} />
            <meshStandardMaterial color="#94A3B8" />
          </mesh>
          <mesh position={[0, -0.15, 0]}>
            <boxGeometry args={[0.3, 0.02, 0.25]} />
            <meshStandardMaterial color="#64748B" />
          </mesh>
        </group>
      )}

      {device.type === "cloud" && (
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
          <group>
            <mesh>
              <dodecahedronGeometry args={[0.65, 1]} />
              <meshStandardMaterial
                color="#00C8FF"
                wireframe={true}
                emissive="#0090D2"
                emissiveIntensity={1.8}
              />
            </mesh>
            <mesh>
              <sphereGeometry args={[0.48, 16, 16]} />
              <meshPhysicalMaterial
                color="#0284C7"
                transmission={0.8}
                opacity={0.8}
                transparent
                roughness={0.1}
              />
            </mesh>
          </group>
        </Float>
      )}

      {/* Active Aura Pulse Rings */}
      {isActive && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.4, 0]}>
          <ringGeometry args={[0.7, 0.85, 32]} />
          <meshBasicMaterial color="#00C8FF" transparent opacity={0.8} side={THREE.DoubleSide} />
        </mesh>
      )}

      {isSelected && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.42, 0]}>
          <ringGeometry args={[0.88, 0.98, 32]} />
          <meshBasicMaterial color="#1263B5" transparent opacity={0.9} side={THREE.DoubleSide} />
        </mesh>
      )}

      {/* HTML Label above device */}
      <Html position={[0, 0.85, 0]} center distanceFactor={10} zIndexRange={[100, 0]}>
        <div
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          className={`cursor-pointer transition-all duration-300 px-2 py-0.5 rounded shadow-sm text-[10px] font-mono whitespace-nowrap border ${
            isActive
              ? "bg-[#0F172A] text-[#00C8FF] border-[#00C8FF] shadow-[0_0_12px_rgba(0,200,255,0.4)] scale-105"
              : isSelected
              ? "bg-[#1263B5] text-white border-white scale-105"
              : "bg-white/90 text-slate-800 border-slate-300 hover:border-[#0090D2]"
          }`}
        >
          <div className="font-bold flex items-center gap-1">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isActive ? "bg-[#00C8FF] animate-ping" : "bg-emerald-500"
              }`}
            />
            {device.name}
          </div>
          <div className="text-[9px] text-slate-400 font-normal">{device.ip}</div>
        </div>
      </Html>
    </group>
  );
};

// 3D Cable Link between two coordinates
const CableLink3D: React.FC<{
  from: [number, number, number];
  to: [number, number, number];
  type: string;
  isActive: boolean;
}> = ({ from, to, type, isActive }) => {
  const lineGeometry = useMemo(() => {
    const points = [
      new THREE.Vector3(...from),
      new THREE.Vector3(
        (from[0] + to[0]) / 2,
        (from[1] + to[1]) / 2 - 0.2, // slight natural sag
        (from[2] + to[2]) / 2
      ),
      new THREE.Vector3(...to),
    ];
    const curve = new THREE.CatmullRomCurve3(points);
    return new THREE.TubeGeometry(curve, 20, isActive ? 0.04 : 0.02, 8, false);
  }, [from, to, isActive]);

  let linkColor = "#94A3B8";
  if (isActive) {
    linkColor = "#00C8FF";
  } else if (type === "fiber") {
    linkColor = "#F59E0B";
  } else if (type === "trunk") {
    linkColor = "#3B82F6";
  } else if (type === "vpn") {
    linkColor = "#8B5CF6";
  }

  return (
    <mesh geometry={lineGeometry}>
      <meshStandardMaterial
        color={linkColor}
        emissive={isActive ? "#0090D2" : "#000000"}
        emissiveIntensity={isActive ? 1.5 : 0}
        metalness={0.5}
        roughness={0.3}
      />
    </mesh>
  );
};

// Animated Packet Moving from Source to Destination
const AnimatedPacket: React.FC<{
  from: [number, number, number];
  to: [number, number, number];
  color: string;
  label: string;
  speed: number;
  offset: number;
}> = ({ from, to, color, label, speed, offset }) => {
  const packetRef = useRef<THREE.Group>(null);

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(...from),
      new THREE.Vector3(
        (from[0] + to[0]) / 2,
        (from[1] + to[1]) / 2 - 0.2,
        (from[2] + to[2]) / 2
      ),
      new THREE.Vector3(...to),
    ]);
  }, [from, to]);

  useFrame((state) => {
    if (!packetRef.current) return;
    const t = (state.clock.getElapsedTime() * speed + offset) % 1;
    const point = curve.getPoint(t);
    packetRef.current.position.copy(point);
  });

  return (
    <group ref={packetRef}>
      {/* Glowing Packet Mesh */}
      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
      {/* Pulse Halo */}
      <mesh>
        <sphereGeometry args={[0.14, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.4} />
      </mesh>
    </group>
  );
};

