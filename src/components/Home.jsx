import React, {useEffect, useRef, useState} from 'react'
import navbarLogo from '../images/userAsset/navbarLogo.jpg'
import dots from '../images/userAsset/dots.png'
import cube from '../images/userAsset/cube.png'
import circle from '../images/userAsset/circle.png'
import zigzags from '../images/userAsset/zigzags.png'
import plus from '../images/userAsset/plus.png'
import userImage from '../images/userAsset/UserImage2.jpg'
import data from '../data'
import Projects from './Projects'


function Home() {

    const [projectCard, setprojectCard] = useState(data);

    useEffect(() => {
        const typeData = new window.Typed(".role", {
          strings: [
            "Full Stack Developer",
            "Web Developer",
            "Java Developer",
            "Backend Developer",
            "Coder",
          ],
          loop: true,
          typeSpeed: 100,
          backSpeed: 80,
          backDelay: 1000,
        });
    
        return () => {
          typeData.destroy();
        };
    }, []);

    function scrollToForm() {
        document.getElementById('target-form').scrollIntoView({ behavior: 'smooth' });
    }

  return (
    <div className='wrapper'>
        <div className="container">
            <div className="navbar">

                <div className="logo-container">
                    <a href='/'><img src={navbarLogo} className="logo" /></a>
                    <div className="logo-text">arsha Vardhan</div>
                    
                </div>

                <div className="nav-items">
                    <div><a href="#projects">Projects</a></div>
                    <div><a href="#skills">Skills</a></div>
                    <div><a href="#Contactme">Contact Me</a></div>
                </div>

            </div>

            <div className="hero-section">

                <div className="faded-text">Harsha</div>
    
                <div className="hero-section-left">
                    <div className="hero-section-heading">Hi! Harsha Vardhan</div>
    
                    <div className="hero-section-heading hero-section-sub-heading">
                        I am a <span className="role" ></span>
                    </div>
    
                    <div className="hero-section-description">
                        I’m a Full Stack developer and here is my portfolio website. 
                        Here you’ll know about my journey as a Full Stack developer.
                    </div>
    
                    <div className="btn-pink" id="btn" onClick={scrollToForm}>Hire me</div>
    
                    
                </div>
    
                <div className="hero-section-right">
                    <div className="absolute icons icon-dots">
                        <img src={dots} alt=""/>
                    </div>
                    <div className="absolute icons icon-cube">
                        <img src={cube} alt=""/>
                    </div>
                    <div className="absolute icons icon-circle">
                        <img src={circle} alt=""/>
                    </div>
                    <div className="absolute icons icon-zigzag">
                        <img src={zigzags} alt=""/>
                    </div>
                    <div className="absolute icons icon-plus">
                        <img src={plus} alt=""/>
                    </div>
                    <div className="UserImage">
                        <img src={userImage} alt=""/>
                    </div>
    
                </div>
    
            </div>
        </div>
        <Projects projectCard={projectCard}/>
    </div>
  )
}

export default Home
