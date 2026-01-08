"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
    { num: "01", title: "Discovery", desc: "We map your data landscape and identify high-value automation targets." },
    { num: "02", title: "Architecture", desc: "Designing secure, scalable systems tailored to your enterprise stack." },
    { num: "03", title: "Development", desc: "Rapid prototyping and agile engineering with continuous feedback loops." },
    { num: "04", title: "Deployment", desc: "Seamless integration and performance tuning for production environments." }
];

const Process = () => {
    const container = useRef(null);
    const lineRef = useRef(null);

    useGSAP(() => {
        gsap.to(lineRef.current, {
            height: "100%",
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                start: "top center",
                end: "bottom center",
                scrub: 0.5
            }
        });

        const cards = gsap.utils.toArray(".process-card");
        cards.forEach((card: any) => {
            gsap.from(card, {
                opacity: 0,
                x: -50,
                duration: 0.8,
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse"
                }
            })
        });

    }, { scope: container });

    return (
        <section ref={container} className="py-32 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 relative">
                <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-1/2" />
                <div ref={lineRef} className="absolute left-[27px] md:left-1/2 top-0 w-px bg-primary transform md:-translate-x-1/2 h-0" />

                <div className="space-y-24">
                    {steps.map((step, i) => (
                        <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                            <div className="flex-1 w-full process-card">
                                <div className={`bg-card p-8 rounded-2xl border border-white/5 relative hover:border-primary/30 transition-colors ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                                    <span className="text-4xl font-display font-bold text-white/5 absolute -top-6 left-6">{step.num}</span>
                                    <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
                                    <p className="text-text-muted relative z-10">{step.desc}</p>
                                </div>
                            </div>

                            <div className="relative z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-background border border-primary/50 shadow-[0_0_20px_rgba(22,242,179,0.2)]">
                                <div className="w-3 h-3 bg-primary rounded-full" />
                            </div>
                            <div className="flex-1 hidden md:block" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
