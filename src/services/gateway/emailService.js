import nodemailer from "nodemailer";
import dotenv from "dotenv";
import {generateEmailTemplate} from "../schedule/send_email.js";
import {User} from "../../postgres/postgres.js";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
    }
});

// Send email using template
export const sendGatewayEmail = async (emailData) => {
    try {
        const {to, subject, template, data} = emailData;

        // Use the existing template generator
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
        throw new Error('Lỗi khi gửi email: ' + error.message);
    }
};


export const sendRequestEmail = async (emailData) => {
    try {
        const adminUsers = await User.findAll({
            where: { isAdmin: true },
            attributes: ['email'] // Chỉ lấy trường email
        });
        const adminEmails = adminUsers.map(user => user.email);
        if (!adminEmails.length) {
            throw new Error('Không có admin nào để gửi email.');
        }

        const mailOptions = {
            from: `"${emailData.userCreate.name}" <${process.env.EMAIL_USER}>`,
            replyTo: emailData.userCreate.email,
            to: process.env.EMAIL_USER,
            bcc: adminEmails ,
            html: `  <h2>Yêu cầu tùy biến mới</h2>
                      <p><strong>Tiêu đề:</strong> ${emailData.title}</p>
                      <p><strong>Loại tùy biến:</strong> ${emailData.customType}</p>
                      <p><strong>Mô tả nội dung:</strong> ${emailData.description}</p>
                      <p><strong>SĐT liên hệ lại:</strong> ${emailData.phone}</p>   `
        };

        const result = await transporter.sendMail(mailOptions);
        return result;
    } catch (error) {
        throw new Error('Lỗi khi gửi email: ' + error.message);
    }
};