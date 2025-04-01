import {DonMuaHang, DonMuaHangDetail, HoaDon} from "../postgres/postgres.js";

export const getDonMuaHangByCodeService = async (code) => {
  try {
    const donMuaHangRecord = await DonMuaHang.findOne({ where: { code, show: true }, raw: true });
    const donMuaHangDetailRecords = await DonMuaHangDetail.findAll({
      where: {
        id_don_mua_hang: donMuaHangRecord.id,
        show: true
      },
      raw: true,
      order: [['created_at', 'ASC']]
    });
    const result = {
      ...donMuaHangRecord,
      chi_tiet_don_mua_hang: donMuaHangDetailRecords
    }
    return result
  } catch (error) {
    return null
    throw new Error('Lỗi khi getDonMuaHangByCodeService: ' + error.message);
  }
}

export const getDonMuaHangByCode2Service = async (code) => {
  try {
    const donMuaHangRecord = await DonMuaHang.findOne({ where: { code2:code, show: true }, raw: true });
    const donMuaHangDetailRecords = await DonMuaHangDetail.findAll({
      where: {
        id_don_mua_hang: donMuaHangRecord.id,
        show: true
      },
      raw: true,
      order: [['created_at', 'ASC']]
    });
    const result = {
      ...donMuaHangRecord,
      chi_tiet_don_mua_hang: donMuaHangDetailRecords
    }
    return result
  } catch (error) {
    return null
    throw new Error('Lỗi khi getDonMuaHangByCodeService: ' + error.message);
  }
}

export const getAllDonMuaHangService = async () => {
  try {
    const data = await DonMuaHang.findAll({
          where: { show: true },
          order: [['id', 'DESC']],
          raw: true
        });
    return data
  } catch (error) {
    throw new Error('Lỗi khi getAllDonMuaHangService: ' + error.message);
  }
}

export const createDonMuaHangService = async (newData) => {
  try {
    let year = newData.year;

    if (!/^\d{4}$/.test(year)) {
      year = new Date().getFullYear().toString();
    }
    const currentYear = String(year).slice(-2);
    const nextId = (await DonMuaHang.max('id')) + 1 || 1;

    newData.code = `DNM/${1000 + nextId}/${currentYear}`;

    const data = await DonMuaHang.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi createDonMuaHangService: ' + error.message);
  }
}

export const updateDonMuaHangService = async (id, newData) => {
  try {
    const data = await DonMuaHang.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi DonMuaHang không tồn tại");
    }
    await data.update(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi updateDonMuaHangService: " + error.message);
  }
}

export const hideDonMuaHangService = async (id) => {
  try {
    const data = await DonMuaHang.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi DonMuaHang không tồn tại");
    }
    await data.update({ show: false });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi hideDonMuaHangService: " + error.message);
  }
}