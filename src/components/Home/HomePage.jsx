import AboutPage from "../About/AboutPage";
import WorkPage from "../Work/WorkPage";
import RotatingWords from "../RotatingWords/RotatingWords";
import './title.css'
import NavButton from "../Buttons/NavButton";
import Projects from "../Projects/Projects";
import { Button } from "react-bootstrap";
import Contact from "../Contact/Contact";
import { useState, useEffect } from "react";

export default function HomePage(){
    const [isMobile, setIsMobile] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
            setIsLargeScreen(window.innerWidth >= 1600);
        };
        
        // Initial check
        checkScreenSize();
        
        // Add event listener
        window.addEventListener('resize', checkScreenSize);
        
        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const handleClick = (section) => {
        if (section === "Contact"){
            setShowContact(true);
            return;
        } 
        const element = document.getElementById(section);
        if (element) {
            if (section === "Home"){
                window.scrollTo({top: 0, behavior: 'smooth'});
                return;
            }
            // Use scrollIntoView for smoother section transitions
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }      
    };
    
    const [showContact, setShowContact] = useState(false);
    
    // Calculate responsive font size based on screen width
    const getTitleSize = () => {
        if (isMobile) return '2.5rem';
        if (isLargeScreen) return '6rem';
        return '4.5rem';
    };

    return (
         <> 
         <Contact showContact={showContact} onClose={() => setShowContact(false)}/>

         {/* Home section - full viewport height */}
         <div className="section-container video-background" id="Home">
            <video src="background.mp4" muted autoPlay loop id="myVideo"></video>
            <br />
            <div className="text-overlay">
                <p className="intro-text" style={{ fontSize: isLargeScreen ? '2rem' : undefined }}>Hi my name is </p>
                <h1 className="color-change" style={{ fontSize: isLargeScreen ? '7rem' : undefined }}>Joseph Agarwal</h1>
                <p><RotatingWords /></p>
                <NavButton handleClick={handleClick}/>
                <br />
                <br />
            </div>
         </div>

        {/* About section - full viewport height */}
        <div className="section-container" id="About Me" style={{
            backgroundImage: `url('background.png')`, 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            width: '100vw',
            maxWidth: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            position: 'relative',
            paddingBottom: '50px'
        }}>      
            <div> 
                <h1 style={{
                    fontFamily: 'Franklin Gothic Medium', 
                    fontSize: getTitleSize(), 
                    color: 'black', 
                    paddingTop: isLargeScreen ? 60 : 30, 
                    marginBottom: 20,
                    textAlign: 'center',
                    width: '100%'
                }}>
                    <Button onClick={() => handleClick('Home')} className='buttonClass' variant="dark" size={isLargeScreen ? "lg" : undefined}>↑</Button>{' '}
                        About Me
                    <Button onClick={() => handleClick('Experience')} className='buttonClass' variant="dark" size={isLargeScreen ? "lg" : undefined}>↓</Button>{' '}
                </h1> 
            </div>
            <AboutPage isLargeScreen={isLargeScreen} />

        </div> 

        <div className="section-container" id="Experience" style={{
            backgroundImage: `url('work.png')`, 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            width: '100vw',
            maxWidth: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            paddingBottom: '50px'
        }}>   
            <h1 style={{
                fontFamily: 'Franklin Gothic Medium', 
                fontSize: getTitleSize(), 
                color: 'white', 
                paddingTop: isLargeScreen ? 60 : 30,
                marginBottom: 20,
                zIndex: 2,
                textAlign: 'center',
                width: '100%'
            }}>
                <Button onClick={() => handleClick('About Me')} className='buttonClass' variant="dark" size={isLargeScreen ? "lg" : undefined}>↑</Button>{' '}
                Experience
                <Button onClick={() => handleClick('Projects')} className='buttonClass' variant="dark" size={isLargeScreen ? "lg" : undefined}>↓</Button>{' '}
            </h1>
            <div style={{ flex: '1' }}>
                <WorkPage isLargeScreen={isLargeScreen} />
            </div>

        </div>
            
        <div className="section-container" id="Projects" style={{
            backgroundImage: `url('work.svg')`, 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            width: '100vw',
            maxWidth: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: '20px'
        }}>   
            <h1 style={{
                fontFamily: 'Franklin Gothic Medium', 
                fontSize: getTitleSize(), 
                color: 'black', 
                paddingTop: isLargeScreen ? 60 : 35, 
                marginBottom: 20,
                textAlign: 'center',
                width: '100%'
            }}>
                <Button onClick={() => handleClick('Experience')} className='buttonClass' variant="dark" size={isLargeScreen ? "lg" : undefined}>↑</Button>{' '}
                Projects
            </h1>
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Projects />
            </div>
            <div style={{textAlign: 'center', padding: '30px 0'}}>
                <Button onClick={() => handleClick('Home')} className='buttonClass' variant="dark" size={isLargeScreen ? "lg" : undefined}>Back to the top</Button>{' '}
            </div>
        </div>
        </>)
}