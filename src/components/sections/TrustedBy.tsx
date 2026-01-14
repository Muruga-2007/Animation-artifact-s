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

            <div className="relative flex overflow-x-hidden mask-linear-fade">
                <div className="flex gap-12 animate-marquee whitespace-nowrap py-4">
                    {[...logos, ...logos].map((logo, i) => (
                        <span key={i} className="text-2xl font-display font-bold text-white/20 uppercase mx-4 hover:text-primary transition-colors duration-300 cursor-default">
                            {logo}
                        </span>
                    ))}
                </div>

                <div className="flex gap-12 animate-marquee whitespace-nowrap py-4 absolute top-0 left-0" aria-hidden="true">
                    {[...logos, ...logos].map((logo, i) => (
                        <span key={i} className="text-2xl font-display font-bold text-white/20 uppercase mx-4 hover:text-primary transition-colors duration-300 cursor-default">
                            {logo}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
