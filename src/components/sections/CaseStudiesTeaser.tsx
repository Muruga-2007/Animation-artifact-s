"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
    { title: "FinTech fraud reduction by 40%", tag: "Finance", metric: "40%" },
    { title: "Global supply chain optimization", tag: "Logistics", metric: "3x ROI" },
    { title: "Healthcare patient flow prediction", tag: "Health", metric: "95% Acc" }
];

const CaseStudiesTeaser = () => {
    return (
        <section className="py-32 bg-background border-t border-border">
            <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end">
                <div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Impact</h2>
                    <p className="text-text-muted">Measurable results for forward-thinking enterprises.</p>
                </div>
                <a href="/cases" className="text-white hover:text-primary transition-colors font-medium">View Case Studies</a>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {cases.map((c, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="group aspect-[4/5] bg-card rounded-2xl relative overflow-hidden border border-border hover:border-white/20 transition-colors p-8 flex flex-col justify-end"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <span className="text-xs font-mono text-primary mb-2 block">{c.tag}</span>
                            <h3 className="text-2xl font-bold text-white mb-2">{c.title}</h3>
                            <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                                <span className="text-white/60 text-sm">Read Story</span>
                                <ArrowUpRight className="w-4 h-4 text-primary" />
                            </div>
                        </div>

                        <div className="absolute top-6 right-6">
                            <span className="text-4xl font-display font-bold text-white/10 group-hover:text-white/20 transition-colors">{c.metric}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CaseStudiesTeaser;
