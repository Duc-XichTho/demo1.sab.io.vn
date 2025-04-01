import { TamUngDetail } from "../postgres/postgres.js";

export const getAllTamUngDetailByTamUngIdService = async (id) => {
  try {
    const data = await TamUngDetail.findAll({
      where: {
        id_tam_ung: id,
        show: true
      },
      raw: true
    });
    return data
  } catch (error) {
    throw new Error('Lỗi khi getAllTamUngDetailByTamUngIdService: ' + error.message);
  }
}

export const createTamUngDetailService = async (newData) => {
  try {
    const data = await TamUngDetail.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi createTamUngDetailService: ' + error.message);
  }
}

export const updateTamUngDetailService = async (id, newData) => {
  try {
    const data = await TamUngDetail.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi TamUngDetail không tồn tại");
    }
    await data.update(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi updateTamUngDetailService: " + error.message);
  }
}

export const hideTamUngDetailService = async (id) => {
  try {
    const data = await TamUngDetail.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi TamUngDetail không tồn tại");
    }
    await data.update({ show: false });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi hide TamUngDetailService: " + error.message);
  }
}