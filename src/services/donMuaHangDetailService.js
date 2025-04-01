import { DonMuaHangDetail } from "../postgres/postgres.js";

export const getAllDonMuaHangDetailByDonMuaHangIdService = async (id) => {
  try {
    const data = await DonMuaHangDetail.findAll({
      where: {
        id_don_mua_hang: id,
        show: true
      },
      raw: true
    });
    return data
  } catch (error) {
    throw new Error('Lỗi khi getAllDonMuaHangDetailByDonHangIdService: ' + error.message);
  }
}

export const createDonMuaHangDetailService = async (newData) => {
  try {
    const data = await DonMuaHangDetail.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi createDonMuaHangDetailService: ' + error.message);
  }
}

export const updateDonMuaHangDetailService = async (id, newData) => {
  try {
    const data = await DonMuaHangDetail.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi DonMuaHangDetail không tồn tại");
    }
    await data.update(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi updateDonMuaHangDetailService: " + error.message);
  }
}

export const hideDonMuaHangDetailService = async (id) => {
  try {
    const data = await DonMuaHangDetail.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi DonMuaHangDetail không tồn tại");
    }
    await data.update({ show: false });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi hideDonMuaHangDetailService: " + error.message);
  }
}