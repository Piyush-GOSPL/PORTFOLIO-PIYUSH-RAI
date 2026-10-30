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
          <ambientLight intensity={0.9} />
          
          {/* Main Key Light */}
          <directionalLight
            position={[5, 8, 5]}
            intensity={2.2}
            color="#FFFFFF"
          />

          {/* Electric Cyan Rim Light */}
          <pointLight
            position={[-4, 2, -3]}
            intensity={4.8}
            color="#00D4FF"
            distance={15}
          />

          {/* Primary Blue Rim Light */}
          <pointLight
            position={[4, -3, 2]}
            intensity={4.2}
            color="#168BFF"
            distance={15}
          />

          {/* Deep Navy Ground Reflection */}
          <pointLight
            position={[0, -5, -2]}
            intensity={3.0}
            color="#071426"
            distance={12}
          />

          <Environment preset="night" />

          {/* 3D Centerpiece Sphere */}
          <HeroSphere mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  );
};
