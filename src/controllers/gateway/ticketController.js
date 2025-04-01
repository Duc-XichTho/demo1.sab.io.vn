import {
  getAllTicket,
  getTicketByCompanyId,
  updateTicket,
  createTicket,
  deleteTicket,
} from "../../services/gateway/ticketService.js";

//GET
export const getAllTicketController = async (req, res) => {
  try {
    const ticketList = await getAllTicket();
    res.status(200).json(ticketList);
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi lấy danh sách bản ghi Ticket: " + error.message,
    });
  }
};

export const getTicketByCompanyIdController = async (req, res) => {
  try {
    const ticketList = await getTicketByCompanyId(req.params.companyId);
    res.status(200).json(ticketList);
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi lấy danh sách bản ghi Ticket: " + error.message,
    });
  }
};
// UPDATE
export const updateTicketController = async (req, res) => {
  try {
    const ticket = await updateTicket(req.body);
    res.status(200).json(ticket);
  } catch (error) {
    res.status(404).json({
      message: "Bản ghi không tồn tại hoặc lỗi khi cập nhật: " + error.message,
    });
  }
};

// CREATE
export const createTicketController = async (req, res) => {
  try {
    const ticket = await createTicket(req.body);
    res.status(200).json(ticket);
  } catch (error) {
    res.status(404).json({
      message: "Lỗi khi tạo bản ghi Ticket: " + error.message,
    });
  }
};

// DELETE
export const deleteTicketController = async (req, res) => {
  try {
    const ticket = await deleteTicket(req.params.id);
    res.status(200).json(ticket);
  } catch (error) {
    res.status(404).json({
      message: "Bản ghi không tồn tại hoặc lỗi khi cập nhật: " + error.message,
    });
  }
};
