import { ChiTietPhieuThu } from "../postgres/postgres.js";

export const getAllChiTietPhieuThuByPhieuThuIdService = async (id) => {
  try {
    const data = await ChiTietPhieuThu.findAll({
      where: {
        id_phieu_thu: id,
        show: true
      },
      raw: true
    });
    return data
  } catch (error) {
    throw new Error('Lỗi khi getAllChiTietPhieuThuByPhieuThuIdService: ' + error.message);
  }
}

export const createChiTietPhieuThuService = async (newData) => {
  try {
    const data = await ChiTietPhieuThu.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi createChiTietPhieuThuService: ' + error.message);
  }
}

export const updateChiTietPhieuThuService = async (id, newData) => {
  try {
    const data = await ChiTietPhieuThu.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi ChiTietPhieuThu không tồn tại");
    }
    await data.update(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi updateChiTietPhieuThuService: " + error.message);
  }
}

export const hideChiTietPhieuThuService = async (id) => {
  try {
    const data = await ChiTietPhieuThu.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi ChiTietPhieuThu không tồn tại");
    }
    await data.update({ show: false });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi hide ChiTietPhieuThuService: " + error.message);
  }
}