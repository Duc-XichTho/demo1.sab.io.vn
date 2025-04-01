import { MessageGw } from "../../postgres/postgres.js";
import { TicketGw } from "../../postgres/postgres.js";
import { Op } from "sequelize";

// GET
export const getAllMessages = async () => {
  try {
    const data = await MessageGw.findAll({
      where: {
        show: true,
      },
      order: [["id", "DESC"]],
    });
    return data;
  } catch (error) {
    throw new Error(
      "Lỗi khi lấy danh sách bản ghi MessageGw: " + error.message
    );
  }
};

// GET BY TICKET ID
export const getMessagesByTicketId = async (ticketId, page = 1, limit = 20) => {
  try {
    const offset = (page - 1) * limit;

    const data = await MessageGw.findAll({
      where: {
        ticket_Id: ticketId,
        show: true,
      },
      order: [["id", "DESC"]], // Get newest messages first
      limit: limit,
      offset: offset,
    });

    // Sort in ascending order for display - newest at the bottom
    return data.sort((a, b) => a.id - b.id);
  } catch (error) {
    throw new Error(
      "Lỗi khi lấy danh sách bản ghi MessageGw: " + error.message
    );
  }
};

// UPDATE
export const updateMessage = async (data) => {
  try {
    const { id } = data;
    const message = await MessageGw.findByPk(id);
    if (!message) {
      throw new Error("Bản ghi MessageGw không tồn tại");
    }
    await message.update(data);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi cập nhật bản ghi MessageGw: " + error.message);
  }
};

// CREATE
export const createMessage = async (data) => {
  try {
    const message = await MessageGw.create(data);

    // Update the ticket to indicate it has comments if this is a new comment
    if (data.ticket_Id) {
      await TicketGw.update(
        { hasComments: true },
        { where: { id: data.ticket_Id } }
      );
    }

    return message;
  } catch (error) {
    throw new Error("Lỗi khi tạo bản ghi MessageGw: " + error.message);
  }
};

// DELETE
export const deleteMessage = async (id) => {
  try {
    const message = await MessageGw.findByPk(id);
    if (!message) {
      throw new Error("Bản ghi MessageGw không tồn tại");
    }
    await message.update({ show: false });
    return message;
  } catch (error) {
    throw new Error("Lỗi khi xóa bản ghi MessageGw: " + error.message);
  }
};

export const getMessagesBeforeId = async (ticketId, messageId, limit = 20) => {
  try {
    const data = await MessageGw.findAll({
      where: {
        ticket_Id: ticketId,
        id: { [Op.lt]: messageId },
        show: true,
      },
      order: [["id", "DESC"]],
      limit: limit,
    });

    return data.sort((a, b) => a.id - b.id);
  } catch (error) {
    throw new Error("Lỗi khi tải tin nhắn trước đó: " + error.message);
  }
};
