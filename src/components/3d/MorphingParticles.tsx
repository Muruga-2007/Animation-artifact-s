"use client";

import { useMemo, useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { vertexShader, fragmentShader } from "@/lib/shaders/particleShaders";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMotionTier } from "@/components/layout/AdaptiveMotion";

// Register ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// Helper to generate shapes
const generateShapes = (count: number, radius: number = 2) => {
    // 1. Base Shape: Sphere (Brain-like)
    const posArray = new Float32Array(count * 3);
    // 2. Target 1: Torus (Idea/Lightbulb-ish abstract)
    const target1Array = new Float32Array(count * 3);
    // 3. Target 2: Cube/Plane (Structure)
    const target2Array = new Float32Array(count * 3);

    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    // Color Palette (Dala-like: purples, blues, yellows, teals)
    const PALETTE = [
        new THREE.Color("#6366f1"), // Indigo
        new THREE.Color("#8b5cf6"), // Violet
        new THREE.Color("#ec4899"), // Pink
        new THREE.Color("#14b8a6"), // Teal
        new THREE.Color("#fbbf24"), // Amber
    ];

    for (let i = 0; i < count; i++) {
        // --- Shape 1: Sphere ---
        const r = radius * Math.cbrt(Math.random());
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);

        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        posArray[i * 3] = x;
        posArray[i * 3 + 1] = y;
        posArray[i * 3 + 2] = z;

        // --- Shape 2: Torus Knot-ish cloud ---
        // A rough parametric shape
        const t = Math.random() * 100;
        const u = (i / count) * Math.PI * 2 * 4; // wrapping
        const tubularR = 0.5 + Math.random() * 0.5;
        const mainR = 2.0;

        const tx = (mainR + tubularR * Math.cos(u * 2)) * Math.cos(u);
        const ty = (mainR + tubularR * Math.cos(u * 2)) * Math.sin(u);
        const tz = tubularR * Math.sin(u * 2) + (Math.random() - 0.5); // noise

        target1Array[i * 3] = tx;
        target1Array[i * 3 + 1] = ty;
        target1Array[i * 3 + 2] = tz;

        // --- Shape 3: Spread out Plane / Data Field ---
        // Wide field
        const px = (Math.random() - 0.5) * 10;
        const py = (Math.random() - 0.5) * 6;
        const pz = (Math.random() - 0.5) * 2;

        target2Array[i * 3] = px;
        target2Array[i * 3 + 1] = py;
        target2Array[i * 3 + 2] = pz;

        // --- Colors & Sizes ---
        const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;

        sizes[i] = Math.random();
    }

    return { posArray, target1Array, target2Array, colors, sizes };
};

export default function MorphingParticles() {
    const mesh = useRef<THREE.Points>(null);
    const materialRef = useRef<THREE.ShaderMaterial>(null);
    const tier = useMotionTier();

    // Limit particle count based on tier for performance
    const count = tier === "high" ? 15000 : tier === "reduced" ? 5000 : 1000;

    const { posArray, target1Array, target2Array, colors, sizes } = useMemo(
        () => generateShapes(count, 2.5),
        [count]
    );

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
        }
    });

    // Scroll Integration
    useEffect(() => {
        // We want the progress to go from 0 -> 2 over the full page scroll
        // 0 -> 1: First Section to Middle
        // 1 -> 2: Middle to End

        const ctx = gsap.context(() => {
            if (!materialRef.current) return;

            // Animate uProgress based on scroll
            gsap.to(materialRef.current.uniforms.uProgress, {
                value: 2.0,
                ease: "none",
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.5, // smooth scrubbing
                },
            });

            // Optional: Rotate the whole system slightly on scroll
            if (mesh.current) {
                gsap.to(mesh.current.rotation, {
                    y: Math.PI * 2,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "body",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 1,
                    }
                })
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <points ref={mesh} rotation={[0, 0, 0]}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={posArray}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-target1"
                    count={count}
                    array={target1Array}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-target2"
                    count={count}
                    array={target2Array}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    array={colors}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-size"
                    count={count}
                    array={sizes}
                    itemSize={1}
                />
            </bufferGeometry>
            <shaderMaterial
                ref={materialRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={{
                    uTime: { value: 0 },
                    uProgress: { value: 0 },
                    uScale: { value: tier === "minimal" ? 0 : 3.0 }, // Hide or show
                    uOpacity: { value: 0.8 },
                }}
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}
