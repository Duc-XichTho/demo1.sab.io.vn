import {sendGatewayEmail, sendRequestEmail} from "../../services/gateway/emailService.js";

// Send notification email
export const sendNotificationEmailController = async (req, res) => {
    try {
        const emailData = {
            to: req.body.to,
            subject: req.body.subject,
            template: 'notification',
            data: {
                companyName: req.body.companyName,
                content: req.body.content,
                ticket_id: req.body.ticket_id,
                user_email: req.body.user_email,
                userNoti: req.body.userNoti,
                ticketUrl: req.body.ticketUrl
            }
        };

        const result = await sendGatewayEmail(emailData);

        res.status(200).json({
            success: true,
            message: "Email đã được gửi thành công",
            messageId: result.messageId
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Lỗi khi gửi email: " + error.message
        });
    }
};

export const sendRequestController = async (req, res) => {
    try {
        const emailData = req.body
        const result = await sendRequestEmail(emailData);
        res.status(200).json({
            success: true,
            message: "Email đã được gửi thành công",
            messageId: result.messageId
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Lỗi khi gửi email: " + error.message
        });
    }
};

// Send permission update email
export const sendPermissionEmailController = async (req, res) => {
    try {
        const emailData = {
            to: req.body.to,
            subject: `Cập nhật quyền truy cập - ${req.body.companyName}`,
            template: 'permissionUpdate',
            data: {
                companyName: req.body.companyName,
                role: req.body.role,
                permissions: req.body.permissions
            }
        };

        const result = await sendGatewayEmail(emailData);

        res.status(200).json({
            success: true,
            message: "Email cập nhật quyền đã được gửi thành công",
            messageId: result.messageId
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Lỗi khi gửi email: " + error.message
        });
    }
};

export const sendChangeStatusTicketEmailController = async (req, res) => {
    try {
        const emailData = {
            to: req.body.to,
            subject: `Cập nhật trạng thái - ${req.body.companyName}`,
            template: 'changeStatusTicket',
            data: {
                companyName: req.body.companyName,
                ticket_id: req.body.ticket_id,
                oldStatus: req.body.oldStatus,
                newStatus: req.body.newStatus,
                ticketTitle: req.body.ticketTitle,
                ticketUrl: req.body.ticketUrl,
                changedBy: req.body.changedBy,
                changeDate: req.body.changeDate,
                remarks: req.body.remarks
            }
        };

        const result = await sendGatewayEmail(emailData);

        res.status(200).json({
            success: true,
            message: "Email cập nhật trạng thái đã được gửi thành công",
            messageId: result.messageId
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Lỗi khi gửi email: " + error.message
        });
    }
};



