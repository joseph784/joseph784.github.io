import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

export default function Contact({showContact, onClose}){
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
        <Modal
            show={showContact}
            size={isMobile ? "sm" : "lg"}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
          <Modal.Header>
            <Modal.Title style={{color: 'black'}}>
              Contact Me
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{textAlign: 'center'}}>
            <Button href={"https://github.com/joseph784/"} target="_blank" className='buttonClass' variant="light-outline">
                <img width={isMobile ? 40 : 50} src="github.png" alt="GitHub" /> 
            </Button>

            <Button href="mailto: josephag7@outlook.com" className='buttonClass' variant="light-outline">
                <img width={isMobile ? 40 : 50} src="email.png" alt="Email" /> 
            </Button>
            <Button href={"https://www.linkedin.com/in/joseph-agarwal/"} target="_blank" className='buttonClass' variant="light-outline">
                <img width={isMobile ? 35 : 45} src="linkedin.png" alt="LinkedIn" /> 
            </Button>
            <Button href={"Joseph_Agarwal_Resume.pdf"} target="_blank" className='buttonClass' variant="light-outline">
                <img width={isMobile ? 35 : 45} src="resume.jpg" alt="Resume" /> 
            </Button>
          </Modal.Body> 
          <Modal.Footer>
            <Button onClick={onClose} variant="dark">Close</Button>
          </Modal.Footer>
        </Modal>
        </>
    )
}
