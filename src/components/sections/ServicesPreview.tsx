"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    { slug: "ai-analytics", name: "AI-Powered Analytics", tagline: "From dashboards to decisions in real time." },
    { slug: "custom-software", name: "Custom Software", tagline: "Architected, built, and scaled for your stack." },
    { slug: "machine-learning", name: "Machine Learning Solutions", tagline: "Models that learn with every interaction." },
    { slug: "cloud", name: "Cloud Solutions", tagline: "Modern, secure infrastructure tuned for AI." },
    { slug: "cybersecurity", name: "Cybersecurity Services", tagline: "Zero-trust, full visibility, and fast response." }
];

const ServicesPreview = () => {
    const container = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".service-card");

        cards.forEach((card: any, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.1
            });
        });
    }, { scope: container });

    return (
        <section ref={container} className="py-32 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                            Capabilities
                        </h2>
                        <p className="text-text-muted max-w-lg">
                            We deliver end-to-end intelligence, from data infrastructure to user-facing applications.
                        </p>
                    </div>
                    <Link href="/services" className="text-primary hover:text-white transition-colors flex items-center gap-2 font-medium">
                        View All Services <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <Link key={i} href={`/services/${s.slug}`} className="service-card group block p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                                <ArrowUpRight className="w-6 h-6 text-primary" />
                            </div>

                            <div className="mt-8">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{s.name}</h3>
                                <p className="text-text-muted text-sm leading-relaxed mb-4">{s.tagline}</p>
                            </div>

                            <div className="h-1 w-full bg-border mt-auto relative overflow-hidden rounded-full">
                                <div className="absolute top-0 left-0 h-full w-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
