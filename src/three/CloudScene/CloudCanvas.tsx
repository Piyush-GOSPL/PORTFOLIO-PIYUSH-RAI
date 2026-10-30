import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Html, Ring, Line } from "@react-three/drei";
import * as THREE from "three";
import { cloudComponents, CloudComponent } from "@/data/cloudData";

interface CloudCanvasProps {
  selectedComponent: CloudComponent | null;
  onSelectComponent: (comp: CloudComponent) => void;
}

export const CloudCanvas: React.FC<CloudCanvasProps> = ({
  selectedComponent,
  onSelectComponent,
}) => {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 2, 7.5], fov: 48 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[5, 8, 5]} intensity={2.2} />
        <pointLight position={[-4, 3, -2]} intensity={3.5} color="#0090D2" />
        <pointLight position={[4, -2, 2]} intensity={3.5} color="#00C8FF" />

        <OrbitControls
          enableDamping
          dampingFactor={0.06}
          minDistance={4}
          maxDistance={12}
          maxPolarAngle={Math.PI / 2.1}
        />

        {/* Central Glowing Cloud Mesh Core */}
        <CentralCloudCore />

        {/* Orbiting / Positioned Cloud Components */}
        {cloudComponents.map((comp) => (
          <CloudNode3D
            key={comp.id}
            comp={comp}
            isSelected={selectedComponent?.id === comp.id}
            onSelect={() => onSelectComponent(comp)}
          />
        ))}

        {/* Dynamic connection lines connecting components to central cloud backbone */}
        {cloudComponents.map((comp) => (
          <CloudConnectionLine key={`line-${comp.id}`} targetPos={comp.position} color={comp.color} />
        ))}
      </Canvas>
    </div>
  );
};

// Central 3D Cloud Core
const CentralCloudCore: React.FC = () => {
  const coreRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!coreRef.current) return;
    const t = state.clock.getElapsedTime();
    coreRef.current.rotation.y = t * 0.1;
    coreRef.current.rotation.x = Math.sin(t * 0.2) * 0.05;
  });

  return (
    <group ref={coreRef} position={[0, 0.4, 0]}>
      {/* Outer translucent cloud cluster */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh>
          <icosahedronGeometry args={[1.2, 2]} />
          <meshPhysicalMaterial
            color="#0090D2"
            transmission={0.85}
            transparent
            opacity={0.65}
            roughness={0.1}
            ior={1.4}
          />
        </mesh>
        {/* Core Wireframe Glow */}
        <mesh>
          <icosahedronGeometry args={[1.22, 2]} />
          <meshBasicMaterial color="#00C8FF" wireframe transparent opacity={0.35} />
        </mesh>
      </Float>

      {/* Cloud Rings */}
      <Ring args={[1.6, 1.65, 48]} rotation={[-Math.PI / 3, 0, 0]}>
        <meshBasicMaterial color="#00C8FF" transparent opacity={0.6} side={THREE.DoubleSide} />
      </Ring>
      <Ring args={[2.0, 2.05, 48]} rotation={[Math.PI / 4, 0, 0]}>
        <meshBasicMaterial color="#1263B5" transparent opacity={0.5} side={THREE.DoubleSide} />
      </Ring>
    </group>
  );
};

// 3D Node for Cloud Services
const CloudNode3D: React.FC<{
  comp: CloudComponent;
  isSelected: boolean;
  onSelect: () => void;
}> = ({ comp, isSelected, onSelect }) => {
  const nodeRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = React.useState(false);

  useFrame((state) => {
    if (!nodeRef.current) return;
    const t = state.clock.getElapsedTime();
    nodeRef.current.position.y = comp.position[1] + Math.sin(t * 2 + comp.position[0]) * 0.08;
  });

  return (
    <group
      ref={nodeRef}
      position={comp.position}
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
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        {/* Mesh shapes based on category */}
        {comp.category === "Compute" && (
          <mesh castShadow>
            <boxGeometry args={[0.55, 0.55, 0.55]} />
            <meshStandardMaterial
              color={isSelected ? "#00C8FF" : "#1E293B"}
              metalness={0.8}
              roughness={0.2}
              emissive={comp.color}
              emissiveIntensity={isSelected ? 1.5 : hovered ? 0.8 : 0.2}
            />
          </mesh>
        )}

        {comp.category === "Database" && (
          <mesh castShadow>
            <cylinderGeometry args={[0.35, 0.35, 0.65, 24]} />
            <meshStandardMaterial
              color={isSelected ? "#00C8FF" : "#0F172A"}
              metalness={0.85}
              roughness={0.15}
              emissive={comp.color}
              emissiveIntensity={isSelected ? 1.5 : hovered ? 0.8 : 0.2}
            />
          </mesh>
        )}

        {comp.category === "Storage" && (
          <mesh castShadow>
            <cylinderGeometry args={[0.42, 0.32, 0.5, 24]} />
            <meshStandardMaterial
              color={isSelected ? "#00C8FF" : "#1E3A8A"}
              metalness={0.7}
              roughness={0.3}
              emissive={comp.color}
              emissiveIntensity={isSelected ? 1.5 : hovered ? 0.8 : 0.2}
            />
          </mesh>
        )}

        {comp.category === "Networking & Security" && (
          <mesh castShadow>
            <octahedronGeometry args={[0.42, 0]} />
            <meshStandardMaterial
              color={isSelected ? "#00C8FF" : "#0284C7"}
              metalness={0.9}
              roughness={0.1}
              emissive={comp.color}
              emissiveIntensity={isSelected ? 1.8 : hovered ? 0.9 : 0.3}
            />
          </mesh>
        )}

        {comp.category === "Application Layer" && (
          <mesh castShadow>
            <dodecahedronGeometry args={[0.38, 0]} />
            <meshStandardMaterial
              color={isSelected ? "#00C8FF" : "#0369A1"}
              metalness={0.85}
              roughness={0.2}
              emissive={comp.color}
              emissiveIntensity={isSelected ? 1.5 : hovered ? 0.8 : 0.2}
            />
          </mesh>
        )}
      </Float>

      {/* Orbiting selection halo */}
      {isSelected && (
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.65, 0.75, 32]} />
          <meshBasicMaterial color="#00C8FF" transparent opacity={0.85} side={THREE.DoubleSide} />
        </mesh>
      )}

      {/* HTML Tag Label */}
      <Html position={[0, 0.65, 0]} center distanceFactor={9} zIndexRange={[100, 0]}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          className={`cursor-pointer transition-all duration-300 px-2.5 py-1 rounded-full text-[10px] font-mono whitespace-nowrap shadow-md border ${
            isSelected
              ? "bg-[#0F172A] text-[#00C8FF] border-[#00C8FF] shadow-[0_0_15px_rgba(0,200,255,0.4)] scale-110"
              : hovered
              ? "bg-white text-primary-blue border-[#0090D2] scale-105"
              : "bg-white/95 text-slate-800 border-slate-200"
          }`}
        >
          <span className="font-semibold">{comp.name}</span>
          <span className="ml-1 text-[9px] opacity-75">[{comp.provider}]</span>
        </button>
      </Html>
    </group>
  );
};

// Beam connecting node to center
const CloudConnectionLine: React.FC<{
  targetPos: [number, number, number];
  color: string;
}> = ({ targetPos, color }) => {
  const points = React.useMemo(() => {
    return [new THREE.Vector3(0, 0.4, 0), new THREE.Vector3(...targetPos)];
  }, [targetPos]);

  return (
    <Line
      points={points}
      color={color}
      transparent
      opacity={0.4}
      lineWidth={1.5}
    />
  );
};
