import React from 'react'
import Card from './Card'
import MyStack from './MyStack'



const Projects = ({projectCard}) => {
  return (
    <div>
        <div className="project-section " id="projects">
            <h2 className="page-header">Projects</h2>

            <div className="project-container">    
                {
                    projectCard.map( (card) => {
                        return <Card key={card.id} card={card}></Card>
                    })
                }

            </div>
           
        </div>

        <MyStack/>
    </div>
  )
}

export default Projects