"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion} from "framer-motion";
import { Code, Menu } from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled ? "bg-white shadow-sm" : "bg-white/90"
            }`}
        >
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">

                {/* <Link
                    href="/"
                    className="text-xl font-bold text-gray-800 transition-all duration-300 hover:scale-105 transform"
                >
                    DevPortfolio
                </Link> */}

                {/* Logo functionality */}
                <Link href="/">
                    <div className="flex items-center space-x-2 group">
                        <div className="relative h-10 w-10 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
                            <Code className="h-6 w-6 text-primary-foreground z-10" />
                            <motion.div
                                className="absolute inset-0 bg-primary-foreground opacity-20"
                                initial={{ y: "100%" }}
                                animate={{ y: ["100%", "-100%"] }}
                                transition={{
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "loop",
                                    duration: 2,
                                    ease: "linear",
                                }}
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg leading-tight tracking-tight">
                                <span className="text-primary">Dev</span>
                                Portfolio
                            </span>
                            {/* <span className="text-xs text-muted-foreground leading-none">
                                Frontend Developer
                            </span> */}
                        </div>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-10">
                    <Link
                        href="#home"
                        className="text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105 transform"
                    >
                        Home
                    </Link>
                    <Link
                        href="#skills"
                        className="text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105 transform"
                    >
                        Skills
                    </Link>
                    <Link
                        href="#projects"
                        className="text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105 transform"
                    >
                        Projects
                    </Link>
                    <Link
                        href="#about"
                        className="text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105 transform"
                    >
                        About
                    </Link>
                </nav>

                <div className="hidden md:block">
                    <Link
                        href="#contact"
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-105 transform"
                    >
                        Get In Touch
                    </Link>
                </div>

                {/* Mobile Navigation Button */}
                <button
                    className="md:hidden text-gray-700 transition-transform duration-300 hover:scale-110"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`md:hidden bg-white py-4 shadow-md overflow-hidden transition-all duration-300 ${
                    isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="container mx-auto px-4 flex flex-col space-y-4">
                    <Link
                        href="#home"
                        className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-all duration-300 hover:translate-x-1"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="#skills"
                        className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-all duration-300 hover:translate-x-1"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Skills
                    </Link>
                    <Link
                        href="#about"
                        className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-all duration-300 hover:translate-x-1"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="#portfolio"
                        className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-all duration-300 hover:translate-x-1"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="#contact"
                        className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-all duration-300 hover:translate-x-1"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </header>
    );
}
