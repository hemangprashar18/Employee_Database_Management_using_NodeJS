const nodemailer = require('nodemailer');

const sendEmail = async (recipient, fullName, password, url) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: recipient,
            subject: 'Your Account Details',
            text: `Thank you for creating your account, ${fullName}. Your password is ${password} and your login URL is ${url}.`,
            html: `<p>Thank you for creating your account, <strong>${fullName}</strong>. Your password is <strong>${password}</strong> and your login URL is ${url}.</p>`,
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendEmail;
