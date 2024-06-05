import Button from 'react-bootstrap/Button';
import './button.css'

    export default function NavButton({handleClick}){
    return(

        <>
        <div style={{margin: 30}} >
        <Button className='buttonClass' onClick={() => handleClick("About Me")} variant="outline-light">About Me</Button>
        <Button className='buttonClass' onClick={() => handleClick("Experience")} variant="outline-light">Experience</Button>
        <Button className='buttonClass' onClick={() => handleClick("Projects")} variant="outline-light">Projects</Button>
        <Button className='buttonClass' onClick={() => handleClick("Contact")} variant="outline-light">Contact</Button>
        </div>

        </>
    )
}