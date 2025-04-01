import {
  getAllCompanies,
  updateCompany,
  createCompany,
  deleteCompany,
} from "../../services/gateway/companyService.js";

// GET
export const getAllCompaniesController = async (req, res) => {
  try {
    const companyList = await getAllCompanies();
    res.status(200).json(companyList);
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi lấy danh sách bản ghi Company: " + error.message,
    });
  }
};

// UPDATE
export const updateCompanyController = async (req, res) => {
  try {
    const company = await updateCompany(req.body);
    res.status(200).json(company);
  } catch (error) {
    res.status(404).json({
      message: "Bản ghi không tồn tại hoặc lỗi khi cập nhật: " + error.message,
    });
  }
};

// CREATE
export const createCompanyController = async (req, res) => {
  try {
    const company = await createCompany(req.body);
    res.status(200).json(company);
  } catch (error) {
    res.status(404).json({
      message: "Lỗi khi tạo bản ghi Company: " + error.message,
    });
  }
};

// DELETE
export const deleteCompanyController = async (req, res) => {
  try {
    const company = await deleteCompany(req.params.id);
    res.status(200).json(company);
  } catch (error) {
    res.status(404).json({
      message: "Bản ghi không tồn tại hoặc lỗi khi xóa: " + error.message,
    });
  }
};
