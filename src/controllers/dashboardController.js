import {
  getAllDashBoardService,
  createDashBoardService,
  updateDashBoardService,
  deleteDashBoardService,
} from "../services/dashboardService.js";

// GET
export const getAllDashBoardController = async (req, res) => {
  try {
    const DashBoard = await getAllDashBoardService();
    res.status(200).json(DashBoard);
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi tạo bản ghi DashBoard: " + error.message,
    });
  }
};

// CREATE
export const createDashBoardController = async (req, res) => {
  try {
    const DashBoard = await createDashBoardService(req.body);
    res.status(200).json(DashBoard);
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi tạo bản ghi DashBoard: " + error.message,
    });
  }
};

// UPDATE
export const updateDashBoardController = async (req, res) => {
  try {
    const DashBoard = await updateDashBoardService(req.body);
    res.status(200).json(DashBoard);
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi cập nhật bản ghi FileNotePad: " + error.message,
    });
  }
};

// DELETE
export const deleteDashBoardController = async (req, res) => {
  try {
    const DashBoard = await deleteDashBoardService(req.params.id);
    res.status(200).json(DashBoard);
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi xóa bản ghi FileNotePad: " + error.message,
    });
  }
};
