const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const mailSender = (email, title, body) => {
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
            subject: `${title}`,
            html: `${body}`
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
}

module.exports = mailSender