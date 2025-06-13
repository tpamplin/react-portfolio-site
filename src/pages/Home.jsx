import { StarBackground } from '@/components/StarBackground';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            
            {/* Background Effects */}
            <StarBackground />

            {/* Navigation Bar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <HeroSection />
            </main>

            {/* Footer */}
        </div>
    )
}