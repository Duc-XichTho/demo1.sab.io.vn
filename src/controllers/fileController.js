import {
  createFileService,
  getFileByIdService,
  getAllFileService,
  updateFileService,
  deleteFileService,
} from '../services/fileService.js';

export const createFileController = async (req, res) => {
  const data = req.body;
  try {
    const File = await createFileService(data);
    res.status(201).json(File);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi File: ' + error.message
    });
  }
};

export const getFileByIdController = async (req, res) => {
  const {
    id
  } = req.body;
  try {
    const File = await getFileByIdService(id);
    res.status(200).json(File);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi File không tồn tại: ' + error.message
    });
  }
};

export const getAllFileController = async (req, res) => {
  try {
    const FileList = await getAllFileService();
    res.status(200).json(FileList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi File: ' + error.message,
    });
  }
};

export const updateFileController = async (req, res) => {
  const data = req.body;
  try {
    const File = await updateFileService(data);
    res.status(200).json(File);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi File không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deleteFileController = async (req, res) => {
  let ids = req.params.id;
  if (!Array.isArray(ids)) {
    ids = [ids];
  }

  if (ids.length === 0) {
    return res.status(400).json({
      message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'
    });
  }

  try {
    const result = await deleteFileService(ids);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi File không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};