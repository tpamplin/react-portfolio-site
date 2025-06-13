export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About <span className="text-primary"> Me</span>
                </h2>
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

                    <div>

                    </div>
            
                </div>
            </div>
        </section>
    )
}