"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Code, Cloud } from "lucide-react";

const services = [
    {
        icon: Brain,
        title: "AI & Machine Learning",
        desc: "Predictive intelligence that turns raw data into real-time decisions."
    },
    {
        icon: Zap,
        title: "AI-Powered Automation",
        desc: "Intelligent workflows that eliminate manual effort and increase speed."
    },
    {
        icon: Code,
        title: "Custom Software",
        desc: "Scalable, performance-driven systems built for enterprise demands."
    },
    {
        icon: Cloud,
        title: "Cloud Infrastructure",
        desc: "Secure, scalable, and future-ready infrastructure solutions."
    }
];

const Services = () => {
    return (
        <section className="relative py-32 bg-background/50 z-10 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-5xl font-bold mb-20 text-center tracking-tight"
                >
                    Capabilities
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="bg-neutral-900/40 border border-white/5 p-8 md:p-12 rounded-xl hover:border-primary/20 hover:bg-neutral-900/60 transition-all duration-500 group"
                        >
                            <item.icon className="w-10 h-10 text-white/40 mb-8 group-hover:text-primary transition-colors" />
                            <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                            <p className="text-white/50">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
