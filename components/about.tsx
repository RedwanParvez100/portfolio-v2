import Image from "next/image"
import Link from "next/link"
import AnimateInView from "./animate-in-view"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateInView animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get to know me better and understand my passion for web development.
            </p>
          </div>
        </AnimateInView>

        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          <AnimateInView animation="slide-in-left" className="md:w-2/5 mb-10 md:mb-0">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-md transition-transform duration-500 hover:shadow-xl hover:scale-[1.02]">
              <Image src="/placeholder.svg?height=1200&width=800" alt="John Doe" fill className="object-cover" />
            </div>
          </AnimateInView>

          <div className="md:w-3/5">
            <AnimateInView animation="slide-in-right" delay={100}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">John Doe</h3>
            </AnimateInView>
            <AnimateInView animation="fade-up" delay={200}>
              <p className="text-gray-600 mb-4">
                I'm a junior frontend developer with a passion for creating beautiful and functional web experiences.
                After completing a comprehensive web development bootcamp, I've been focusing on building projects that
                help me refine my skills and learn new technologies.
              </p>
            </AnimateInView>
            <AnimateInView animation="fade-up" delay={300}>
              <p className="text-gray-600 mb-4">
                I'm particularly interested in responsive design, accessibility, and creating intuitive user interfaces.
                My goal is to write clean, maintainable code that provides great user experiences across all devices.
              </p>
            </AnimateInView>
            <AnimateInView animation="fade-up" delay={400}>
              <p className="text-gray-600 mb-6">
                When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new recipes in
                the kitchen. I'm always eager to learn and grow both as a developer and as a person.
              </p>
            </AnimateInView>

            <AnimateInView animation="fade-up" delay={500}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all duration-300 hover:scale-105 transform"
                >
                  Contact Me
                </Link>
                <Link
                  href="#"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-all duration-300 hover:scale-105 transform"
                >
                  Download CV
                </Link>
              </div>
            </AnimateInView>
          </div>
        </div>
      </div>
    </section>
  )
}

