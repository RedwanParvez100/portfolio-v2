import type { Metadata } from "next"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Alex Johnson - Frontend Developer Portfolio",
  description:
    "Portfolio website for Alex Johnson, a passionate frontend developer crafting beautiful and functional web experiences.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

