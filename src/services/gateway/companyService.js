import { CompanyGw } from "../../postgres/postgres.js";

// GET
export const getAllCompanies = async () => {
  try {
    const data = await CompanyGw.findAll({
      where: {
        show: true,
      },
      order: [["id", "DESC"]],
    });
    return data;
  } catch (error) {
    throw new Error(
      "Lỗi khi lấy danh sách bản ghi CompanyGw: " + error.message
    );
  }
};

// UPDATE
export const updateCompany = async (data) => {
  try {
    const { id } = data;
    const company = await CompanyGw.findByPk(id);
    if (!company) {
      throw new Error("Bản ghi CompanyGw không tồn tại");
    }
    await company.update(data);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi cập nhật bản ghi CompanyGw: " + error.message);
  }
};

// CREATE
export const createCompany = async (data) => {
  try {
    const company = await CompanyGw.create(data);
    return company;
  } catch (error) {
    throw new Error("Lỗi khi tạo bản ghi CompanyGw: " + error.message);
  }
};

// DELETE
export const deleteCompany = async (id) => {
  try {
    const company = await CompanyGw.findByPk(id);
    if (!company) {
      throw new Error("Bản ghi CompanyGw không tồn tại");
    }
    await company.update({ show: false });
    return company;
  } catch (error) {
    throw new Error("Lỗi khi xóa bản ghi CompanyGw: " + error.message);
  }
};
