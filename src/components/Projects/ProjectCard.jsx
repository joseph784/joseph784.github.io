import { Button } from 'react-bootstrap'
import './card.css'
import { useEffect, useState } from 'react';

export default function ProjectCard({Title, Description, Link, Class}){
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

    return(
      <div className={Class} style={{
        fontSize: isLargeScreen ? '1.3rem' : undefined,
        minHeight: isLargeScreen ? '280px' : undefined,
        padding: isLargeScreen ? '35px' : '25px'
      }}>
        <p className="card__exit"><i className="fas fa-times"></i></p>
        <h2 className="card__title" style={{
          fontSize: isLargeScreen ? '2.2rem' : undefined,
          margin: 0
        }}>{Title}</h2>
        <div style={{
          fontSize: isLargeScreen ? '1.3rem' : undefined,
          margin: isLargeScreen ? '15px 0' : '10px 0',
          lineHeight: '1.5'
        }}>
          {Description}
        </div>
        <p className="card__apply">
          <a className="card__link">
            <Button 
              href={Link} 
              target="_blank" 
              variant="outline-dark"
              size={isLargeScreen ? "lg" : undefined}
              disabled={!Link}
            >
              {Link ? "Check it out" : "Coming Soon"}
            </Button>
            <i className="fas fa-arrow-right"></i>
          </a>
        </p>
      </div>
    )
}