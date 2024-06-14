import React from 'react'

const Card = ({card}) => {

    const getNumberClassName = (number) => {
        if(number % 2 === 0){
            return 'project-number-left';
        }
        else{
            return 'project-number-right';
        }
    }

    const getContent = (number) => {
        if(number % 2 === 0){
            return 'project-content-right';
        }
        else{
            return 'project-content-left';
        }
    }

  return (
    <div >
        <div className="project-card" id={card.projectId}>
            <div className={`project-number ${getNumberClassName(card.projectNumber)}`}>{card.projectNumber}</div>
            <div className={`project-content ${getContent(card.projectNumber)}`}>
                <div className="project-skills-container">

                    {
                        card.skills.map((skill, index) => {
                            return <img className="project-skill" key={index} src={skill.skill} alt=""></img>
                        })
                    }

                </div>

                <h2 className="project-heading">{card.heading}</h2>

                <p className="project-subheading">{card.subheading}</p>
                        
                <div className="btn-group">
                    <a href={card.deployedLink} target='_blank'><button className="btn-pink btn-project" >Read More</button></a>
                    
                    <a href="http://www.facebook.com">
                        <i title="githublink" className="fa-brands fa-github icon" ></i>
                    </a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Card