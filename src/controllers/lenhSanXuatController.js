import {
  getAllLenhSanXuatService,
  getLenhSanXuatByIdService,
  getAllLenhSanXuatNLByLSXIdService,
  getAllLenhSanXuatSPByLSXIdService,
  createLenhSanXuatService,
  createLenhSanXuatNLService,
  createLenhSanXuatSPService,
  updateLenhSanXuatService,
  updateLenhSanXuatNLService,
  updateLenhSanXuatSPService,
  deleteLenhSanXuatService,
  deleteLenhSanXuatNLService,
  deleteLenhSanXuatSPService,
} from "../services/lenhSanXuatService.js";

// GET
export const getLenhSanXuatByIdController = async (req, res) => {
  const { id } = req.params;

  try {
    const team = await getLenhSanXuatByIdService(id);
    res.status(200).json(team);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Bản ghi LenhSanXuat không tồn tại: " + error.message });
  }
};

export const getAllLenhSanXuatController = async (req, res) => {
  try {
    const teamList = await getAllLenhSanXuatService();
    res.status(200).json(teamList);
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi lấy danh sách bản ghi LenhSanXuat: " + error.message,
    });
  }
};

export const getAllLenhSanXuatNLByLSXIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const dataList = await getAllLenhSanXuatNLByLSXIdService(id);
    res.status(200).json(dataList);
  } catch (error) {
    res.status(404).json({
      message: "Lỗi khi lấy danh sách bản ghi LenhSanXuatNL: " + error.message,
    });
  }
};

export const getAllLenhSanXuatSPByLSXIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const dataList = await getAllLenhSanXuatSPByLSXIdService(id);
    res.status(200).json(dataList);
  } catch (error) {
    res.status(404).json({
      message: "Lỗi khi lấy danh sách bản ghi LenhSanXuatSP: " + error.message,
    });
  }
};

// CREATE
export const createLenhSanXuatController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createLenhSanXuatService(data);
    res.status(201).json(team);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi tạo bản ghi LenhSanXuat: " + error.message });
  }
};

export const createLenhSanXuatNLController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createLenhSanXuatNLService(data);
    res.status(201).json(team);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi tạo bản ghi LenhSanXuatNL: " + error.message });
  }
};

export const createLenhSanXuatSPController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createLenhSanXuatSPService(data);
    res.status(201).json(team);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi tạo bản ghi LenhSanXuatSP: " + error.message });
  }
};

// UPDATE
export const updateLenhSanXuatController = async (req, res) => {
  const data = req.body;
  try {
    const team = await updateLenhSanXuatService(data);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message:
        "Bản ghi LenhSanXuatNL không tồn tại hoặc lỗi khi cập nhật: " +
        error.message,
    });
  }
};

export const updateLenhSanXuatNLController = async (req, res) => {
  const data = req.body;
  try {
    const team = await updateLenhSanXuatNLService(data);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message:
        "Bản ghi LenhSanXuatNL không tồn tại hoặc lỗi khi cập nhật: " +
        error.message,
    });
  }
};

export const updateLenhSanXuatSPController = async (req, res) => {
  const data = req.body;
  try {
    const team = await updateLenhSanXuatSPService(data);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message:
        "Bản ghi LenhSanXuatSP không tồn tại hoặc lỗi khi cập nhật: " +
        error.message,
    });
  }
};

// DELETE
export const deleteLenhSanXuatController = async (req, res) => {
  let ids = req.params.id;
  if (!Array.isArray(ids)) {
    ids = [ids];
  }

  if (ids.length === 0) {
    return res
      .status(400)
      .json({ message: "Yêu cầu không hợp lệ: cần một hoặc nhiều ID." });
  }

  try {
    const result = await deleteLenhSanXuatService(ids);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message:
        "Bản ghi LenhSanXuat không tồn tại hoặc lỗi khi xóa: " + error.message,
    });
  }
};

export const deleteLenhSanXuatNLController = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await deleteLenhSanXuatNLService(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      message:
        "Bản ghi LenhSanXuatNL không tồn tại hoặc lỗi khi xóa: " +
        error.message,
    });
  }
};

export const deleteLenhSanXuatSPController = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await deleteLenhSanXuatSPService(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      message:
        "Bản ghi LenhSanXuatSP không tồn tại hoặc lỗi khi xóa: " +
        error.message,
    });
  }
};
