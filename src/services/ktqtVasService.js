import {KTQTSoKeToan, KTQTVas} from '../postgres/postgres.js';

export const createKTQTVasService = async (newData) => {
  try {
    const data = await KTQTVas.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi tạo bản ghi KTQTVas: ' + error.message);
  }
};

export const getKTQTVasByIdService = async (id) => {
  try {
    const data = await KTQTVas.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi KTQTVas không tồn tại');
    }
    return data;
  } catch (error) {
    throw new Error('Lỗi khi lấy bản ghi KTQTVas: ' + error.message);
  }
};

export const getAllKTQTVasService = async () => {
  try {
    const dataList = await KTQTVas.findAll({
      order: [['id', 'ASC']],
    });
    return dataList;
  } catch (error) {
    throw new Error('Lỗi khi lấy danh sách bản ghi KTQTVas: ' + error.message);
  }
};

export const updateKTQTVasService = async (newData) => {
  const { id , oldValue , ten_tai_khoan } = newData;
  try {
    const data = await KTQTVas.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi KTQTVas không tồn tại');
    }
    await data.update(newData)
    //     .then(() => {
    //   if (oldValue && ten_tai_khoan) {
    //     fetchAndUpdateRecords(oldValue, ten_tai_khoan)
    //   }
    //
    // })
    return data;
  } catch (error) {
    throw new Error('Lỗi khi cập nhật bản ghi KTQTVas: ' + error.message);
  }
};

export const deleteKTQTVasService = async (id) => {
  try {
    const dataList = await KTQTVas.findOne({
      where: {
        id,
      },
    });
    if (dataList.length === 0) {
      throw new Error('Không có bản ghi KTQTVas nào tồn tại với các ID này');
    }
    await KTQTVas.update(
      { show: false },
      {
        where: {
          id,
        },
      }
    );
    return { message: 'Các bản ghi KTQTVas đã được ẩn thành công' };
  } catch (error) {
    throw new Error('Lỗi khi ẩn các bản ghi KTQTVas: ' + error.message);
  }
};

const fetchAndUpdateRecords = async (oldValue, ten_tai_khoan) => {
  try {
    let [soKeToanListTkNo, soKeToanListTkCo] = await Promise.all([
      KTQTSoKeToan.findAll({ where: { tk_no: oldValue } }),
      KTQTSoKeToan.findAll({ where: { tk_co: oldValue } })
    ]);
    let combinedList = [...soKeToanListTkNo, ...soKeToanListTkCo];
    await Promise.all(
        combinedList.map(record => record.update({
          tk_no: record?.tk_no === oldValue?ten_tai_khoan : record?.tk_no,
          tk_co: record?.tk_co === oldValue?ten_tai_khoan : record?.tk_co
        }))
    );

    return combinedList;
  } catch (error) {
    throw new Error('Lỗi khi lấy và cập nhật dữ liệu: ' + error.message);
  }
};

