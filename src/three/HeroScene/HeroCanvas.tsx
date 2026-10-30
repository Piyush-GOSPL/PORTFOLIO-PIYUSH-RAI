import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { HeroSphere } from "./HeroSphere";
import { useMousePosition } from "@/hooks/useMousePosition";

export const HeroCanvas: React.FC = () => {
  const mouse = useMousePosition();

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        className="w-full h-full pointer-events-auto"
      >
        <Suspense fallback={null}>
          {/* Key lights for Chrome & Glass reflections */}
          <ambientLight intensity={1.2} />
          
          {/* Primary Top Key Light */}
          <directionalLight
            position={[5, 8, 5]}
            intensity={2.2}
            color="#FFFFFF"
          />

          {/* Electric Blue Rim Light 1 */}
          <pointLight
            position={[-4, 2, -3]}
            intensity={4.5}
            color="#0090D2"
            distance={15}
          />

          {/* Cyan Rim Light 2 */}
          <pointLight
            position={[4, -3, 2]}
            intensity={4.0}
            color="#00C8FF"
            distance={15}
          />

          {/* Deep Navy Ground Reflection */}
          <pointLight
            position={[0, -5, -2]}
            intensity={2.5}
            color="#1263B5"
            distance={12}
          />

          {/* Realistic Sky / Studio reflections */}
          <Environment preset="city" />

          {/* 3D Centerpiece Sphere */}
          <HeroSphere mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  );
};
