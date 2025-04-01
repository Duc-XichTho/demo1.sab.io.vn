import { DonHang, DonHangDetail } from "../postgres/postgres.js";

export const getDonHangByIdService = async (idParams) => {
  try {
    const id = isNaN(Number(idParams)) ? String(idParams) : Number(idParams);
    const donHangRecord = await DonHang.findOne({ where: { id, show: true }, raw: true });
    const donHangDetailRecords = await DonHangDetail.findAll({
      where: {
        id_don_hang: donHangRecord.id,
        show: true
      },
      raw: true,
    });
    const result = {
      ...donHangRecord,
      chi_tiet_don_hang: donHangDetailRecords
    }
    return result
  } catch (error) {
    throw new Error('Lỗi khi getDonHangByIdService: ' + error.message);
  }
}

export const getDonHangByCodeService = async (code) => {
  try {
    const donHangRecord = await DonHang.findOne({ where: { code, show: true }, raw: true });
    const donHangDetailRecords = await DonHangDetail.findAll({
      where: {
        id_don_hang: donHangRecord.id,
        show: true
      },
      raw: true,
      // order: [['created_at', 'ASC']]
    });
    const result = {
      ...donHangRecord,
      chi_tiet_don_hang: donHangDetailRecords
    }
    return result
  } catch (error) {
    return null
    // throw new Error('Lỗi khi getDonHangByCodeService: ' + error.message);
  }
}

export const getDonHangByCode2Service = async (code) => {
  try {
    const donHangRecord = await DonHang.findOne({ where: { code2:code, show: true }, raw: true });
    const donHangDetailRecords = await DonHangDetail.findAll({
      where: {
        id_don_hang: donHangRecord.id,
        show: true
      },
      raw: true,
      // order: [['created_at', 'ASC']]
    });
    const result = {
      ...donHangRecord,
      chi_tiet_don_hang: donHangDetailRecords
    }
    return result
  } catch (error) {
    return null
    // throw new Error('Lỗi khi getDonHangByCodeService: ' + error.message);
  }
}

export const getAllDonHangService = async () => {
  try {
    const data = await DonHang.findAll({
      where: { show: true },
      order: [['id', 'DESC']],
      raw: true
    });
    return data;
  } catch (error) {
    throw new Error('Lỗi khi getAllDonHangService: ' + error.message);
  }
}

export const createDonHangService = async (newData) => {
  try {
    let year = newData.year;

    if (!/^\d{4}$/.test(year)) {
      year = new Date().getFullYear().toString();
    }
    const currentYear = String(year).slice(-2);
    const nextId = (await DonHang.max('id')) + 1 || 1;

    newData.code = `DHB/${1000 + nextId}/${currentYear}`;

    const data = await DonHang.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi createDonHangService: ' + error.message);
  }
};


export const updateDonHangService = async (id, newData) => {
  try {
    const data = await DonHang.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi DonHang không tồn tại");
    }
    await data.update(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi updateDonHangService: " + error.message);
  }
}

export const hideDonHangService = async (id) => {
  try {
    const data = await DonHang.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi DonHang không tồn tại");
    }
    await data.update({ show: false });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi hideDonHangService: " + error.message);
  }
}
