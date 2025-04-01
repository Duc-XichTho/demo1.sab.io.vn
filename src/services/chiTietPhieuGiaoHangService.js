import { ChiTietPhieuGiaoHang } from "../postgres/postgres.js";

export const getAllChiTietPhieuGiaoHangByPhieuGiaoIdService = async (id) => {
  try {
    const data = await ChiTietPhieuGiaoHang.findAll({
      where: {
        id_phieu_giao_hang: id,
        show: true
      },
      raw: true
    });
    return data
  } catch (error) {
    throw new Error('Lỗi khi getAllChiTietPhieuGiaoHangByPhieuGiaoIdService: ' + error.message);
  }
}

export const createChiTietPhieuGiaoHangService = async (newData) => {
  try {
    const data = await ChiTietPhieuGiaoHang.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi createChiTietPhieuGiaoHangService: ' + error.message);
  }
}

export const updateChiTietPhieuGiaoHangService = async (id, newData) => {
  try {
    const data = await ChiTietPhieuGiaoHang.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi ChiTietPhieuGiaoHang không tồn tại");
    }
    await data.update(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi updateChiTietPhieuGiaoHangService: " + error.message);
  }
}

export const hideChiTietPhieuGiaoHangService = async (id) => {
  try {
    const data = await ChiTietPhieuGiaoHang.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi ChiTietPhieuGiaoHang không tồn tại");
    }
    await data.update({ show: false });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi hide ChiTietPhieuGiaoHangService: " + error.message);
  }
}