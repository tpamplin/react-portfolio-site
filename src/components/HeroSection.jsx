import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hello, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Tim </span>
                        <span className="text-gradient opacity-0 animate-fade-in-delay-2 ml-2"> Pamplin </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I build full-stack web applications that are fast, responsive, and easy to use — designed to solve real-world problems and deliver a seamless user experience
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">View My Work</a>
                    </div>
                </div>

                <div className="absolute mx-auto opacity-0 bottom-8 left-1/2 tranform -translate-x-1/2 flex flex-col items-center animate-fade-in-delay-5">
                    <div className="animate-bounce mx-auto items-center">
                        <span className="text-small text-muted-foreground mb-2"> Scroll </span>
                        <ArrowDown className="h-5 w-5 text-primary mx-auto mt-3" />
                    </div>  
                </div>

            </div>
        </section>
    )
}