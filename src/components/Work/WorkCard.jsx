
export default function ProjectCard({Title, Description, Class, Company}){
    return(
        <>
        <div class="cards">
            <div class={Class} style={{width: 650, height: 200}}>
              <p class="card__exit" ><i class="fas fa-times"></i></p>
              <h2 class="card__title" style={{marginTop: -20}}>
                {Company}
              </h2>
              <h10 style={{color: "white", marginTop: -20}}>{Title}</h10>
                <div style={{marginTop: -30}}>{Description}</div>  
            </div>
        </div>
        </>
      )
}