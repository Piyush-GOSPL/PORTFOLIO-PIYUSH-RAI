import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Html, Sphere, Ring } from "@react-three/drei";
import * as THREE from "three";

interface HeroSphereProps {
  mouse: { normalizedX: number; normalizedY: number };
}

// User requested exact labels: Cisco, React, Python, AWS, Azure, Linux, Networking
const TECH_TAGS = [
  { name: "Cisco", color: "#00D4FF", orbitRadius: 2.7, speed: 0.6, phase: 0 },
  { name: "React", color: "#168BFF", orbitRadius: 2.9, speed: 0.45, phase: 1.0 },
  { name: "Python", color: "#00D4FF", orbitRadius: 3.1, speed: 0.5, phase: 2.1 },
  { name: "AWS", color: "#168BFF", orbitRadius: 3.3, speed: 0.4, phase: 3.2 },
  { name: "Azure", color: "#00D4FF", orbitRadius: 2.8, speed: 0.55, phase: 4.3 },
  { name: "Linux", color: "#168BFF", orbitRadius: 3.0, speed: 0.62, phase: 5.2 },
  { name: "Networking", color: "#00D4FF", orbitRadius: 3.4, speed: 0.38, phase: 2.8 }
];

export const HeroSphere: React.FC<HeroSphereProps> = ({ mouse }) => {
  const outerSphereRef = useRef<THREE.Mesh>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate micro particles with electric blue & cyan distribution
  const particleCount = 200;
  const [particlePositions] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.1 + Math.random() * 2.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return [positions];
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Mouse follow rotation on master group with smooth lerping
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouse.normalizedX * 0.45 + t * 0.08,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mouse.normalizedY * 0.35,
        0.05
      );
    }

    // Outer transparent blue glass sphere
    if (outerSphereRef.current) {
      outerSphereRef.current.rotation.y += delta * 0.18;
      outerSphereRef.current.rotation.z += delta * 0.09;
    }

    // Inner chrome core sphere
    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.x -= delta * 0.22;
      innerSphereRef.current.rotation.y -= delta * 0.28;
      const scale = 1 + Math.sin(t * 1.5) * 0.03;
      innerSphereRef.current.scale.set(scale, scale, scale);
    }

    // Concentric Energy Rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.6) * 0.15;
      ring1Ref.current.rotation.y = t * 0.35;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -Math.PI / 4 + Math.cos(t * 0.5) * 0.2;
      ring2Ref.current.rotation.y = -t * 0.25;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = Math.PI / 2;
      ring3Ref.current.rotation.z = t * 0.4;
    }

    // Micro particles orbital drift
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.05;
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
            roughness={0.08}
            envMapIntensity={2.0}
          />
        </Sphere>

        {/* Outer Transparent Blue Glass Sphere */}
        <Sphere ref={outerSphereRef} args={[1.45, 64, 64]}>
          <meshPhysicalMaterial
            color="#168BFF"
            transmission={0.88}
            opacity={0.65}
            transparent={true}
            roughness={0.05}
            ior={1.48}
            thickness={1.4}
            reflectivity={0.95}
            clearcoat={1}
            clearcoatRoughness={0.03}
          />
        </Sphere>

        {/* Glowing Electric Cyan Energy Ring 1 */}
        <Ring ref={ring1Ref} args={[1.8, 1.86, 64]}>
          <meshBasicMaterial
            color="#00D4FF"
            side={THREE.DoubleSide}
            transparent={true}
            opacity={0.85}
          />
        </Ring>

        {/* Glowing Primary Blue Energy Ring 2 */}
        <Ring ref={ring2Ref} args={[2.08, 2.14, 64]}>
          <meshBasicMaterial
            color="#168BFF"
            side={THREE.DoubleSide}
            transparent={true}
            opacity={0.75}
          />
        </Ring>

        {/* Glowing Energy Ring 3 */}
        <Ring ref={ring3Ref} args={[2.35, 2.4, 64]}>
          <meshBasicMaterial
            color="#00D4FF"
            side={THREE.DoubleSide}
            transparent={true}
            opacity={0.6}
          />
        </Ring>

        {/* Floating Technical Labels */}
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
          color="#00D4FF"
          transparent={true}
          opacity={0.85}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
};

// Dark Glassmorphic Orbiting Badge
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
          className="select-none pointer-events-none px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase backdrop-blur-md border shadow-2xl transition-all duration-300 whitespace-nowrap"
          style={{
            backgroundColor: "rgba(16, 36, 61, 0.85)",
            borderColor: tag.color,
            color: "#F1F5F9",
            boxShadow: `0 0 16px -2px ${tag.color}60`,
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
