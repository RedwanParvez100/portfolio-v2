"use client"

import { motion } from "framer-motion"
import { Code, Layout, Database, Server, Palette, Layers } from "lucide-react"

const skills = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Frontend Development",
    description: "HTML5, CSS3, JavaScript, TypeScript",
  },
  {
    icon: <Layout className="h-8 w-8" />,
    title: "UI Frameworks",
    description: "React, Next.js, Vue.js",
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "CSS Frameworks",
    description: "Tailwind CSS, Bootstrap, Styled Components",
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "State Management",
    description: "Redux, Context API, Zustand",
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "API Integration",
    description: "REST, GraphQL, Axios, SWR",
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: "Tools & Deployment",
    description: "Git, Webpack, Vercel, Netlify",
  },
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="bg-secondary/30 py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">My Skills</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Here are the technologies and tools I work with to build modern web applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <div className="group rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  {skill.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

