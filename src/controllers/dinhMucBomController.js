import {
  getAllDinhMucSPService,
  getAllDinhMucNLBySPIdService,
  createDinhMucNLService,
  createDinhMucSPService,
  updateDinhMucNLService,
  updateDinhMucSPService,
  deleteDinhMucSPService,
  deleteDinhMucNLService,
} from "../services/dinhMucBomService.js";

// GET
export const getAllDinhMucSPController = async (req, res) => {
  try {
    const dataList = await getAllDinhMucSPService();
    res.status(200).json(dataList);
  } catch (error) {
    res.status(404).json({
      message: "Lỗi khi lấy danh sách bản ghi DinhMucSP: " + error.message,
    });
  }
};

export const getAllDinhMucNLBySPIdController = async (req, res) => {
  const { idSP } = req.params;
  try {
    const dataList = await getAllDinhMucNLBySPIdService(idSP);
    res.status(200).json(dataList);
  } catch (error) {
    res.status(404).json({
      message: "Lỗi khi lấy danh sách bản ghi DinhMucNL: " + error.message,
    });
  }
};

// CREATE
export const createDinhMucNLController = async (req, res) => {
  try {
    const data = await createDinhMucNLService(req.body);
    res.status(201).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi tạo bản ghi DinhMucNL: " + error.message });
  }
};

export const createDinhMucSPController = async (req, res) => {
  try {
    const data = await createDinhMucSPService(req.body);
    res.status(201).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi tạo bản ghi DinhMucSP: " + error.message });
  }
};

// UPDATE
export const updateDinhMucNLController = async (req, res) => {
  try {
    const data = await updateDinhMucNLService(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      message:
        "Bản ghi DinhMucNL không tồn tại hoặc lỗi khi cập nhật: " +
        error.message,
    });
  }
};

export const updateDinhMucSPController = async (req, res) => {
  try {
    const data = await updateDinhMucSPService(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      message:
        "Bản ghi DinhMucSP không tồn tại hoặc lỗi khi cập nhật: " +
        error.message,
    });
  }
};

// DELETE
export const deleteDinhMucNLController = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await deleteDinhMucNLService(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      message:
        "Bản ghi DinhMucNL không tồn tại hoặc lỗi khi xóa: " + error.message,
    });
  }
};

export const deleteDinhMucSPController = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await deleteDinhMucSPService(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      message:
        "Bản ghi DinhMucSP không tồn tại hoặc lỗi khi xóa: " + error.message,
    });
  }
};
