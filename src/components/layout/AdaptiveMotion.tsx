"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { MotionConfig, useReducedMotion } from "framer-motion";

type MotionTier = "high" | "reduced" | "minimal";

const MotionContext = createContext<MotionTier>("high");

export function AdaptiveMotion({ children }: { children: React.ReactNode }) {
    const prefersReducedMotion = useReducedMotion();
    const [tier, setTier] = useState<MotionTier>("high");

    useEffect(() => {
        if (prefersReducedMotion) {
            setTier("minimal");
            return;
        }

        // Simple FPS check or device capability check could go here.
        // For now, we assume mobile devices might want reduced motion for heavy 3D.
        const isMobile = typeof window !== 'undefined' && window.matchMedia("(max-width: 768px)").matches;
        if (isMobile) {
            setTier("reduced");
        } else {
            setTier("high");
        }
    }, [prefersReducedMotion]);

    return (
        <MotionContext.Provider value={tier}>
            <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "user"}>
                {children}
            </MotionConfig>
        </MotionContext.Provider>
    );
}

export const useMotionTier = () => useContext(MotionContext);
