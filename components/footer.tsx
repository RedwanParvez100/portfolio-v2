import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react"
import AnimateInView from "./animate-in-view"

export default function Footer() {
  return (
    <footer className="bg-[#0B1121] text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="relative z-10">
          <AnimateInView animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Let's Build Something Amazing Together</h2>
              <p className="text-gray-400 mb-6 text-sm md:text-base">
                I'm currently available for freelance work. If you have a project that needs some creative coding, I'd
                love to hear about it.
              </p>
              <Link
                href="#contact"
                className="px-6 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-200 transition-all duration-300 hover:scale-105 transform inline-flex items-center text-sm font-medium"
              >
                Start a Conversation
                <ExternalLink size={14} className="ml-2" />
              </Link>
            </div>
          </AnimateInView>

          {/* Social Links */}
          <AnimateInView animation="fade-up" delay={100}>
            <div className="flex justify-center space-x-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1A2333] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2A3343] transition-all duration-300 hover:scale-110 transform"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1A2333] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2A3343] transition-all duration-300 hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1A2333] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2A3343] transition-all duration-300 hover:scale-110 transform"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:johndoe@example.com"
                className="w-10 h-10 rounded-full bg-[#1A2333] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2A3343] transition-all duration-300 hover:scale-110 transform"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </AnimateInView>

          {/* Navigation */}
          <AnimateInView animation="fade-up" delay={200}>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 text-sm">
              <Link href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">
                Home
              </Link>
              <Link href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">
                Skills
              </Link>
              <Link href="#portfolio" className="text-gray-400 hover:text-white transition-colors duration-300">
                Portfolio
              </Link>
              <Link href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                About
              </Link>
              <Link href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                Contact
              </Link>
            </div>
          </AnimateInView>
        </div>

        {/* Divider with Animated Dot */}
        <div className="relative mb-8">
          {/* Increased width of the gradient line */}
          <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          <div className="flex justify-center">
            <div className="bg-[#0B1121] px-6 -mt-3 relative z-10">
              {/* Increased size of the dot container and inner dot */}
              <div className="w-6 h-6 rounded-full bg-[#1A2333] flex items-center justify-center animate-pulse-border">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <AnimateInView animation="fade-up" delay={300}>
          <div className="text-center text-gray-500 text-xs space-y-1">
            <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
            <p>
              Crafted with <span className="text-red-500 animate-pulse inline-block">❤</span> and code
            </p>
          </div>
        </AnimateInView>
      </div>
    </footer>
  )
}

