import { cn } from "@/lib/utils";
import { Github, Eye, ArrowDownToLine, SquareArrowOutUpRight} from "lucide-react";

const projects = [
    {
        title: "React Portfolio site",
        description: "Written with React, Vite and Tailwind, this is a beautiful, functional, modern single page web application. You are currently Experiencing this project!",
        image: "/projects/react-portfolio-shot.png",
        tags: ["Vite", "React", "Tailwind"],
        link: "#hero",
        repoLink: "https://github.com/tpamplin/react-portfolio-site"
    },
    {
        title: "Legacy Portfolio site",
        description: "Written with HTML and CSS. No bells or whistles here.",
        image: "/projects/portfolio-shot.png",
        tags: ["HTML", "CSS"],
        link: "http://www.timpamplin.com/legacy/",
        repoLink: "https://github.com/tpamplin/portfolio-site"
    },
    {
        title: "Pokedex",
        description: "A pokedex app created with JavaScript that shows you a list of pokemon, and allows you to to click the pokemon to view more information about it.",
        image: "/projects/pokedex-shot.png",
        tags: ["Javascript", "HTML", "CSS"],
        link: "https://tpamplin.github.io/js-pokedex/",
        repoLink: "https://github.com/tpamplin/js-pokedex"
    },
    {
        title: "MyFlix API",
        description: "An API built with Node.JS and express, with MongoDB for the database. Will serve up info about movies, directors and genres. As well as processing login, authentication and user creation/deletion requests. This acts as the backend for the MyFlix Client.",
        image: "/projects/api-shot.png",
        tags: ["Javascript", "Express", "Node.JS"],
        link: "https://pamplin-myflix.netlify.app/",
        repoLink: "https://github.com/tpamplin/js-movie-api"
    },
    {
        title: "MyFlix React Client",
        description: "Lightweight React app that will allow you to login to view a list of movies, which you can add to a list of your favorites.",
        image: "/projects/myflix-shot.png",
        tags: ["React", "React-Bootstrap", "Parcel"],
        link: "https://pamplin-myflix.netlify.app/",
        repoLink: "https://github.com/tpamplin/MyFlix-Client",
        caseStudyLink: "/myflix-case-study.pdf"
    },
    {
        title: "Meet App",
        description: "Shows you different events, you can sort by city and specify the number of events you want to see. Works offline and is downloadable as a proggressive web application. Will also show you charts to plot the data currently shown on screen.",
        image: "/projects/meet-shot.png",
        tags: ["React", "Vite", "Google Calendar"],
        link: "https://meet-app-jet.vercel.app/",
        repoLink: "https://github.com/tpamplin/meet-app",
        caseStudyLink: ""
    },
    {
        title: "Chat App",
        description: "A chat app created with React Native and Gifted chat, allows the user to anonymously authenticate and then send messages to other users connected to the same server. You can also send images or your location.",
        image: "/projects/chat-shot.png",
        tags: ["React Native", "Gifted Chat", "Expo"],
        link: "https://youtube.com/shorts/hmha4A-y1c0",
        repoLink: "https://github.com/tpamplin/chat",
        caseStudyLink: ""
    },
    {
        title: "Angular MyFlix Client",
        description: "Very similar to the MyFlix React Client (using the same api) but written in Angular, and using Angular Material for the UI components.",
        image: "/projects/myflix-angular-shot.png",
        tags: ["TypeScript", "Angular", "Angular Material"],
        link: "https://tpamplin.github.io/MyFlix-Angular-client/welcome",
        repoLink: "https://github.com/tpamplin/MyFlix-Angular-client"
    },
]

export const ProjectsSection = () => {

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of the web applications I’ve built, each crafted with a strong focus on quality, usability, and real-world functionality.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card relative rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <h3 className="font-bold text-primary my-2">{project.title}</h3> 
                            <div className="h-48 p-2 overflow-hidden">
                                <img  src={project.image} alt={`a screenshot from the ${project.title} project`} />
                            </div>
                            <div className="flex justify-around">
                                {project.tags.map((tag) => (
                                    <div className="bg-primary rounded-lg flex m-1 shadow-s hover:bg-secondary">
                                        <div className="my-auto px-2 py-1 mx-auto">{tag}</div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="text-muted-foreground m-4 grow mb-20" >{project.description}</p>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 flex flex-row justify-around">

                                <div>
                                    <p className="text-primary">View</p>
                                    <a href={project.link} className="center-content">
                                        <Eye className="h-6 w-6 mx-auto mb-2 text-primary hover:text-primary/70"/>
                                    </a>
                                </div>

                                <div>
                                    <p className="text-primary">Github</p>
                                    <a href={project.repoLink}>
                                        <Github className="h-6 w-6 mx-auto mb-2 text-primary hover:text-primary/70"/>
                                    </a>
                                </div> 
                                
                                {project.caseStudyLink ? (
                                    <div>
                                        <p className="text-primary">Case Study</p>
                                        <a download href={project.caseStudyLink}>
                                            <ArrowDownToLine className="h-6 w-6 mb-2 mx-auto text-primary hover:text-primary/70"/>
                                        </a>
                                    </div>
                                ) : null}
                            </div>


                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 flex justify-around">
                    <a href="https://github.com/tpamplin" target="_blank" className="cosmic-button flex">
                        My Github <SquareArrowOutUpRight  className="h-6 w-6 ml-2"/>
                    </a>

                </div>

            </div>
        </section>
    );
}