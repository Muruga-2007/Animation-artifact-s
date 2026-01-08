"use client";

import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-accent/10" />

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold mb-12"
                >
                    Let&#39;s build intelligent <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
                        systems together.
                    </span>
                </motion.h2>

                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all"
                >
                    Start Your AI Journey
                </motion.button>
            </div>
        </section>
    );
};

export default Contact;
