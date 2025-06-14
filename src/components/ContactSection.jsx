import { Mail, MapPin, Phone, Linkedin, Github, Send } from "lucide-react"
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast"
import { useState } from "react";

export const ContactSection = () => {

    const {toast} = useToast();
    
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message!",
            });

        }, 1500)
    }

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2> 

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    If you’re looking for a developer who cares about clean code and user-focused design, 
                    I’d love to hear from you. Feel free to reach out about job opportunities, collaborations, or new projects.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6 md:mx-8 bg-primary/10 rounded-[8px] justify-around">
                        <h3 className="space-y-6 my-3 text-primary font-semibold"> Contact Information </h3>
                        
                        <div className="space-y-6 mx-auto ">
                            <div className="flex items-start">
                                <div className="p-3 my-auto mx-2 mb-2 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="my-auto text-left mb-2">
                                    <h4 className="font-semibold">Email</h4>
                                    <a href="mailto:tim@timpamplin.com" className="text-muted-foreground hover:text-primary transition-colors">tim@timpamplin.com</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 my-auto mx-2 mb-2 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="my-auto text-left mb-2">
                                    <h4 className="font-semibold">Phone</h4>
                                    <a href="tel:+17707651005" className="text-muted-foreground hover:text-primary transition-colors">+1 (770) 765-1005</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 my-auto mx-2 mb-2 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="my-auto text-left mb-2">
                                    <h4 className="font-semibold">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">Marietta, GA, USA</a>
                                </div>
                            </div>

                        </div>

                        <h3 className="space-y-6 my-3 text-primary font-semibold"> Connect With Me </h3>

                        <div className="grid grid-cols-2 justify-around">
                            <div className="my-5">
                                <a href="https://www.linkedin.com/in/tim-pamplin-28b60332b/" className="hover:text-primary" target="_blank">
                                    <Linkedin className="h-6 m-auto w-6 text-primary" />
                                    <h4 className="font-semibold">Linkedin</h4>
                                </a>
                            </div>
                            <div className="my-5">                                
                                <a href="https://github.com/tpamplin"  className="hover:text-primary" target="_blank">
                                    <Github className="h-6 m-auto w-6 text-primary" />
                                    <h4 className="font-semibold">Github</h4>
                                </a>
                            </div>

                        </div>



                    </div>


                    <div className="space-y-6 md:mx-8 bg-primary/10 rounded-[8px] justify-around">
                        <h3 className="space-y-6 my-3 text-primary font-semibold"> Send Me A Message </h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="mx-4">
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> {" "}Your Name</label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="John Smith..."
                                />                        
                            </div>

                            <div className="mx-4">
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> {" "}Your Email</label>
                                <input 
                                    type="text" 
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="johnsmith@mail.com"
                                />                        
                            </div>

                            <div className="mx-4 mb-2">
                                <label htmlFor="message" className="block text-sm font-medium mb-2"> {" "}Your Message</label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Lorem ipsum..."
                                />                        
                            </div>

                            <button type="submit" className={cn("cosmic-button items-center flex m-auto mb-2 gap-2 justify-center")}> Send </button>
                        </form>

                    </div>


                </div>
            </div>
        </section>
    )
};