import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader"; // Use your actual loader or null

const RahulModel = ({ isMobile }) => {
  const rahul = useGLTF("/rahul3d.glb");
  console.log(rahul);

  // Optional: Add material override for debugging white model issues
  // import * as THREE from 'three';
  // rahul.scene.traverse((child) => {
  //   if (child.isMesh && !child.material) {
  //     child.material = new THREE.MeshStandardMaterial({ color: "orange" });
  //   }
  // });

  return (
    <primitive
      object={rahul.scene}
      scale={isMobile ? 0.7 : 0.75}
      position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
    />
  );
};

const RahulCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      // Optional: background color for debugging
      style={{ background: "#222" }}
    >
      {/* Move lighting out of the model component */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <RahulModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default RahulCanvas;
