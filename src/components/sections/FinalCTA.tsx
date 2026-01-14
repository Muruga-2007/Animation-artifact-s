"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
    return (
        <section className="py-32 flex items-center justify-center relative overflow-hidden bg-surface">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-50" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-primary font-mono text-sm mb-6 block"
                >
                    Chapter 06 · The Future
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight"
                >
                    Ready to architect the <br className="hidden md:block" />
                    future of your business?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-text-muted mb-12 max-w-2xl mx-auto"
                >
                    Tell us where you are and where you want to go. We’ll map the shortest secure path.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link href="/contact" className="group px-10 py-5 bg-primary text-black text-lg font-bold rounded-full hover:shadow-[0_0_30px_rgba(22,242,179,0.4)] transition-all flex items-center justify-center gap-2 relative overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">
                            Book a Strategy Call <ArrowRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                        </span>
                        <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                    <Link href="mailto:hello@azentrix.com" className="px-10 py-5 bg-transparent border border-white/10 text-white text-lg font-bold rounded-full hover:bg-white/5 transition-all">
                        Email Our Team
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
