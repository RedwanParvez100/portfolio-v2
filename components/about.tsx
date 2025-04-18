import Link from "next/link";
import AnimateInView from "./animate-in-view";

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <AnimateInView animation="fade-up">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            About Me
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Get to know me better and understand my passion for
                            frontend development.
                        </p>
                    </div>
                </AnimateInView>

                <div className="max-w-3xl mx-auto">
                    <AnimateInView animation="fade-up" delay={100}>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Redwan Parvez
                        </h3>
                    </AnimateInView>

                    <AnimateInView animation="fade-up" delay={200}>
                        <p className="text-gray-600 mb-6 text-justify">
                            I&apos;m a junior frontend developer with a passion
                            for creating beautiful and functional web
                            experiences. I completed my BSc in Computer Science
                            and Engineering with a major in Software Engineering
                            in April 2024. Then I did a 3 months MERN stack
                            internship at Mediusware Ltd, where I worked on
                            real-time projects using modern web technologies.
                            Now, I’m focusing on frontend development and
                            building projects with React and JavaScript to
                            improve my skills.
                        </p>
                    </AnimateInView>

                    <AnimateInView animation="fade-up" delay={300}>
                        <p className="text-gray-600 mb-6">
                            I&apos;m particularly interested in responsive
                            design, accessibility, and creating intuitive user
                            interfaces. My goal is to write clean, maintainable
                            code that provides great user experiences across all
                            devices.
                        </p>
                    </AnimateInView>

                    <AnimateInView animation="fade-up" delay={400}>
                        <div className="bg-gray-50 rounded-lg p-6 mb-8 shadow-sm">
                            <h4 className="text-xl font-medium text-gray-800 mb-4">
                                My Journey
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-2 h-2 rounded-full bg-gray-800 mt-2 mr-3"></div>
                                    <div>
                                        <h5 className="font-medium text-gray-800">
                                            Sep 2024 - Nov 2024
                                        </h5>
                                        <p className="text-gray-600">
                                            Completed a MERN stack internship,
                                            working on real-time web projects
                                            using MongoDB, Express, React, and
                                            Node.js.
                                        </p>
                                    </div>
                                </div>
                                {/* <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-gray-800 mt-2 mr-3"></div>
                  <div>
                    <h5 className="font-medium text-gray-800">2021 - 2023</h5>
                    <p className="text-gray-600">Web Development Bootcamp & Self-learning</p>
                  </div>
                </div> */}
                                <div className="flex items-start">
                                    <div className="w-2 h-2 rounded-full bg-gray-800 mt-2 mr-3"></div>
                                    <div>
                                        <h5 className="font-medium text-gray-800">
                                            2020 - 2024
                                        </h5>
                                        <p className="text-gray-600">
                                            Bachelor of Science in Computer
                                            Science & Engineering (BSc in CSE)
                                        </p>
                                        <p className="text-gray-600">
                                            Bangladesh University of Business
                                            and Technology (BUBT), Dhaka,
                                            Bangladesh
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimateInView>

                    {/* <AnimateInView animation="fade-up" delay={500}>
            <p className="text-gray-600 mb-8">
              When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new recipes in the
              kitchen. I'm always eager to learn and grow both as a developer and as a person.
            </p>
          </AnimateInView> */}

                    <AnimateInView animation="fade-up" delay={600}>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            {/* <Link
                href="#contact"
                className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all duration-300 hover:scale-105 transform"
              >
                Contact Me
              </Link> */}
                            <Link
                                href="https://drive.google.com/drive/u/0/folders/1vfjbNM3nyCUWVx8gtdZzZWrSlIunxscz"
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-105 transform"
                            >
                                Download CV
                            </Link>
                        </div>
                    </AnimateInView>
                </div>
            </div>
        </section>
    );
}
