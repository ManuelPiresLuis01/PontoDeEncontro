import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

async function sendActivationEmail(email, activationCode) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Ativação de Conta',
        text: `Seu código de ativação é: ${activationCode}`,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error(error);
    }
}

export { sendActivationEmail };
