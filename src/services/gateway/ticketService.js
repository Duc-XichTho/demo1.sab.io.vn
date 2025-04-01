import { TicketGw } from "../../postgres/postgres.js";

// GET
export const getAllTicket = async () => {
  try {
    const data = await TicketGw.findAll({
      where: {
        show: true,
      },
      order: [["id", "DESC"]],
    });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi lấy danh sách bản ghi TicketGw: " + error.message);
  }
};

export const getTicketByCompanyId = async (companyId) => {
  try {
    const data = await TicketGw.findAll({
      where: {
        companyId: companyId,
        show: true,
      },
      order: [["id", "DESC"]],
    });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi lấy danh sách bản ghi TicketGw: " + error.message);
  }
};

// UPDATE
export const updateTicket = async (data) => {
  try {
    const { id } = data;
    const ticket = await TicketGw.findByPk(id);
    if (!ticket) {
      throw new Error("Bản ghi Tag không tồn tại");
    }
    await ticket.update(data);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi lấy danh sách bản ghi TicketGw: " + error.message);
  }
};

// CREATE
export const createTicket = async (data) => {
  try {
    const ticket = await TicketGw.create(data);
    return ticket;
  } catch (error) {
    throw new Error("Lỗi khi tạo bản ghi TicketGw: " + error.message);
  }
};

// DELETE
export const deleteTicket = async (id) => {
  try {
    const ticket = await TicketGw.findByPk(id);
    if (!ticket) {
      throw new Error("Bản ghi Tag không tồn tại");
    }
    await ticket.update({ show: false });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi lấy danh sách bản ghi TicketGw: " + error.message);
  }
};
