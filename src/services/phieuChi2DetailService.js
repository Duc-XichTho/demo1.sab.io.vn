import {PhieuChi2Detail} from "../postgres/postgres.js";


export const getAllPhieuChi2DetailByPhieuChi2IdService = async (id) => {
  try {
    const data = await PhieuChi2Detail.findAll({
      where: {
        id_phieu_chi: id,
        show: true
      },
      raw: true
    });
    return data
  } catch (error) {
    throw new Error('Lỗi khi getAllTamUngDetailByTamUngIdService: ' + error.message);
  }
}
export const createPhieuChi2DetailService = async (newData) => {
  try {
    const data = await PhieuChi2Detail.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi createPhieuChi2DetailService: ' + error.message);
  }
}

export const updatePhieuChi2DetailService = async (id, newData) => {
  try {
    const data = await PhieuChi2Detail.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi PhieuChi2Detail không tồn tại");
    }
    await data.update(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi updatePhieuChi2DetailService: ' + error.message);
  }
}

export const deletePhieuChi2DetailService = async (id) => {
  try {
    const data = await PhieuChi2Detail.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi PhieuChi2Detail không tồn tại");
    }
    await data.update({ show: false });
    return data;
  } catch (error) {
    throw new Error('Lỗi khi deletePhieuChi2DetailService: ' + error.message);
  }
}