import { useState, useEffect } from 'react';

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {

            generateStars();
            generateMeteors();

            const handleResize = () => {
                generateStars();
                generateMeteors();
            }

            window.addEventListener('resize', handleResize);



        return () => {
            // Cleanup event listeners
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const generateStars = () => {

        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 3000);
         
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 2 + 1 ,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 1 + 1,
            });
        }
        setStars(newStars);
    } 

    const generateMeteors = () => {

        const numberOfMeteors = 32;
        const newMeteors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: (Math.random() * 150) - 50,
                y: (Math.random() * 150) - 50,
                delay: Math.random() * 300 + 15,
                animationDuration: Math.random() * 30 + 15,
            });
        }
        setMeteors(newMeteors);
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
                animationDuration: `${star.animationDuration}s`
            }}/>
        ))}
        {meteors.map((meteor) => (
            <div key={meteor.id} className="meteor animate-meteor" style={{
                width: `${meteor.size + 50}px`,
                height: `${meteor.size * 2}px`,
                left: `${meteor.x}%`,
                top: `${meteor.y}%`,
                opacity:0,
                animationDelay: `${meteor.delay}s`,
                animationDuration: `${meteor.animationDuration}s`
            }}/>
        ))}       
    </div>
    );
}