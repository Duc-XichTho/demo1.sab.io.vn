import { TagGw } from "../../postgres/postgres.js";

// GET
export const getAllTags = async () => {
  try {
    const data = await TagGw.findAll({
      where: {
        show: true,
      },
      order: [["id", "DESC"]],
    });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi lấy danh sách bản ghi TagGw: " + error.message);
  }
};

// UPDATE
export const updateTag = async (data) => {
  try {
    const { id } = data;
    const tag = await TagGw.findByPk(id);
    if (!tag) {
      throw new Error("Bản ghi TagGw không tồn tại");
    }
    await tag.update(data);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi cập nhật bản ghi TagGw: " + error.message);
  }
};

// CREATE
export const createTag = async (data) => {
  try {
    const tag = await TagGw.create(data);
    return tag;
  } catch (error) {
    throw new Error("Lỗi khi tạo bản ghi TagGw: " + error.message);
  }
};

// DELETE
export const deleteTag = async (id) => {
  try {
    const tag = await TagGw.findByPk(id);
    if (!tag) {
      throw new Error("Bản ghi TagGw không tồn tại");
    }
    await tag.update({ show: false });
    return tag;
  } catch (error) {
    throw new Error("Lỗi khi xóa bản ghi TagGw: " + error.message);
  }
};
