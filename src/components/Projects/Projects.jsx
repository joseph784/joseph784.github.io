import ProjectCard from "./ProjectCard";

export default function Projects(){
    return (
        <>
            <div style={{display: "flex", justifyContent: "center", float: "left", flexWrap: "wrap"}}>
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
        </>
    )
}