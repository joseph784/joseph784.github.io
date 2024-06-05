import { Button } from 'react-bootstrap'
import './card.css'

export default function ProjectCard({Title, Description, Link, Class}){
    return(
      <>
      <div class="cards">
          <div class={Class}>
            <p class="card__exit"><i class="fas fa-times"></i></p>
            <h2 class="card__title">{Title}</h2>
              {Description}  
            <p class="card__apply">
              <a class="card__link" ><Button href={Link} target="_blank" variant="outline-dark">Check it out</Button> <i class="fas fa-arrow-right"></i></a>
            </p>
          </div>
      </div>
      </>
    )
}