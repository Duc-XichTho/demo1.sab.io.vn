import { KTQTKenh, KTQTSoKeToan} from '../postgres/postgres.js';

export const createKTQTKenhService = async (newData) => {
  try {
    const data = await KTQTKenh.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi tạo bản ghi KTQTKenh: ' + error.message);
  }
};

export const getKTQTKenhByIdService = async (id) => {
  try {
    const data = await KTQTKenh.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi KTQTKenh không tồn tại');
    }
    return data;
  } catch (error) {
    throw new Error('Lỗi khi lấy bản ghi KTQTKenh: ' + error.message);
  }
};

export const getAllKTQTKenhService = async () => {
  try {
    const dataList = await KTQTKenh.findAll();
    return dataList.sort((a, b) => a.id - b.id);
  } catch (error) {
    throw new Error('Lỗi khi lấy danh sách bản ghi KTQTKenh: ' + error.message);
  }
};

export const updateKTQTKenhService = async (newData) => {
  const { id, oldValue, name } = newData;
  try {
    const data = await KTQTKenh.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi KTQTKenh không tồn tại');
    }
    await data.update(newData)
    //     .then(() => {
    //   fetchAndUpdateRecords(oldValue, name)
    // });
    return data;
  } catch (error) {
    throw new Error('Lỗi khi cập nhật bản ghi KTQTKenh: ' + error.message);
  }
};

export const deleteKTQTKenhService = async (ids) => {
  try {
    const dataList = await KTQTKenh.findAll({
      where: {
        id: ids,
      },
    });
    if (dataList.length === 0) {
      throw new Error('Không có bản ghi KTQTKenh nào tồn tại với các ID này');
    }
    await KTQTKenh.update(
      { show: false },
      {
        where: {
          id: ids,
        },
      }
    );
    return { message: 'Các bản ghi KTQTKenh đã được ẩn thành công' };
  } catch (error) {
    throw new Error('Lỗi khi ẩn các bản ghi KTQTKenh: ' + error.message);
  }
};

const fetchAndUpdateRecords = async (oldValue, name) => {
  try {
    let soKeToanList = await KTQTSoKeToan.findAll({ where: { KTQTKenh: oldValue } });
    await Promise.all(
      soKeToanList.map(record => record.update({ KTQTKenh: name }))
    );
    return soKeToanList
  } catch (error) {
    throw new Error('Lỗi khi lấy và cập nhật dữ liệu: ' + error.message);
  }
};
