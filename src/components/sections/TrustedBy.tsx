"use client";

import { motion } from "framer-motion";

const logos = [
    "Acme Corp", "GlobalData", "Nebula Systems", "Quantum AI", "Vertex Logic", "CyberCore", "DataFlow"
];

const TrustedBy = () => {
    return (
        <section className="py-12 border-y border-white/5 bg-surface/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center sm:text-left">
                <span className="text-sm font-medium text-text-muted uppercase tracking-widest">Trusted by teams who move fast</span>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap py-4 flex gap-12 items-center">
                    {[...logos, ...logos, ...logos].map((logo, i) => (
                        <span key={i} className="text-2xl font-display font-bold text-white/20 uppercase mx-4">
                            {logo}
                        </span>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-4 flex gap-12 items-center hidden">
                    {/* Duplicate for seamless loop if needed, but Tailwind 'animate-marquee' usually handles single strip translation */}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
