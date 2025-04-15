import {
    Code,
    PenTool,
    Layout,
    Database,
    Briefcase,
    GitBranch,
} from "lucide-react";
import AnimateInView from "./animate-in-view";

export default function Skills() {
    const skills = [
        {
            title: "HTML5 & CSS",
            icon: <Layout className="w-10 h-10 text-gray-700" />,
            description:
                "Creating semantic markup and responsive designs with modern CSS techniques.",
        },
        {
            title: "Tailwind CSS",
            icon: <Briefcase className="w-10 h-10 text-gray-700" />,
            description:
                "Styling applications efficiently with utility-first approach.",
        },
        {
            title: "JavaScript",
            icon: <Code className="w-10 h-10 text-gray-700" />,
            description:
                "Building interactive experiences with vanilla JS and modern ES6+ features.",
        },
        {
            title: "React.js",
            icon: <PenTool className="w-10 h-10 text-gray-700" />,
            description:
                "Developing component-based UIs with React hooks and context.",
        },

        {
            title: "Git & GitHub",
            icon: <GitBranch className="w-10 h-10 text-gray-700" />,
            description:
                "Version control and collaborative development workflows.",
        },
        {
            title: "RESTful APIs",
            icon: <Database className="w-10 h-10 text-gray-700" />,
            description:
                "Consuming and integrating APIs to build dynamic applications.",
        },
    ];

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <AnimateInView animation="fade-up">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            My Skills
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            I've developed a strong foundation in frontend
                            technologies, focusing on creating responsive and
                            accessible web experiences.
                        </p>
                    </div>
                </AnimateInView>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <AnimateInView
                            key={index}
                            animation="fade-up"
                            delay={index * 100}
                        >
                            <div className="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
                                <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {skill.title}
                                </h3>
                                <p className="text-gray-600">
                                    {skill.description}
                                </p>
                            </div>
                        </AnimateInView>
                    ))}
                </div>
            </div>
        </section>
    );
}
