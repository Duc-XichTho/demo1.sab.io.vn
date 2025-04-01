import { DonHangDetail } from "../postgres/postgres.js";

export const getAllDonHangDetailByDonHangIdService = async (id) => {
  try {
    const data = await DonHangDetail.findAll({
      where: {
        id_don_hang: id,
        show: true
      },
      raw: true
    });
    return data
  } catch (error) {
    throw new Error('Lỗi khi getAllDonHangDetailByDonHangIdService: ' + error.message);
  }
}

export const createDonHangDetailService = async (newData) => {
  try {
    const data = await DonHangDetail.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi createDonHangDetailService: ' + error.message);
  }
}

export const updateDonHangDetailService = async (id, newData) => {
  try {
    const data = await DonHangDetail.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi DonHangDetail không tồn tại");
    }
    await data.update(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi updateDonHangDetailService: " + error.message);
  }
}

export const hideDonHangDetailService = async (id) => {
  try {
    const data = await DonHangDetail.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi DonHangDetail không tồn tại");
    }
    await data.update({ show: false });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi hideDonHangDetailService: " + error.message);
  }
}