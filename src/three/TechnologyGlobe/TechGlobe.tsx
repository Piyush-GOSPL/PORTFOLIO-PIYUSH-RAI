import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Ring } from "@react-three/drei";
import * as THREE from "three";

export const TechGlobe: React.FC = () => {
  return (
    <div className="w-full h-full relative pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 5, 4]} intensity={2.0} />
        <pointLight position={[-4, 2, -2]} intensity={3.5} color="#0090D2" />
        <pointLight position={[4, -2, 2]} intensity={3.0} color="#00C8FF" />

        <GlobeStructure />
      </Canvas>
    </div>
  );
};

const GlobeStructure: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.15;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.2;
      coreRef.current.rotation.z = t * 0.1;
    }
    if (ring1.current) ring1.current.rotation.x = t * 0.3;
    if (ring2.current) ring2.current.rotation.y = -t * 0.25;
    if (ring3.current) ring3.current.rotation.z = t * 0.35;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
        {/* Core Chrome Icosahedron */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.0, 1]} />
          <meshStandardMaterial
            color="#E2E8F0"
            metalness={0.95}
            roughness={0.1}
            wireframe={false}
          />
        </mesh>

        {/* Outer Translucent Cage */}
        <mesh>
          <icosahedronGeometry args={[1.3, 1]} />
          <meshBasicMaterial color="#00C8FF" wireframe transparent opacity={0.4} />
        </mesh>

        {/* Orbiting Blue Energy Rings */}
        <Ring ref={ring1} args={[1.6, 1.64, 48]} rotation={[Math.PI / 4, 0, 0]}>
          <meshBasicMaterial color="#00C8FF" side={THREE.DoubleSide} transparent opacity={0.8} />
        </Ring>

        <Ring ref={ring2} args={[1.85, 1.89, 48]} rotation={[-Math.PI / 3, 0, 0]}>
          <meshBasicMaterial color="#1263B5" side={THREE.DoubleSide} transparent opacity={0.7} />
        </Ring>

        <Ring ref={ring3} args={[2.1, 2.14, 48]} rotation={[0, Math.PI / 4, 0]}>
          <meshBasicMaterial color="#0090D2" side={THREE.DoubleSide} transparent opacity={0.6} />
        </Ring>

        {/* 4 Floating Expertise Nodes */}
        {[0, 1, 2, 3].map((idx) => {
          const angle = (idx * Math.PI) / 2;
          const x = Math.cos(angle) * 2.2;
          const z = Math.sin(angle) * 2.2;
          return (
            <mesh key={idx} position={[x, 0, z]}>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshBasicMaterial color="#00C8FF" />
            </mesh>
          );
        })}
      </Float>
    </group>
  );
};

