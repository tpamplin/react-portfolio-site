import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10 );
        }
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })


    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300 px-10", 
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className=" container flex md:grid md:grid-cols-4 items-center justify-between">

                {/* desktop navigation */}

                <a href="#hero" className="hidden md:flex text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10 ">
                        <span className="text-glow text-foreground">Tim's </span> {" "} Portfolio
                    </span>
                </a>

                <div className="hidden md:flex col-span-2 justify-between" >
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                                {item.name}
                            </a>
                        ))}

                </div>

                <div className="hidden md:flex space-x-6">
                    <ThemeToggle  state={"desktop"}/>
                </div>



                {/* mobile navigation */}

                <a href="#hero" className="md:hidden text-xl font-bold text-primary absolute left-1/2 transform -translate-x-1/2 top-5">
                    <span className="relative z-10 ">
                        <span className="text-glow text-foreground">Tim's </span> {" "} Portfolio
                    </span>
                </a>

                <button 
                    onClick={() => setIsMenuOpen(prev => !prev)} 
                    className="md:hidden p-2 text-foreground z-50 absolute top-3 right-3"
                    aria-label= {isMenuOpen ? "Close menu" : "Open menu"}
                > 
                    {isMenuOpen ? <X size="24" /> : <Menu size={24} /> }
                </button>

                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? " opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                    {item.name}
                                </a>
                            ))}
                        <ThemeToggle state={"mobile"}/>

                    </div>
                </div>
            </div>
        </nav>
    );
}