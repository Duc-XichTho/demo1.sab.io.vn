import {
    getAllNotifications,
    getNotificationsByUser,
    getNotificationsByTicketId,
    updateNotification,
    markAsRead,
    createNotification,
    deleteNotification,
} from "../../services/gateway/notificationService.js";

// GET ALL
export const getAllNotificationsController = async (req, res) => {
    try {
        const notificationList = await getAllNotifications();
        res.status(200).json(notificationList);
    } catch (error) {
        res.status(500).json({
            message: "Lỗi khi lấy danh sách bản ghi Notification: " + error.message,
        });
    }
};

// GET BY USER
export const getNotificationsByUserController = async (req, res) => {
    try {
        const userNoti = req.params.userNoti;
        const notificationList = await getNotificationsByUser(userNoti);
        res.status(200).json(notificationList);
    } catch (error) {
        res.status(500).json({
            message: "Lỗi khi lấy danh sách thông báo theo người dùng: " + error.message,
        });
    }
};

// GET BY TICKET ID
export const getNotificationsByTicketIdController = async (req, res) => {
    try {
        const ticketId = req.params.ticketId;
        const notificationList = await getNotificationsByTicketId(ticketId);
        res.status(200).json(notificationList);
    } catch (error) {
        res.status(500).json({
            message: "Lỗi khi lấy danh sách thông báo theo ticket: " + error.message,
        });
    }
};

// UPDATE
export const updateNotificationController = async (req, res) => {
    try {
        const notification = await updateNotification(req.body);
        res.status(200).json(notification);
    } catch (error) {
        res.status(404).json({
            message: "Bản ghi không tồn tại hoặc lỗi khi cập nhật: " + error.message,
        });
    }
};

// MARK AS READ
export const markAsReadController = async (req, res) => {
    try {
        const notification = await markAsRead(req.params.id);
        res.status(200).json(notification);
    } catch (error) {
        res.status(404).json({
            message: "Lỗi khi đánh dấu đã đọc: " + error.message,
        });
    }
};

// CREATE
export const createNotificationController = async (req, res) => {
    try {
        const notification = await createNotification(req.body);
        res.status(200).json(notification);
    } catch (error) {
        res.status(404).json({
            message: "Lỗi khi tạo bản ghi Notification: " + error.message,
        });
    }
};

// DELETE
export const deleteNotificationController = async (req, res) => {
    try {
        const notification = await deleteNotification(req.params.id);
        res.status(200).json(notification);
    } catch (error) {
        res.status(404).json({
            message: "Bản ghi không tồn tại hoặc lỗi khi xóa: " + error.message,
        });
    }
}; 