"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    { slug: "ai-analytics", name: "AI-Powered Analytics", tagline: "From dashboards to decisions in real time.", size: "large" },
    { slug: "custom-software", name: "Custom Software", tagline: "Architected, built, and scaled for your stack.", size: "large" },
    { slug: "machine-learning", name: "Machine Learning Solutions", tagline: "Models that learn with every interaction.", size: "medium" },
    { slug: "cloud", name: "Cloud Solutions", tagline: "Modern, secure infrastructure tuned for AI.", size: "medium" },
    { slug: "cybersecurity", name: "Cybersecurity Services", tagline: "Zero-trust, full visibility, and fast response.", size: "medium" }
];

const ServicesPreview = () => {
    const container = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".service-card");

        gsap.from(cards, {
            scrollTrigger: {
                trigger: container.current,
                start: "top center+=100",
                toggleActions: "play none none reverse"
            },
            y: 60,
            opacity: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out"
        });
    }, { scope: container });

    return (
        <section ref={container} className="py-20 relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 text-primary font-mono text-xs tracking-wider uppercase mb-4">
                            <span>CHAPTER 03</span>
                            <span className="w-1 h-1 bg-primary rounded-full" />
                            <span>THE TOOLKIT</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4">
                            Capabilities
                        </h2>

                        <p className="text-text-muted text-base md:text-lg font-light leading-relaxed max-w-md">
                            We deliver end-to-end intelligence, from data infrastructure to user-facing applications.
                        </p>
                    </div>

                    <Link href="/services" className="text-primary hover:text-white transition-colors flex items-center gap-2 font-medium group">
                        View All Services <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
                    {services.map((s, i) => (
                        <Link
                            key={i}
                            href={`/services/${s.slug}`}
                            className={`service-card group relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] hover:border-primary/40 transition-all duration-500 overflow-hidden hover:scale-[1.02] hover:shadow-[0_20px_60px_-15px_rgba(22,242,179,0.1)]
                                ${s.size === 'large' ? 'md:col-span-1 lg:row-span-1' : ''}
                                ${i === 2 ? 'lg:col-start-3 lg:row-start-1 lg:row-span-2' : ''}
                            `}
                        >
                            {/* Hover Arrow */}
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                                <ArrowUpRight className="w-6 h-6 text-primary" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-end">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                                    {s.name}
                                </h3>
                                <p className="text-text-muted text-sm md:text-base leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                    {s.tagline}
                                </p>
                            </div>

                            {/* Animated Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Subtle Grid Pattern */}
                            <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500"
                                style={{
                                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0)',
                                    backgroundSize: '40px 40px'
                                }}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
