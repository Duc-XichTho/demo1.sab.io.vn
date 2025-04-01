import {
  getAllMessages,
  getMessagesBeforeId,
  updateMessage,
  createMessage,
  deleteMessage,
  getMessagesByTicketId,
} from "../../services/gateway/messageService.js";

// GET
export const getAllMessagesController = async (req, res) => {
  try {
    const messageList = await getAllMessages();
    res.status(200).json(messageList);
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi lấy danh sách bản ghi Message: " + error.message,
    });
  }
};

// GET BY TICKET ID
export const getMessagesByTicketIdController = async (req, res) => {
  try {
    const ticketId = req.params.ticketId;
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : 20;

    const messageList = await getMessagesByTicketId(ticketId, page, limit);
    res.status(200).json(messageList);
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi lấy danh sách bản ghi Message: " + error.message,
    });
  }
};

// GET MESSAGES BEFORE ID (for pagination)
export const getMessagesBeforeIdController = async (req, res) => {
  try {
    const { ticketId, messageId } = req.params;
    const limit = req.query.limit ? parseInt(req.query.limit) : 20;

    const messageList = await getMessagesBeforeId(ticketId, messageId, limit);
    res.status(200).json(messageList);
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi tải tin nhắn trước đó: " + error.message,
    });
  }
};

// UPDATE
export const updateMessageController = async (req, res) => {
  try {
    const message = await updateMessage(req.body);
    res.status(200).json(message);
  } catch (error) {
    res.status(404).json({
      message: "Bản ghi không tồn tại hoặc lỗi khi cập nhật: " + error.message,
    });
  }
};

// CREATE
export const createMessageController = async (req, res) => {
  try {
    const message = await createMessage(req.body);
    res.status(200).json(message);
  } catch (error) {
    res.status(404).json({
      message: "Lỗi khi tạo bản ghi Message: " + error.message,
    });
  }
};

// DELETE
export const deleteMessageController = async (req, res) => {
  try {
    const message = await deleteMessage(req.params.id);
    res.status(200).json(message);
  } catch (error) {
    res.status(404).json({
      message: "Bản ghi không tồn tại hoặc lỗi khi xóa: " + error.message,
    });
  }
};
