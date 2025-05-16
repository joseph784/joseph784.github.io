import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";

export default function Projects(){
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    
    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1600);
        };
        
        // Initial check
        checkScreenSize();
        
        // Add event listener
        window.addEventListener('resize', checkScreenSize);
        
        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    
    return (
        <div className="projects-grid" style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            maxWidth: "100vw",
            margin: "0 auto",
            padding: isLargeScreen ? "40px 0" : "20px 0"
        }}>
            <div className="row-container" style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                maxWidth: "1800px",
                gap: isLargeScreen ? "30px" : "20px"
            }}>
                <ProjectCard 
                    Title={"Visual AI.d"} 
                    Description={"Application which summarizes large text into generated images, designed for storyboarding."}
                    Link={"https://github.com/joseph784/nwhack23"}
                    Class={"card card-1"}
                />
                <ProjectCard 
                    Title={"Agenda Planner"} 
                    Description={"Interactive agenda designed to prioritize and organize tasks."}
                    Link={"https://github.com/joseph784/ActivityPlanner"}
                    Class={"card card-2"}
                />
                <ProjectCard 
                    Title={"Language Exchange"} 
                    Description={"Application connecting users learning a language with native speakers"}
                    Link={"https://github.com/joseph784/Language-Exchange"}
                    Class={"card card-3"}
                />
                <ProjectCard 
                    Title={"Backtest Dashboard"} 
                    Description={"Backtest engine and display for Black-Litterman Projections"}
                    Link={""}
                    Class={"card card-4"}
                />
            </div>
        </div>
    )
}