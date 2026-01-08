"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

function MovingOrb() {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                    color="#1d0d33" // Deep violet base
                    attach="material"
                    distort={0.4}
                    speed={1.5}
                    roughness={0}
                    metalness={0.9} // Metallic look
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
