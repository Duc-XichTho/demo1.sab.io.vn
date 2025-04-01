import { DetailPhieuChi } from "../postgres/postgres.js";

export const getAllDetailPhieuChiByPhieuChiIdService = async (id) => {
  try {
    const data = await DetailPhieuChi.findAll({
      where: {
        id_phieu_thu: id,
        show: true
      },
      raw: true
    });
    return data
  } catch (error) {
    throw new Error('Lỗi khi getAllDetailPhieuChiByPhieuChiIdService: ' + error.message);
  }
}

export const createDetailPhieuChiService = async (newData) => {
  try {
    const data = await DetailPhieuChi.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi createDetailPhieuChiService: ' + error.message);
  }
}

export const updateDetailPhieuChiService = async (id, newData) => {
  try {
    const data = await DetailPhieuChi.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi DetailPhieuChi không tồn tại");
    }
    await data.update(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi updateDetailPhieuChiService: " + error.message);
  }
}

export const hideDetailPhieuChiService = async (id) => {
  try {
    const data = await DetailPhieuChi.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi DetailPhieuChi không tồn tại");
    }
    await data.update({ show: false });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi hide DetailPhieuChiService: " + error.message);
  }
}