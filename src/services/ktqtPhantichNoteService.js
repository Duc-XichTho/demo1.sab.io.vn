import { KTQTPhanTichNote } from "../postgres/postgres.js";

export const getAllKTQTPhanTichNoteService = async () => {
  return await KTQTPhanTichNote.findAll({
    where: { show: true },
    order: [["id", "ASC"]],
  });
};

export const createKTQTPhanTichNoteService = async (data) => {
  return await KTQTPhanTichNote.create(data);
};
export const updateKTQTPhanTichNoteService = async (id, noteData) => {
  const note = await KTQTPhanTichNote.findByPk(id);
  if (note) {
    return await note.update(noteData);
  }
  return null;
};

export const deleteKTQTPhanTichNoteService = async (id) => {
  const note = await KTQTPhanTichNote.findByPk(id);
  if (note) {
    await note.update({ show: false });
    return {
      success: true,
      code: "NOTE_DELETED",
      message: "Xóa thành công.",
    };
  }
  return {
    success: false,
    code: "NOTE_NOT_FOUND",
    message: "Ghi chú không tồn tại.",
  };
};