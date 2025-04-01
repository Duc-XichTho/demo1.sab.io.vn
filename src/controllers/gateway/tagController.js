import {
  getAllTags,
  updateTag,
  createTag,
  deleteTag,
} from "../../services/gateway/tagService.js";

// GET
export const getAllTagsController = async (req, res) => {
  try {
    const tagList = await getAllTags();
    res.status(200).json(tagList);
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi lấy danh sách bản ghi Tag: " + error.message,
    });
  }
};

// UPDATE
export const updateTagController = async (req, res) => {
  try {
    const tag = await updateTag(req.body);
    res.status(200).json(tag);
  } catch (error) {
    res.status(404).json({
      message: "Bản ghi không tồn tại hoặc lỗi khi cập nhật: " + error.message,
    });
  }
};

// CREATE
export const createTagController = async (req, res) => {
  try {
    const tag = await createTag(req.body);
    res.status(200).json(tag);
  } catch (error) {
    res.status(404).json({
      message: "Lỗi khi tạo bản ghi Tag: " + error.message,
    });
  }
};

// DELETE
export const deleteTagController = async (req, res) => {
  try {
    const tag = await deleteTag(req.params.id);
    res.status(200).json(tag);
  } catch (error) {
    res.status(404).json({
      message: "Bản ghi không tồn tại hoặc lỗi khi xóa: " + error.message,
    });
  }
};
