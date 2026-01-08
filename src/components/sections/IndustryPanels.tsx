"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const industries = [
    { name: "Financial Services", desc: "Fraud detection, algorithmic trading, and personalized banking at scale.", color: "bg-surface" },
    { name: "Retail & eCommerce", desc: "Demand forecasting, dynamic pricing, and hyper-personalized recommendations.", color: "bg-surface/50" },
    { name: "Healthcare", desc: "Diagnostic support, patient data analysis, and operational efficiency.", color: "bg-surface" },
    { name: "SaaS & Platforms", desc: "Feature optimization, churn prediction, and intelligent user flows.", color: "bg-surface/50" }
];

const IndustryPanels = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useGSAP(() => {
        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0
        }, {
            translateX: "-300vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "2000 top",
                scrub: 0.6,
                pin: true,
            }
        });
        return () => {
            pin.kill();
        };
    }, { scope: triggerRef });

    return (
        <section className="overflow-hidden">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="h-screen w-[400vw] flex relative">
                    {industries.map((ind, i) => (
                        <div key={i} className={`w-screen h-full flex items-center justify-center ${ind.color} border-r border-white/5 relative`}>
                            <div className="max-w-4xl px-6 text-center">
                                <span className="text-primary font-mono text-sm mb-4 block">0{i + 1} / 04</span>
                                <h3 className="text-5xl md:text-8xl font-display font-bold text-white mb-8">
                                    {ind.name}
                                </h3>
                                <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto leading-relaxed">
                                    {ind.desc}
                                </p>
                                <button className="mt-12 group flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-primary transition-all mx-auto">
                                    Explore Solution <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryPanels;
