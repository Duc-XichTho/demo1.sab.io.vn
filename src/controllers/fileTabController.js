import {
  getAllFileTabService,
  createFileTabService,
  updateFileTabService,
  deleteFileTabService,
} from "../services/fileTabService.js";

// GET
export const getAllFileTabController = async (req, res) => {
  try {
    const FileTabs = await getAllFileTabService();
    res.status(200).json(FileTabs);
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi lấy bản ghi FileTabs: " + error.message,
    });
  }
};

// CREATE
export const createFileTabController = async (req, res) => {
  try {
    const FileTab = await createFileTabService(req.body);
    res.status(200).json(FileTab);
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi tạo bản ghi FileTabs: " + error.message,
    });
  }
};

// UPDATE
export const updateFileTabController = async (req, res) => {
  try {
    const FileTab = await updateFileTabService(req.body);
    res.status(200).json(FileTab);
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi cập nhật bản ghi FileTabs: " + error.message,
    });
  }
};

// DELETE
export const deleteFileTabController = async (req, res) => {
  try {
    const FileTab = await deleteFileTabService(req.params.id);
    res.status(200).json(FileTab);
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi xóa bản ghi FileTabs: " + error.message,
    });
  }
};
