"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

const MovingOrb = () => {
    const meshRef = useRef<any>(null);
    const { mouse } = useThree();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            // Subtle rotation
            meshRef.current.rotation.x = time * 0.2;
            meshRef.current.rotation.y = time * 0.3;

            // Mouse Parallax
            // mouse.x/y are normalized (-1 to 1)
            const targetX = mouse.x * 0.5;
            const targetY = mouse.y * 0.5;

            meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.1;
            meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.1;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
            <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.2}>
                <MeshDistortMaterial
                    color="#1d0d33"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    roughness={0.2}
                    metalness={0.9}
                />
            </Sphere>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00b4d8" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#7209b7" />
        </Float>
    )
}

const HeroCanvas = () => {
    return (
        <div className="absolute inset-0 z-0 opacity-60">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <MovingOrb />
            </Canvas>
        </div>
    )
}

export default HeroCanvas;
