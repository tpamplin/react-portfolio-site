import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';


export const ThemeToggle = ({state}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect (() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.classList.add(savedTheme);
            setIsDarkMode(savedTheme === 'dark');
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                setIsDarkMode(true);
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                setIsDarkMode(false);
            }
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    }

    return (
        <>
        {
        (state === "desktop") ? (
            <button onClick={toggleTheme} className={cn("fixed top-5 right-5 z-50 p-2 rounded-full", 
            "transition-colors duration-300 foxus:outline-hidden",
            isDarkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-gray-800 hover:bg-gray-200"
        )}>
            {" "}
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300"/>
            ) : (
                <Moon className="h-6 w-6 text-blue-900"/> 
            )}
        </button>
        ) : (
            <button onClick={toggleTheme} className="p-2 rounded-full focus:outline-hidden mx-auto">
                {isDarkMode ? (
                    <Sun className="h-6 w-6 text-yellow-300"/>
                ) : (
                    <Moon className="h-6 w-6 text-blue-900"/> 
                )}
            </button>
        )
        }
    </>
    ) 
}