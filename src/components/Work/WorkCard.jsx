import { useEffect, useState } from 'react';

export default function ProjectCard({Title, Description, Class, Company}){
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

    return(
        <div className={Class} style={{
            height: 'auto',
            minHeight: isMobile ? '300px' : (isLargeScreen ? '350px' : '320px'),
            fontSize: isMobile ? '0.9rem' : (isLargeScreen ? '1.3rem' : '1rem'),
            padding: isLargeScreen ? '35px' : '25px',
            display: 'grid',
            gridTemplateRows: '20px auto auto 1fr',
            gap: '8px'
        }}>
            <p className="card__exit"><i className="fas fa-times"></i></p>
            <h2 className="card__title" style={{
              marginTop: 0,
              fontSize: isLargeScreen ? '2.3rem' : undefined
            }}>
              {Company}
            </h2>
            <h5 style={{
              color: "white", 
              margin: '8px 0',
              fontSize: isMobile ? '1rem' : (isLargeScreen ? '1.6rem' : '1.1rem')
            }}>
              {Title}
            </h5>
            <div style={{
              fontSize: isMobile ? '0.95rem' : (isLargeScreen ? '1.2rem' : '1rem'),
              lineHeight: '1.5'
            }}>
              {Description}
            </div>  
        </div>
    )
}