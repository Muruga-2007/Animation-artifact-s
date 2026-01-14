"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50 && !scrolled) {
            setScrolled(true);
        } else if (latest <= 50 && scrolled) {
            setScrolled(false);
        }
    });

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"}`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold font-display tracking-tight text-white flex items-center gap-1">
                    A-Zentrix <span className="text-primary text-4xl leading-none">.</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
                    {[
                        { name: "Services", path: "/services" },
                        { name: "Case Studies", path: "/cases" },
                        { name: "About", path: "/about" },
                        { name: "Contact", path: "/contact" }
                    ].map((item) => (
                        <Link key={item.name} href={item.path} className="relative group overflow-hidden">
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">{item.name}</span>
                            <span
                                className="absolute bottom-0 left-0 w-full h-[1px] bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                            />
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/contact" className="hidden md:flex bg-primary text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-[0_0_20px_rgba(22,242,179,0.3)] transition-all">
                        Book a Strategy Session
                    </Link>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
