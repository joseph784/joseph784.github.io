import Button from 'react-bootstrap/Button';
import './button.css'
import { useEffect, useState } from 'react';

export default function NavButton({handleClick}){
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        // Initial check
        checkMobile();
        
        // Add event listener
        window.addEventListener('resize', checkMobile);
        
        // Cleanup
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return(
        <>
        <div style={{margin: isMobile ? 15 : 30}} >
            <Button className='buttonClass' onClick={() => handleClick("About Me")} variant="outline-light" size={isMobile ? "sm" : "md"}>About Me</Button>
            <Button className='buttonClass' onClick={() => handleClick("Experience")} variant="outline-light" size={isMobile ? "sm" : "md"}>Experience</Button>
            <Button className='buttonClass' onClick={() => handleClick("Projects")} variant="outline-light" size={isMobile ? "sm" : "md"}>Projects</Button>
            <Button className='buttonClass' onClick={() => handleClick("Contact")} variant="outline-light" size={isMobile ? "sm" : "md"}>Contact</Button>
        </div>
        </>
    )
}