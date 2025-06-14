import { Code, Computer, Building2 } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About <span className="text-primary"> Me</span>
                </h2>
                <img src="/tim-pamplin-portrait.jpg" alt="A picture of me." className="rounded-full border border-primary border-5 m-auto  mb-10 w-75" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Full-Stack Web Developer</h3>

                        <p className="text-muted-foreground">
                            I'm a recently graduated full-stack web developer with a 
                            strong foundation in modern web technologies and a passion 
                            for building useful, user-friendly applications. 
                        </p>

                        <p className="text-muted-foreground">
                            With a fresh perspective and a drive to grow, I bring creativity, 
                            problem-solving skills, and a commitment to delivering real 
                            value through code.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>
                            
                            <a href="../../public/Timothy-Pamplin-Resume.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download Resume</a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 my-auto rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-center">
                                    <h4 className="text-primary font-semibold"> Web Development </h4>
                                    <p>
                                        Building responsive, user-friendly web applications using modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3  my-auto rounded-full bg-primary/10">
                                    <Computer className="h-6 w-6 text-primary"  />
                                </div>

                                <div className="text-center">
                                    <h4 className="text-primary font-semibold"> User Experience </h4>
                                    <p>
                                        Focusing on creating intuitive and engaging user experiences through design and functionality.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3  my-auto rounded-full bg-primary/10">
                                    <Building2 className="h-6 w-6 text-primary"  />
                                </div>
                                <div className="text-center">
                                    <h4 className="text-primary font-semibold">Team Collaboration</h4>
                                    <p>
                                        Working effectively in teams, contributing to projects with a collaborative spirit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            
                </div>
            </div>
        </section>
    )
}