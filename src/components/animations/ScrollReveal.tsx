"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
    variant?: "fade" | "slide" | "blur";
}

export function ScrollReveal({
    children,
    width = "fit-content",
    delay = 0,
    className = "",
    variant = "slide"
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const variants: Record<string, Variants> = {
        slide: {
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
        },
        fade: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        blur: {
            hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
            visible: { opacity: 1, filter: "blur(0px)", y: 0 }
        }
    };

    return (
        <div ref={ref} style={{ width }} className={className}>
            <motion.div
                variants={variants[variant]}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
                {children}
            </motion.div>
        </div>
    );
}

// Staggered container for lists
export function StaggerContainer({ children, className = "", staggerDelay = 0.1 }: { children: React.ReactNode, className?: string, staggerDelay?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: staggerDelay }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className = "", variant = "slide" }: { children: React.ReactNode, className?: string, variant?: "fade" | "slide" | "blur" }) {
    const variants: Record<string, Variants> = {
        slide: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
        },
        fade: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        blur: {
            hidden: { opacity: 0, filter: "blur(8px)", y: 15 },
            visible: { opacity: 1, filter: "blur(0px)", y: 0 }
        }
    };

    return (
        <motion.div variants={variants[variant]} className={className} transition={{ duration: 0.6, ease: "easeOut" }}>
            {children}
        </motion.div>
    );
}
