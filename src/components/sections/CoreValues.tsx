"use client";

import { motion } from "framer-motion";

const values = [
    {
        title: "Automate Complexity",
        desc: "Intelligent workflows that eliminate manual effort and increase speed."
    },
    {
        title: "Insight from Data",
        desc: "Transform raw data into real-time decisions with predictive intelligence."
    },
    {
        title: "Systems that Think",
        desc: "Scalable, performance-driven architectures built for enterprise demands."
    }
];

const CoreValues = () => {
    return (
        <section className="relative py-32 z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            className="glass-card p-10 rounded-2xl group cursor-default"
                        >
                            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-6 group-hover:bg-primary/30 transition-colors" />
                            <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-white/50 leading-relaxed font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
