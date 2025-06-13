import { useState } from 'react';
import { cn } from '../lib/utils'; 

const skills = [
    // Frontend Skills
    {name: "JavaScript", level: 95, category: "frontend"},
    {name: "CSS", level: 95, category: "frontend"},
    {name: "HTML", level: 95, category: "frontend"},
    {name: "React", level: 90, category: "frontend"},
    {name: "Bootstrap", level: 85, category: "frontend"},
    {name: "TypeScript", level: 70, category: "frontend"},

    // Backend Skills
    {name: "Node.js", level: 85, category: "backend"},
    {name: "REST APIs", level: 85, category: "backend"},
    {name: "Express.js", level: 85, category: "backend"},
    {name: "MongoDB", level: 80, category: "backend"},
    {name: "AWS", level: 75, category: "backend"},
    {name: "SQL", level: 65, category: "backend"},


    // Tools and Technologies
    {name: "VSCode", level: 90, category: "tools"},
    {name: "Kanban", level: 90, category: "tools"},
    {name: "Git", level: 85, category: "tools"},
    {name: "Postman", level: 80, category: "tools"},
    {name: "Linux", level: 75, category: "tools"},
    {name: "Jest", level: 65, category: "tools"},
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => { 

    // Filter skills by category
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills </span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(`px-5 py-2 rounded-full transition-colors duration-300 capitalize ${
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                    : "bg-secondary text-foreground hover:bg-primary/90"
                            }`)}
                        >
                            {category}
                        </button>
    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p6 rounded-lg shadow-xs card-hover pb-2 pr-1 pl-1"
                        >
                            <div>
                                <div className="flex items-center mb-2 mt-1">
                                    <h3 className="text-lg font-semibold text-primary my-2 mx-auto">
                                        {skill.name}
                                    </h3>
                                    <p className="text-lg text-primary mb-2 mx-auto">{skill.level}%</p>
                                </div>

                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div
                                        className="bg-primary h-2.5 rounded-full"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}