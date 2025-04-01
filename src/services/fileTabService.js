import { FileTab } from "../postgres/postgres.js";

// GET
export const getAllFileTabService = async () => {
  try {
    const data = await FileTab.findAll({
      where: {
        show: true,
      },
      order: [["id", "ASC"]],
    });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi lấy bản ghi file tab: " + error.message);
  }
};

// CREATE
export const createFileTabService = async (data) => {
  try {
    const result = await FileTab.create(data);
    return result;
  } catch (error) {
    throw new Error("Lỗi khi tạo bản ghi File Tab: " + error.message);
  }
};

// UPDATE
export const updateFileTabService = async (data) => {
  try {
    const { id } = data;
    const fileTab = await FileTab.findByPk(id);
    if (!fileTab) {
      throw new Error("Bản ghi file tab không tồn tại");
    }
    await fileTab.update(data);
    return fileTab;
  } catch (error) {
    throw new Error("Lỗi khi cập nhật bản ghi File tab: " + error.message);
  }
};

// DELETE
export const deleteFileTabService = async (id) => {
  try {
    const fileTab = await FileTab.findByPk(id);
    if (!fileTab) {
      throw new Error("Bản ghi file tab không tồn tại");
    }
    await fileTab.update({ show: false });
    return { message: "Xóa file tab thành công" };
  } catch (error) {
    throw new Error("Lỗi khi xóa bản ghi File tab: " + error.message);
  }
};
