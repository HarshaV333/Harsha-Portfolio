import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-faded-text">Harsha Vardhan</div>

                    <div className="link-wrapper">
                        <div>
                            <a href="#projects">Projects</a>
                        </div>
                        <div>
                            <a href="#skills">Skills</a>
                        </div>
                        <div>
                            <a href="#Contactme">Contact Me</a>
                        </div>
                    </div>

                    <div className="icon-wrapper">
                        <a href='https://www.linkedin.com/in/harshavardhan4455/' target='_blank'><i className="fa-brands fa-linkedin icon"></i></a>
                        
                        <a href='https://github.com/HarshaV333' target='_blank'><i className="fa-brands fa-github icon"></i></a>
                        <a href='mailto:harsharoy07@gmail.com' target='_blank'><i className="fa-regular fa-envelope icon"></i></a>
                    </div>
                </div>

                
            </div>
        </footer>
    </div>
  )
}


export default Footer