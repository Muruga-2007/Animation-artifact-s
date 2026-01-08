"use client";

import { motion } from "framer-motion";

const technologies = [
    "Python", "TensorFlow", "PyTorch", "React", "Next.js", "AWS", "Google Cloud",
    "Kubernetes", "Docker", "Node.js", "PostgreSQL", "OpenAI API"
];

const TechStack = () => {
    return (
        <section className="py-24 border-y border-white/5 bg-neutral-900/20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-sm font-medium text-white/40 mb-12 uppercase tracking-widest">Powered By Modern Intelligence</p>

                <div className="flex flex-wrap justify-center gap-4">
                    {technologies.map((tech, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm hover:bg-white/10 hover:text-white hover:border-white/20 transition-all cursor-default"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
