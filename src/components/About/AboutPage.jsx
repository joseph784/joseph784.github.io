import './About.css'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

export default function AboutPage({ isLargeScreen }){
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

    return ( 
        <div className="about-content" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
            flex: '1'
        }}>
            <div className="wrapper" >
                <div className="box" style={{
                    fontSize: isLargeScreen ? 'clamp(1.6rem, 3.5vw, 2.2rem)' : 'clamp(1.2rem, 3vw, 1.8rem)',
                    padding: isLargeScreen ? '4vw' : undefined,
                    lineHeight: '1.5'
                }}>
                    <p>I'm Joseph, a 5th year student, studying computer science and business at the University of British Columbia. I am currently a software intern at Tesla, and post-trade lead for the UBC Quant Team. I
                    love the interplay of technology and people and am always excited to creatively solve real problems with 
                    software. 
                    </p>
                </div>
            </div>
            <h1 style={{
                marginTop: 5, 
                fontSize: isMobile ? '2rem' : (isLargeScreen ? '3.5rem' : '2.5rem')
            }}>Languages</h1>
            <div className="skills-container">
                <Button className='buttonClass' variant="outline-light" size={isMobile ? "sm" : (isLargeScreen ? "lg" : "md")}>C#</Button>{' '}
                <Button className='buttonClass' variant="outline-light" size={isMobile ? "sm" : (isLargeScreen ? "lg" : "md")}>C</Button>{' '}
                <Button className='buttonClass' variant="outline-light" size={isMobile ? "sm" : (isLargeScreen ? "lg" : "md")}>C++</Button>{' '}
                <Button className='buttonClass' variant="outline-light" size={isMobile ? "sm" : (isLargeScreen ? "lg" : "md")}>Java</Button>{' '}
                <Button className='buttonClass' variant="outline-light" size={isMobile ? "sm" : (isLargeScreen ? "lg" : "md")}>JavaScript/TypeScript</Button>{' '}
                <Button className='buttonClass' variant="outline-light" size={isMobile ? "sm" : (isLargeScreen ? "lg" : "md")}>Python</Button>{' '}
                <Button className='buttonClass' variant="outline-light" size={isMobile ? "sm" : (isLargeScreen ? "lg" : "md")}>HTML/CSS/Razor</Button>{' '}
                <Button className='buttonClass' variant="outline-light" size={isMobile ? "sm" : (isLargeScreen ? "lg" : "md")}>SQL/LINQ</Button>{' '}
            </div>
            <h1 style={{
                color: 'black', 
                marginTop: 15,
                fontSize: isMobile ? '2rem' : (isLargeScreen ? '3.5rem' : '2.5rem')
            }}>Programs/Frameworks</h1>
            <div className="skills-container">
                <Button className='buttonClass' variant="outline-light" size={isMobile ? "sm" : (isLargeScreen ? "lg" : "md")}>ASP.NET CORE</Button>{' '}
                <Button className='buttonClass' variant="outline-light" size={isMobile ? "sm" : (isLargeScreen ? "lg" : "md")}>React.js</Button>{' '}
                <Button className='buttonClass' variant="outline-light" size={isMobile ? "sm" : (isLargeScreen ? "lg" : "md")}>Angular.js</Button>{' '}
                <Button className='buttonClass' variant="outline-light" size={isMobile ? "sm" : (isLargeScreen ? "lg" : "md")}>SciKit</Button>{' '}
                <Button className='buttonClass' variant="outline-light" size={isMobile ? "sm" : (isLargeScreen ? "lg" : "md")}>Git</Button>{' '}
                <Button className='buttonClass' variant="outline-light" size={isMobile ? "sm" : (isLargeScreen ? "lg" : "md")}>Kubernetes</Button>{' '}
                <Button className='buttonClass' variant="outline-light" size={isMobile ? "sm" : (isLargeScreen ? "lg" : "md")}>Jenkins</Button>{' '}
                <Button className='buttonClass' variant="outline-light" size={isMobile ? "sm" : (isLargeScreen ? "lg" : "md")}>Kafka</Button>{' '}






            </div>
        </div>
    )
}