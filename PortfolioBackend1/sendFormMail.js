
exports.sendFormMail = (name, email, subject, message) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f2f2f2;">
            <div style="background-color: aliceblue; max-width: 600px; margin: 0 auto; padding: 20px; text-align: center;">
                <div style="margin-bottom: 20px; display: flex; align-items: center;">
                    <p style="font-size: larger; color: red; margin: 0;">Name:</p>
                    <p style="margin: 0;">${name}</p>
                </div>
                <div style="margin-bottom: 20px; display: flex; align-items: center;">
                    <p style="font-size: larger; color: red; margin: 0;">Email:</p>
                    <p style="margin: 0;">${email}</p>
                </div>
                <div style="margin-bottom: 20px; display: flex; align-items: center;">
                    <p style="font-size: larger; color: red; margin: 0;">Subject:</p>
                    <p style="margin: 0;">${subject}</p>
                </div>
                <div style="margin-bottom: 20px; display: flex; align-items: center;">
                    <p style="font-size: larger; color: red; margin: 0;">Message:</p>
                    <p style="margin: 0;">${message}</p>
                </div>
            </div>
        </body>
        </html>
    `;
};
