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
                    <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                    <Link href="/cases" className="hover:text-white transition-colors">Case Studies</Link>
                    <Link href="/about" className="hover:text-white transition-colors">About</Link>
                    <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
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
