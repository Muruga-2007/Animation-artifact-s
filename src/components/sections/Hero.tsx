"use client";

import { useRef } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import HeroCanvas from "./HeroCanvas";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Initial Load Animation
        tl.from(".hero-text", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        // Scroll Animation
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
                    <span className="hero-text inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md text-sm font-medium text-primary tracking-wider uppercase">
                        AI • Cloud • Cybersecurity
                    </span>

                    <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8 text-white leading-[1.05]">
                        Build the AI <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">advantage.</span>
                    </h1>

                    <p className="hero-text max-w-xl text-lg md:text-xl text-text-muted mb-10 leading-relaxed font-light">
                        A-Zentrix designs, builds, and secures intelligent systems that turn data into decisions and automation.
                    </p>

                    <div className="hero-text flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link href="/contact" className="group relative px-8 py-4 bg-primary text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 text-center">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Book a Strategy Session <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>

                        <Link href="/services" className="px-8 py-4 bg-transparent border border-white/10 text-white font-medium rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                            View Capabilities <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
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
