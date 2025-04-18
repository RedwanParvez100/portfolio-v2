import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Github } from "lucide-react";
import AnimateInView from "./animate-in-view";
import heroImg from "../public/images/1st.png";

export default function Hero() {
    return (
        <section
            id="home"
            className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <AnimateInView animation="fade-in" delay={100}>
                            <p className="text-gray-500 mb-2 text-2xl">
                                Hello, I&apos;m
                            </p>
                        </AnimateInView>
                        <AnimateInView animation="slide-in-left" delay={200}>
                            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-gray-800">
                                Redwan Parvez
                            </h1>
                        </AnimateInView>
                        <AnimateInView animation="slide-in-left" delay={300}>
                            <h2 className="text-2xl md:text-3xl lg:text-3xl text-gray-600 font-medium mb-6">
                                Junior Frontend Developer
                            </h2>
                        </AnimateInView>
                        <AnimateInView animation="fade-up" delay={400}>
                            <p className="text-gray-600 mb-8 text-lg max-w-lg text-justify">
                                I enjoy building clean, responsive websites and
                                web apps using modern tools like React, Tailwind
                                CSS, and JavaScript. I love learning new things
                                and turning ideas into user-friendly digital
                                experiences.
                            </p>
                        </AnimateInView>
                        <AnimateInView animation="fade-up" delay={500}>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="https://github.com/RedwanParvez100"
                                    className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-800 transition-all duration-300 hover:scale-105 transform flex items-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github size={20} className="mr-2" />
                                    Explore Code Universe
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/redwan-parvez/"
                                    className="px-6 py-3 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-md transition-all duration-300 hover:scale-105 transform flex items-center"
                                    target="_blank"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-5 h-5 mr-2"
                                    >
                                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                    </svg>{" "}
                                    Let&apos;s Connect
                                </Link>
                            </div>
                        </AnimateInView>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <AnimateInView animation="zoom-in" delay={600}>
                            <div className="relative w-[310px] h-[410px] md:w-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                                <Image
                                    src={heroImg} // Img Section
                                    alt="Redwan Parvez - Frontend Developer"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                    sizes="(max-width: 768px) 280px, 320px"
                                />
                            </div>
                        </AnimateInView>
                    </div>
                </div>
                <div className="flex justify-center mt-16">
                    <AnimateInView animation="bounce">
                        <Link
                            href="#skills"
                            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                        >
                            <ArrowDown className="text-gray-800" size={24} />
                        </Link>
                    </AnimateInView>
                </div>
            </div>
        </section>
    );
}
