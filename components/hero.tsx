import Link from "next/link"
import Image from "next/image"
import { ArrowDown, Github } from "lucide-react"
import AnimateInView from "./animate-in-view"
import heroImg from "../public/images/1st.png"

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
              <p className="text-gray-500 mb-2 text-xl">Hello, I'm</p>
            </AnimateInView>
            <AnimateInView animation="slide-in-left" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-gray-800">Redwan Parvez</h1>
            </AnimateInView>
            <AnimateInView animation="slide-in-left" delay={300}>
              <h2 className="text-2xl md:text-3xl lg:text-3xl text-gray-600 font-medium mb-6">
                Junior Frontend Developer
              </h2>
            </AnimateInView>
            <AnimateInView animation="fade-up" delay={400}>
              <p className="text-gray-600 mb-8 text-lg max-w-lg">
              I enjoy building clean, responsive websites and web apps using modern tools like React, Tailwind CSS, and JavaScript. I love learning new things and turning ideas into user-friendly digital experiences.
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
                  href="https://drive.google.com/drive/u/0/folders/1vfjbNM3nyCUWVx8gtdZzZWrSlIunxscz"
                  className="px-6 py-3 border border-gray-800 text-gray-800 rounded-md hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform"
                  target="_blank"
                >
                  Let's Connect
                </Link>
              </div>
            </AnimateInView>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <AnimateInView animation="zoom-in" delay={600}>
              <div className="relative w-[310px] h-[410px] md:w-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <Image
                  src={heroImg} // Replace with your image
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
            <Link href="#skills" className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
              <ArrowDown className="text-gray-800" size={24} />
            </Link>
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}

