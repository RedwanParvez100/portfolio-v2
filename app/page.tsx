import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

