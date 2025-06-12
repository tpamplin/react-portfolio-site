import { useState, useEffect } from 'react';

export const StarBackground = () => {
    const [stars, setStars] = useState([]);

    const starColors = [
        "#deffff",
        "#cceefc",
        "#b3dff9",
        "#99cfff",
        "#ffe6e6",
        "#ffcccc",
        "#ffb3b3",
        "e63c3c",
        "#f5f1f0",
        "#f0f0f0",
        "#ffffff"

    ];



    useEffect(() => {
        generateStars();
        window.addEventListener('resize', generateStars);
        
        return () => {
            window.removeEventListener('resize', generateStars);
        }
    }, []);

    const generateStars = () => {

        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 5000);
         
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1 ,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                color: starColors[Math.floor(Math.random() * starColors.length)],
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setStars(newStars);
    }

    return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle" style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                left: `${star.x}%`,
                top: `${star.y}%`,
                opacity: star.opacity,
                background: star.color,
                animationDuration: `${star.animationDuration}s`
            }}/>
        ))}       
    </div>
    );
}