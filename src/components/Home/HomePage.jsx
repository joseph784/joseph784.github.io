import AboutPage from "../About/AboutPage";
import WorkPage from "../Work/WorkPage";
import RotatingWords from "../RotatingWords/RotatingWords";
import './title.css'
import NavButton from "../Buttons/NavButton";
import Projects from "../Projects/Projects";
import { Button } from "react-bootstrap";
import Contact from "../Contact/Contact";
import { useState } from "react";

export default function HomePage(){
    const handleClick = (section) => {
        if (section === "Contact"){
            setShowContact(true);
            return;
        } 
        const element = document.getElementById(section);
        if (element) {
            if (section === "Home"){
                window.scrollTo(0,0);
                return;
            }
            const scrollOffset = 35;
            window.scrollBy({ top: element.getBoundingClientRect().top + scrollOffset, behavior: 'smooth' });
            }      
        };
        const [showContact, setShowContact] = useState(false)

    return (
         <> 
         <Contact showContact={showContact} onClose={() => setShowContact(false)}/>

         <div class="video-background" id="Home">
            <video src="background.mp4" muted autoPlay loop id="myVideo"></video>
            <br />
            <div class="text-overlay">
                <p style={{paddingRight: 570, marginBottom: -20, color: 'khaki'}}>Hi my name is </p>
                <h1 className="color-change">Joseph Agarwal</h1>
                <p><RotatingWords /></p>
                <NavButton handleClick={handleClick}/>
                <br />
                <br />
            </div>
         </div>

        <div style={{backgroundImage: `url('background.png')`, backgroundRepeat:'no-repeat',  backgroundSize: 'cover'}}>      
            <div> 
                <h1 id="About Me"style={{fontFamily:'Franklin Gothic Medium', fontSize: 70, color: 'black', paddingTop: 30, marginBottom: -15}}>
                    <Button onClick={() => handleClick('Home')}className='buttonClass' variant="dark">↑</Button>{' '}
                        About Me
                    <Button onClick={() => handleClick('Experience')} className='buttonClass' variant="dark">↓</Button>{' '}
                </h1> 
            </div>
            <AboutPage />
            <div style={{zIndex:100, position:'absolute', marginTop: -150, marginLeft: 1150}}>
                <img src="ladder.png" width={340}></img>
            </div>
            <br />
        </div> 

        <div style={{backgroundImage: `url('work.png')`, backgroundRepeat:'no-repeat',  backgroundSize: 'cover', minWidth: "100%"}}>   
            <div id="Experience"> 
                <h1 style={{fontFamily:'Franklin Gothic Medium', fontSize: 70, color: 'white', paddingTop: 30, zIndex: 2}}>
                    <Button onClick={() => handleClick('About Me')} className='buttonClass' variant="dark">↑</Button>{' '}
                    Experience
                    <Button onClick={() => handleClick('Projects')} className='buttonClass' variant="dark">↓</Button>{' '}
                </h1> 
            </div>  
            <WorkPage />
            
            <div style={{zIndex:100, position:'absolute', marginTop: -110, marginRight: 1150, }}>
                <img src="ladder.png" width={240}></img>
            </div>
            </div>
            <div style={{zIndex:100, position:'absolute', marginTop: -110, marginRight: 1150, }}>
                <img src="ladder.png" width={240}></img>
            </div> 
            
            <div style={{backgroundImage: `url('work.svg')`, backgroundRepeat:'no-repeat',  backgroundSize: 'cover'}}>   

            <div id="Projects"> 
                <h1 style={{fontFamily:'Franklin Gothic Medium', fontSize: 70, color: 'black', paddingTop: 35, marginBottom: -15}}>
                    <Button onClick={() => handleClick('Experience')} className='buttonClass' variant="dark">↑</Button>{' '}
                    Projects
                </h1> 
            </div>   
            <Projects />
            <Button  onClick={() => handleClick('Home')} className='buttonClass' variant="dark">Back to the top</Button>{' '}
            </div>
        </>)
}