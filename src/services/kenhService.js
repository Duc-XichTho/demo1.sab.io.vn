import { Kenh, KTQTSoKeToan} from '../postgres/postgres.js';

export const createKenhService = async (newData) => {
  try {
    const data = await Kenh.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi tạo bản ghi Kenh: ' + error.message);
  }
};

export const getKenhByIdService = async (id) => {
  try {
    const data = await Kenh.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi Kenh không tồn tại');
    }
    return data;
  } catch (error) {
    throw new Error('Lỗi khi lấy bản ghi Kenh: ' + error.message);
  }
};

export const getAllKenhService = async () => {
  try {
    const dataList = await Kenh.findAll();
    return dataList.sort((a, b) => a.id - b.id);
  } catch (error) {
    throw new Error('Lỗi khi lấy danh sách bản ghi Kenh: ' + error.message);
  }
};

export const updateKenhService = async (newData) => {
  const { id, oldValue, name } = newData;
  try {
    const data = await Kenh.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi Kenh không tồn tại');
    }
    await data.update(newData)
    //     .then(() => {
    //   fetchAndUpdateRecords(oldValue, name)
    // });
    return data;
  } catch (error) {
    throw new Error('Lỗi khi cập nhật bản ghi Kenh: ' + error.message);
  }
};

export const deleteKenhService = async (ids) => {
  try {
    const dataList = await Kenh.findAll({
      where: {
        id: ids,
      },
    });
    if (dataList.length === 0) {
      throw new Error('Không có bản ghi Kenh nào tồn tại với các ID này');
    }
    await Kenh.update(
      { show: false },
      {
        where: {
          id: ids,
        },
      }
    );
    return { message: 'Các bản ghi Kenh đã được ẩn thành công' };
  } catch (error) {
    throw new Error('Lỗi khi ẩn các bản ghi Kenh: ' + error.message);
  }
};

const fetchAndUpdateRecords = async (oldValue, name) => {
  try {
    let soKeToanList = await KTQTSoKeToan.findAll({ where: { Kenh: oldValue } });
    await Promise.all(
      soKeToanList.map(record => record.update({ Kenh: name }))
    );
    return soKeToanList
  } catch (error) {
    throw new Error('Lỗi khi lấy và cập nhật dữ liệu: ' + error.message);
  }
};
