import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { thongBaoCongNo, thongBaoTinNhan, ticketStatusChange } from './template.js';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
    }
});

// Send email with template
export const sendTemplateEmail = async (emailData) => {
    try {
        const { to, subject, template, data } = emailData;
        const htmlContent = generateEmailTemplate(template, data);
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            html: htmlContent
        };
        const result = await transporter.sendMail(mailOptions);
        return result;
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

export const generateEmailTemplate = (templateName, data) => {
    switch (templateName) {
        case 'welcome':
            return `
                <h1>Chào mừng, ${data.name}!</h1>
                <p>Cảm ơn bạn đã tham gia với chúng tôi.</p>
            `;
        case 'thongBaoCongNo':
            return thongBaoCongNo(data);
        case 'notification':
            return thongBaoTinNhan(data);
        case 'changeStatusTicket':
            return ticketStatusChange(data);
        default:
            return data.content || '';
    }
}