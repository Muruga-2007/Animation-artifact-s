"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm"; // Typescript quirk workaround for maath if installed, using raw calculations instead to avoid extra dep for now

// Simple particle generator function since we didn't add maath to package.json
function generateSphere(n: number, radius: number) {
    const points = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
        const r = radius * Math.cbrt(Math.random());
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);

        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        points[i * 3] = x;
        points[i * 3 + 1] = y;
        points[i * 3 + 2] = z;
    }
    return points;
}

function StarBackground(props: any) {
    const ref = useRef<any>();
    // @ts-ignore
    const sphere = generateSphere(5000, 1.5);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#334155"
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

const BackgroundCanvas = () => {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none opacity-40">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <StarBackground />
            </Canvas>
        </div>
    );
};

export default BackgroundCanvas;
