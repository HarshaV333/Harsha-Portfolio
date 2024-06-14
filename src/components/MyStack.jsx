import React from 'react'
import html from '../images/stack/HTML.png'
import css from '../images/stack/CSS.png'
import javascript from '../images/stack/Javascript.svg'
import tailwindcss from '../images/stack/Tailwind.png'
import react from '../images/stack/React.png'
import MongoDB from '../images/stack/MongoDB.svg'
import Express from '../images/stack/Express.png'
import nodejs from '../images/stack/NodeJs.svg'
import redux from '../images/stack/Redux.svg'
import git from '../images/stack/Git.svg'
import GitHub from '../images/stack/Github.svg'
import vercel from '../images/stack/Vercel.svg'
import blob from '../images/userAsset/blob vector.png'
import ContactForm from './ContactForm'


const MyStack = () => {
  return (
    <div>
        <div id="skills" className="container skill-container ">

            <div className="skill-fade-text">Skills</div>

            <div className="skill-container-left">
                <h2 className="skill-heading">
                    <span className="caps">M</span>e and
                    <br/>
                    MyTech Stack
                </h2>

                <div className="skill-subheading">

                <p>
                    I'm a passionate developer with a keen eye for detail and a drive for creating impactful web applications. 
                    I love solving complex problems and continuously expanding my skills to stay at the forefront of technology.
                </p>
                <p>
                    I am proficient in HTML, CSS, and TailwindCSS for creating responsive designs, and I have strong JavaScript skills 
                    for building dynamic user experiences. My expertise in the MERN stack (MongoDB, Express.js, React, Node.js) allows me 
                    to develop robust full-stack applications.
                </p>
                <p>
                    Additionally, I use modern deployment platforms like Vercel and Render, and I am adept at version control with Git and GitHub. 
                    This comprehensive stack enables me to build, deploy, and maintain sophisticated web applications efficiently.
                </p>

            </div>

        </div>

            <div className="skill-container-right">
                <img src={blob} alt="" className="blob-style"/>

                <img src={html} alt="" className="skills-logo"/>
                <img src={css} alt="" className="skills-logo"/>
                <img src={javascript} alt="" className="skills-logo"/>
                <img src={tailwindcss} alt="" className="skills-logo"/>
                <img src={MongoDB} alt="" className="skills-logo"/>
                <img src={Express} alt="" className="skills-logo"/>
                <img src={react} alt="" className="skills-logo"/>
                <img src={nodejs} alt="" className="skills-logo"/>
                <img src={redux} alt="" className="skills-logo"/>
                <img src={git} alt="" className="skills-logo"/>
                <img src={GitHub} alt="" className="skills-logo"/>
                <img src={vercel} alt="" className="skills-logo"/>
            </div>
        </div>

        <ContactForm/>

    </div>
  )
}

export default MyStack