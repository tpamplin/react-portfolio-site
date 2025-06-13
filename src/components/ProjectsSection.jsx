
const projects = [
    {
        title: "Legacy Portfolio site",
        description: "Written with HTML and CSS. No bells or whistles here.",
        image: "../../public/projects/portfolio-shot.png",
        technologies: ["HTML", "CSS"],
        link: "",
        repoLink: "https://github.com/tpamplin/portfolio-site"
    },
    {
        title: "Pokedex",
        description: "A pokedex app created with JavaScript that shows you a list of pokemon, and allows you to to click the pokemon to view more information about it.",
        image: "../../public/projects/pokedex-shot.png",
        technologies: ["Javascript", "HTML", "CSS"],
        link: "https://tpamplin.github.io/js-pokedex/",
        repoLink: "https://github.com/tpamplin/js-pokedex"
    },
    {
        title: "MyFlix API",
        description: "An API built with Node.JS and express, with MongoDB for the database. Will serve up info about movies, directors and genres. As well as processing login, authentication and user creation/deletion requests. This acts as the backend for the MyFlix Client.",
        image: "../../public/projects/api-shot.png",
        technologies: ["Javascript", "Express", "Node.JS"],
        link: "https://pamplin-myflix.netlify.app/",
        repoLink: "https://github.com/tpamplin/js-movie-api"
    },
    {
        title: "MyFlix React Client",
        description: "Lightweight React app that will allow you to login to view a list of movies, which you can add to a list of your favorites.",
        image: "../../public/projects/myflix-shot.png",
        technologies: ["React", "React-Bootstrap", "Parcel"],
        link: "https://pamplin-myflix.netlify.app/",
        repoLink: "https://github.com/tpamplin/MyFlix-Client",
        caseStudyLink: ""
    },
    {
        title: "Meet App",
        description: "Shows you different events, you can sort by city and specify the number of events you want to see. Works offline and is downloadable as a proggressive web application. Will also show you charts to plot the data currently shown on screen.",
        image: "../../public/projects/meet-shot.png",
        technologies: ["React", "Vite", "Google Calendar Api"],
        link: "https://meet-app-jet.vercel.app/",
        repoLink: "https://github.com/tpamplin/meet-app",
        caseStudyLink: ""
    },
    {
        title: "Chat App",
        description: "A chat app created with React Native and Gifted chat, allows the user to anonymously authenticate and then send messages to other users connected to the same server. You can also send images or your location.",
        image: "../../public/projects/chat-shot.png",
        technologies: ["React Native", "Gifted Chat", "Expo"],
        link: "https://youtube.com/shorts/hmha4A-y1c0",
        repoLink: "https://github.com/tpamplin/chat",
        caseStudyLink: ""
    },
    {
        title: "Angular MyFlix Client",
        description: "Very similar to the MyFlix React Client (using the same api) but written in Angular, and using Angular Material for the UI components.",
        image: "../../public/projects/myflix-angular-shot.png",
        technologies: ["TypeScript", "Angular", "Angular Material"],
        link: "https://tpamplin.github.io/MyFlix-Angular-client/welcome",
        repoLink: "https://github.com/tpamplin/MyFlix-Angular-client"
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative bg-secondary/30">

        </section>
    );
}