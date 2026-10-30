import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Html, Sphere, Ring } from "@react-three/drei";
import * as THREE from "three";

interface HeroSphereProps {
  mouse: { normalizedX: number; normalizedY: number };
}

const TECH_TAGS = [
  { name: "REACT", color: "#00C8FF", orbitRadius: 2.7, speed: 0.6, phase: 0 },
  { name: "PYTHON", color: "#1263B5", orbitRadius: 2.9, speed: 0.45, phase: 1.0 },
  { name: "DJANGO", color: "#0090D2", orbitRadius: 3.1, speed: 0.5, phase: 2.2 },
  { name: "AWS", color: "#00C8FF", orbitRadius: 3.3, speed: 0.4, phase: 3.4 },
  { name: "AZURE", color: "#1263B5", orbitRadius: 2.8, speed: 0.55, phase: 4.5 },
  { name: "NETWORKING", color: "#0090D2", orbitRadius: 3.4, speed: 0.35, phase: 5.2 },
  { name: "LINUX", color: "#00C8FF", orbitRadius: 3.0, speed: 0.65, phase: 1.8 },
  { name: "ERPNEXT", color: "#1263B5", orbitRadius: 3.2, speed: 0.48, phase: 2.9 }
];

export const HeroSphere: React.FC<HeroSphereProps> = ({ mouse }) => {
  const outerSphereRef = useRef<THREE.Mesh>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate micro particles
  const particleCount = 180;
  const [particlePositions, particleScales] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.2 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      scales[i] = Math.random();
    }
    return [positions, scales];
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Smooth mouse follow rotation on master group
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouse.normalizedX * 0.4 + t * 0.08,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mouse.normalizedY * 0.3,
        0.05
      );
    }

    // Outer transparent blue glass sphere
    if (outerSphereRef.current) {
      outerSphereRef.current.rotation.y += delta * 0.15;
      outerSphereRef.current.rotation.z += delta * 0.08;
    }

    // Inner chrome core sphere
    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.x -= delta * 0.2;
      innerSphereRef.current.rotation.y -= delta * 0.25;
      // subtle pulsation
      const scale = 1 + Math.sin(t * 1.5) * 0.03;
      innerSphereRef.current.scale.set(scale, scale, scale);
    }

    // Concentric Energy Rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.6) * 0.15;
      ring1Ref.current.rotation.y = t * 0.35;
      ring1Ref.current.rotation.z = Math.cos(t * 0.4) * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -Math.PI / 4 + Math.cos(t * 0.5) * 0.2;
      ring2Ref.current.rotation.y = -t * 0.25;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = Math.PI / 2;
      ring3Ref.current.rotation.z = t * 0.4;
    }

    // Micro particles slow orbital drift
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.04;
      particlesRef.current.rotation.x = Math.sin(t * 0.02) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
        {/* Core Chrome Metallic Sphere */}
        <Sphere ref={innerSphereRef} args={[1.05, 64, 64]}>
          <meshStandardMaterial
            color="#E2E8F0"
            metalness={0.96}
            roughness={0.12}
            envMapIntensity={1.5}
          />
        </Sphere>

        {/* Outer Transparent Blue Glass Sphere */}
        <Sphere ref={outerSphereRef} args={[1.45, 64, 64]}>
          <meshPhysicalMaterial
            color="#0090D2"
            transmission={0.88}
            opacity={0.7}
            transparent={true}
            roughness={0.08}
            ior={1.45}
            thickness={1.2}
            reflectivity={0.9}
            clearcoat={1}
            clearcoatRoughness={0.05}
          />
        </Sphere>

        {/* Glowing Energy Ring 1 */}
        <Ring ref={ring1Ref} args={[1.8, 1.86, 64]}>
          <meshBasicMaterial
            color="#00C8FF"
            side={THREE.DoubleSide}
            transparent={true}
            opacity={0.85}
          />
        </Ring>

        {/* Glowing Energy Ring 2 */}
        <Ring ref={ring2Ref} args={[2.08, 2.14, 64]}>
          <meshBasicMaterial
            color="#1263B5"
            side={THREE.DoubleSide}
            transparent={true}
            opacity={0.7}
          />
        </Ring>

        {/* Glowing Energy Ring 3 */}
        <Ring ref={ring3Ref} args={[2.35, 2.4, 64]}>
          <meshBasicMaterial
            color="#0090D2"
            side={THREE.DoubleSide}
            transparent={true}
            opacity={0.55}
          />
        </Ring>

        {/* Floating Technology Labels orbiting around the sphere */}
        {TECH_TAGS.map((tag) => (
          <TechOrbitTag key={tag.name} tag={tag} />
        ))}
      </Float>

      {/* Floating Micro-Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          color="#00C8FF"
          transparent={true}
          opacity={0.75}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
};

// Subcomponent for orbiting HTML badge
const TechOrbitTag: React.FC<{
  tag: { name: string; color: string; orbitRadius: number; speed: number; phase: number };
}> = ({ tag }) => {
  const badgeRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!badgeRef.current) return;
    const t = state.clock.getElapsedTime() * tag.speed + tag.phase;
    const x = Math.cos(t) * tag.orbitRadius;
    const z = Math.sin(t) * tag.orbitRadius;
    const y = Math.sin(t * 1.5 + tag.phase) * 0.65;
    badgeRef.current.position.set(x, y, z);
  });

  return (
    <group ref={badgeRef}>
      <Html center distanceFactor={8} zIndexRange={[100, 0]}>
        <div
          className="select-none pointer-events-none px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase backdrop-blur-md border shadow-md transition-all duration-300 whitespace-nowrap"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            borderColor: tag.color,
            color: "#0F172A",
            boxShadow: `0 4px 14px -2px ${tag.color}40`,
          }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 animate-pulse"
            style={{ backgroundColor: tag.color }}
          />
          {tag.name}
        </div>
      </Html>
    </group>
  );
};
