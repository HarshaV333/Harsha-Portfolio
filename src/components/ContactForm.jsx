import React, { useState } from 'react'
import Footer from './Footer'
//import { useDispatch } from 'react-redux'
import { sendEmail } from './Operations/sendEmailAPI'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const ContactForm = () => {

    
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        subject:"",
        message:"",
    })

    /* const {name, email, subject, message} = formData; */

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/sendmail', formData);
            console.log("API Response", response);
        } catch (error) {
            return (error.message);
        }

        setFormData({
            name:"",
            email:"",
            subject:"",
            message:"",
        });
    }

  return (
    <div>
        <div className="contactus-form-container" id="Contactme">
            <div className="container" id="target-form">
                <h1 className="contactus-heading">Contact Me</h1>

                <h3 className="contactus-subheading">
                    Questions, Thoughts, Or Just Want To Say Hello?
                </h3>

                <div className="contactus-form-container">
                    <form className="form" onSubmit={handleOnSubmit} >
                        <div className="formfield-container">
                            <input className="formfield" type="text" name="name" id="name" placeholder="Enter your name"
                                required onChange={handleOnChange} value={formData.name}
                            />

                            <input className="formfield" type="email" name="email" id="email" placeholder="Enter your email"
                                required onChange={handleOnChange} value={formData.email}
                            />

                            <input className="formfield" type="text" name="subject" id="subject" placeholder="Enter your Subject"
                                required onChange={handleOnChange} value={formData.subject}
                            />

                            <textarea name="message" id="message" cols="30" rows="10" className="formfield formfield-textarea" 
                                placeholder="Enter your message" required onChange={handleOnChange} value={formData.message} >
                            </textarea>
                        </div>

                        <div>
                            <button type="submit" className="btn-pink" id="submit-btn">
                                Send Message <i className="submit-icon fa-solid fa-paper-plane"></i>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

        <Footer/>

    </div>
  )
}

export default ContactForm