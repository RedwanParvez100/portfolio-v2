import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import AnimateInView from "./animate-in-view"
import prj1 from "../public/images/Project1.png"
import prj2 from "../public/images/Project2.png"
import prj3 from "../public/images/Project3.png"


export default function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "A full-stack e-commerce website using the MERN stack where users can browse products, add them to cart, and make secure payments. It includes features like user authentication, admin product management, and order tracking.",
      tags: ["Tailwind CSS", "JavaScript", "React", "Express", "Node.js", "MongoDB"],
      imageUrl: prj1,
      liveUrl: "#",
      githubUrl: "https://github.com/RedwanParvez100/e-commerce",
    },
    {
      title: "Mediusware-Website",
      description:
        "A responsive company webpage for Mediusware Ltd using React and Tailwind CSS. The site features clean design, smooth navigation, and effectively showcases company services.",
      tags: ["Tailwind CSS", "React"],
      imageUrl: prj2,
      liveUrl: "https://mediusware-page-design.netlify.app/",
      githubUrl: "https://github.com/RedwanParvez100/mediusware-web",
    },
    {
      title: "Train-Ticket-Reservation-System",
      description:
        "A train ticket reservation system where users can sign up, log in, view train details like routes, schedules, and fares, and purchase tickets online. It provides a smooth and easy way to book train tickets.",
      tags: ["Java", "MySql"],
      imageUrl: prj3,
      liveUrl: "#",
      githubUrl: "https://github.com/RedwanParvez100/Train-Ticket-Reservation-System",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
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
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group h-full flex flex-col">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow leading-relaxed text-justify">{project.description}</p>
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
                  <div className="flex gap-3 mt-auto">
                    <Link
                      target="_blank"
                      href={project.liveUrl}
                      className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-300"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span>Live Demo</span>
                    </Link>
                    <Link
                      target="_blank"
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
