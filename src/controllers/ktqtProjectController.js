import {
  createKTQTProject,
  getKTQTProject,
  hideKTQTProject,
  updateKTQTProject
} from "../services/ktqtProjectService.js";

export const createKTQTProjectController = async (req, res) => {
  try {
    const data = await createKTQTProject(req.body);
    if (data.msg === "Lỗi thêm dữ liệu") {
      res.status(400).json(data);
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};

export const getKTQTProjectController = async (req, res) => {
  try {
    const data = await getKTQTProject();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const hideKTQTProjectController = async (req, res) => {
  try {
    const data = await hideKTQTProject(req.params.id);
    if (data.msg === "Đã thay dổi show = fasle thành công") {
      res.status(200).json(data);
    } else {
      res.status(400).json(data);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
export const updateKTQTProjectController = async (req, res) => {
  try {
    const data = await updateKTQTProject(req.params.id, req.body);
    if (data.msg === "Thành công") {
      res.status(200).json(data);
    } else {
      res.status(400).json(data);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};