import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import AnimateInView from "./animate-in-view"

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A responsive e-commerce site built with React and Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      imageUrl: "/placeholder.svg?height=600&width=800",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application that fetches data from a weather API.",
      tags: ["React", "API Integration", "CSS"],
      imageUrl: "/placeholder.svg?height=600&width=800",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A productivity tool to manage daily tasks with local storage.",
      tags: ["JavaScript", "HTML", "CSS"],
      imageUrl: "/placeholder.svg?height=600&width=800",
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimateInView animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and approach to problem-solving.
            </p>
          </div>
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimateInView
              key={index}
              animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
              delay={index * 150}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full transition-colors duration-300 hover:bg-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href={project.liveUrl}
                      className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-300"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span>Live Demo</span>
                    </Link>
                    <Link
                      href={project.githubUrl}
                      className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-300"
                    >
                      <Github size={18} className="mr-1" />
                      <span>Code</span>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}

