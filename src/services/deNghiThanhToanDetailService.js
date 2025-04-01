import { DeNghiThanhToanDetail } from "../postgres/postgres.js";

export const getAllDeNghiThanhToanDetailByDeNghiThanhToanIdService = async (id) => {
  try {
    const data = await DeNghiThanhToanDetail.findAll({
      where: {
        id_phieu_thu: id,
        show: true
      },
      raw: true
    });
    return data
  } catch (error) {
    throw new Error('Lỗi khi getAllDeNghiThanhToanDetailByDeNghiThanhToanIdService: ' + error.message);
  }
}

export const getDeNghiThanhToanDetailByDeNghiThanhToanIdService = async (id) => {
  try {
    const data = await DeNghiThanhToanDetail.findAll({
      where: {
        id_DNTT: id,
        show: true
      },
    });
    return data
  } catch (error) {
    throw new Error('Lỗi khi getAllDeNghiThanhToanDetailByDeNghiThanhToanIdService: ' + error.message);
  }
}

export const createDeNghiThanhToanDetailService = async (newData) => {
  try {
    const data = await DeNghiThanhToanDetail.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi createDeNghiThanhToanDetailService: ' + error.message);
  }
}

export const updateDeNghiThanhToanDetailService = async (id, newData) => {
  try {
    const data = await DeNghiThanhToanDetail.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi DeNghiThanhToanDetail không tồn tại");
    }
    await data.update(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi updateDeNghiThanhToanDetailService: " + error.message);
  }
}

export const hideDeNghiThanhToanDetailService = async (id) => {
  try {
    const data = await DeNghiThanhToanDetail.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi DeNghiThanhToanDetail không tồn tại");
    }
    await data.update({ show: false });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi hide DeNghiThanhToanDetailService: " + error.message);
  }
}