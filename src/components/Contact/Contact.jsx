import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function Contact({showContact, onClose}){
 
    return(
    
        <> 
    <Modal
        show={showContact}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
      <Modal.Header>
        <Modal.Title style={{color: 'black'}}>
          Contact Me
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button href={"https://github.com/joseph784/"} target="_blank" className='buttonClass' variant="light-outline">
            <img width={50} src="github.png"></img> 
        </Button>

        <Button  href="mailto: josephag7@outlook.com" className='buttonClass' variant="light-outline">
            <img width={50} src="email.png"></img> 
        </Button>
        <Button  href={"https://www.linkedin.com/in/joseph-agarwal/"} target="_blank" className='buttonClass' variant="light-outline">
            <img width={45} src="linkedin.png"></img> 
        </Button>
        <Button  href={"resume.pdf"} target="_blank" className='buttonClass' variant="light-outline">
            <img width={45} src="resume.jpg"></img> 
        </Button>
      </Modal.Body> 
      <Modal.Footer>
        <Button onClick={onClose} variant="dark">Close</Button>
      </Modal.Footer>
    </Modal>
      </>
    
    )
}