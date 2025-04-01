import { NotificationGw } from "../../postgres/postgres.js";

// GET ALL
export const getAllNotifications = async () => {
    try {
        const data = await NotificationGw.findAll({
            where: {
                show: true,
            },
            order: [["id", "DESC"]],
        });
        return data;
    } catch (error) {
        throw new Error(
            "Lỗi khi lấy danh sách bản ghi NotificationGw: " + error.message
        );
    }
};

// GET BY USER
export const getNotificationsByUser = async (userNoti) => {
    try {
        const data = await NotificationGw.findAll({
            where: {
                user_email: userNoti,
                show: true,
            },
            order: [["id", "DESC"]],
        });
        return data;
    } catch (error) {
        throw new Error(
            "Lỗi khi lấy danh sách thông báo theo người dùng: " + error.message
        );
    }
};

// GET BY TICKET ID
export const getNotificationsByTicketId = async (ticketId) => {
    try {
        const data = await NotificationGw.findAll({
            where: {
                ticket_id: ticketId,
                show: true,
            },
            order: [["id", "DESC"]],
        });
        return data;
    } catch (error) {
        throw new Error(
            "Lỗi khi lấy danh sách thông báo theo ticket: " + error.message
        );
    }
};

// UPDATE
export const updateNotification = async (data) => {
    try {
        const { id } = data;
        const notification = await NotificationGw.findByPk(id);
        if (!notification) {
            throw new Error("Bản ghi NotificationGw không tồn tại");
        }
        await notification.update(data);
        return data;
    } catch (error) {
        throw new Error("Lỗi khi cập nhật bản ghi NotificationGw: " + error.message);
    }
};

// MARK AS READ
export const markAsRead = async (id) => {
    try {
        const notification = await NotificationGw.findByPk(id);
        if (!notification) {
            throw new Error("Bản ghi NotificationGw không tồn tại");
        }
        await notification.update({ read: true });
        return notification;
    } catch (error) {
        throw new Error("Lỗi khi đánh dấu đã đọc: " + error.message);
    }
};

// CREATE
export const createNotification = async (data) => {
    try {
        const notification = await NotificationGw.create(data);
        return notification;
    } catch (error) {
        throw new Error("Lỗi khi tạo bản ghi NotificationGw: " + error.message);
    }
};

// DELETE
export const deleteNotification = async (id) => {
    try {
        const notification = await NotificationGw.findByPk(id);
        if (!notification) {
            throw new Error("Bản ghi NotificationGw không tồn tại");
        }
        await notification.update({ show: false });
        return notification;
    } catch (error) {
        throw new Error("Lỗi khi xóa bản ghi NotificationGw: " + error.message);
    }
}; 