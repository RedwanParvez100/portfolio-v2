"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A responsive dashboard for an e-commerce platform with data visualization and user management.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Tailwind CSS", "Chart.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Weather App",
    description: "A weather application that displays current and forecasted weather data based on user location.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["JavaScript", "API Integration", "CSS3"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Task Management Tool",
    description: "A drag-and-drop task management application with user authentication and real-time updates.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Firebase", "Styled Components"],
    demoUrl: "#",
    githubUrl: "#",
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-12">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">My Projects</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative overflow-hidden">
                  <div
                    className="aspect-video w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-primary/80 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex gap-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

