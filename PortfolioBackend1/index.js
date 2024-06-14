const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const cors = require("cors");
//const mailSender = require("./mailSender");
const {sendFormMail} = require("./sendFormMail")

dotenv.config()

const PORT = process.env.PORT;

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());

app.use(
    cors({
        origin: "*",
        credentials: true,
    })
)


app.post("/sendmail", (req, res) => {
    const {name, email, subject, message} = req.body;
    /* Method 1 */
    /* try {
       mailSender(email, 'New Form Submition', sendFormMail(name, email, subject, message)); 
       res.json({
        success: "true",
        message: "Email Sent Successfully"
       })
    } catch (error) {
        console.log(error);
        res.json({
            success: "false",
            message: error.message
        })
    } */


    /* Method 2 */
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL, 
                pass: process.env.PASSWORD 
            },
            secure: 'false'
        });
    
        const mailOptions = {
            from: email,
            to: process.env.EMAIL,
            subject: "New Form Submission",
            /*  html: `Name: ${name} \n Email: ${email} \n Subject: ${subject} \n Message: ${message}` */
            html: sendFormMail(name, email, subject, message)
        };
    
        let result = transporter.sendMail(mailOptions);
            
        res.json({
            success: 'true',
            message: 'Email Sent Successfully'
        })
    }
    catch(e) {
        console.log(e);
        return
    }
    
})

app.get('/', (req, res) => {
    res.send("hello Harsha");
})

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
})

