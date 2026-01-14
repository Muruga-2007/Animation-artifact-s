"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import HeroCanvas from "./HeroCanvas";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Scroll Animation (Exit)
        gsap.to(contentRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,
            },
            y: -100,
            opacity: 0,
            scale: 0.95
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative h-screen w-full flex items-center overflow-hidden">
            {/* 3D Core */}
            <div className="absolute inset-0 z-0">
                <HeroCanvas />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
                {/* Left Content */}
                <div ref={contentRef} className="flex flex-col items-start text-left">
                    <StaggerContainer className="flex flex-col items-start" staggerDelay={0.15}>
                        <StaggerItem>
                            <div className="inline-block mb-6 relative overflow-hidden rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md">
                                <span className="relative z-10 px-4 py-1.5 block text-sm font-medium text-primary tracking-wider uppercase">
                                    Chapter 01 · The Vision
                                </span>
                                <div className="absolute inset-0 bg-primary/10 w-full h-full transform -translate-x-full animate-[shimmer_2s_infinite]" />
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8 text-white leading-[1.05]">
                                Architecting <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Intelligence.</span>
                            </h1>
                        </StaggerItem>

                        <StaggerItem>
                            <p className="max-w-xl text-lg md:text-xl text-text-muted mb-10 leading-relaxed font-light">
                                We build the neural capacity of tomorrow's enterprises. Turn data complexity into decision clarity.
                            </p>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative px-8 py-4 bg-primary text-black font-semibold rounded-full overflow-hidden transition-all text-center"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        Start Your Journey <ArrowRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                                    </span>
                                    <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-transparent border border-white/10 text-white font-medium rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                                >
                                    Explore Methodology <ChevronRight className="w-4 h-4" />
                                </motion.button>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
                {/* Right Content (Visual Placeholder/Spacer) */}
                <div className="hidden lg:block h-full w-full">
                    {/* The 3D canvas is absolute but visually occupies this space conceptually */}
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
        </section>
    );
};

export default Hero;
