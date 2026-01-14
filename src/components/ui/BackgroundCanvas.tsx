"use client";

import { Canvas } from "@react-three/fiber";
import MorphingParticles from "@/components/3d/MorphingParticles";
import { Suspense } from "react";

const BackgroundCanvas = () => {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none opacity-100">
            <Canvas camera={{ position: [0, 0, 5], fov: 35 }} gl={{ antialias: false, alpha: true }}>
                <Suspense fallback={null}>
                    <MorphingParticles />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default BackgroundCanvas;
