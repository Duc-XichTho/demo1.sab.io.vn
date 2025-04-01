import { DashBoardList } from "../postgres/postgres.js";

// GET
export const getAllDashBoardService = async () => {
  try {
    const data = await DashBoardList.findAll({
      where: {
        show: true,
      },
      order: [["id", "ASC"]],
    });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi lấy bản ghi dashboard: " + error.message);
  }
};

// CREATE
export const createDashBoardService = async (data) => {
  try {
    const data = await DashBoardList.create(data);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi tạo bản ghi dashBoard: " + error.message);
  }
};

// UPDATE
export const updateDashBoardService = async (data) => {
  try {
    const { id } = data;
    const dashBoard = await DashBoardList.findByPk(id);
    if (!dashBoard) {
      throw new Error("Bản ghi dashBoard không tồn tại");
    }
    await dashBoard.update(data);
    return dashBoard;
  } catch (error) {
    throw new Error("Lỗi khi cập nhật bản ghi dashBoard: " + error.message);
  }
};

// DELETE
export const deleteDashBoardService = async (id) => {
  try {
    const dashBoard = await DashBoardList.findByPk(id);
    if (!dashBoard) {
      throw new Error("Bản ghi dashBoard không tồn tại");
    }
    await dashBoard.update({ show: false });
    return { message: "Xóa dashBoard thành công" };
  } catch (error) {
    throw new Error("Lỗi khi xóa bản ghi dashBoard: " + error.message);
  }
};
