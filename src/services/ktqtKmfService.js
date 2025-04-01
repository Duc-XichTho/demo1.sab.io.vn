import { KTQTKmf, KTQTSoKeToan} from '../postgres/postgres.js';

export const createKTQTKmfService = async (newData) => {
  try {
    const data = await KTQTKmf.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi tạo bản ghi KTQTKmf: ' + error.message);
  }
};

export const getKTQTKmfByIdService = async (id) => {
  try {
    const data = await KTQTKmf.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi KTQTKmf không tồn tại');
    }
    return data;
  } catch (error) {
    throw new Error('Lỗi khi lấy bản ghi KTQTKmf: ' + error.message);
  }
};

export const getAllKTQTKmfService = async () => {
  try {
    const dataList = await KTQTKmf.findAll();
    return dataList.sort((a, b) => a.id - b.id);
  } catch (error) {
    throw new Error('Lỗi khi lấy danh sách bản ghi KTQTKmf: ' + error.message);
  }
};

export const updateKTQTKmfService = async (newData) => {
  const { id, oldValue, name } = newData;
  try {
    const data = await KTQTKmf.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi KTQTKmf không tồn tại');
    }
    await data.update(newData)
    //     .then(() => {
    //   fetchAndUpdateRecords(oldValue, name)
    // });
    return data;
  } catch (error) {
    throw new Error('Lỗi khi cập nhật bản ghi KTQTKmf: ' + error.message);
  }
};

export const deleteKTQTKmfService = async (ids) => {
  try {
    const dataList = await KTQTKmf.findAll({
      where: {
        id: ids,
      },
    });
    if (dataList.length === 0) {
      throw new Error('Không có bản ghi KTQTKmf nào tồn tại với các ID này');
    }
    await KTQTKmf.update(
      { show: false },
      {
        where: {
          id: ids,
        },
      }
    );
    return { message: 'Các bản ghi KTQTKmf đã được ẩn thành công' };
  } catch (error) {
    throw new Error('Lỗi khi ẩn các bản ghi KTQTKmf: ' + error.message);
  }
};

const fetchAndUpdateRecords = async (oldValue, name) => {
  try {
    let soKeToanList = await KTQTSoKeToan.findAll({ where: { KTQTKmf: oldValue } });
    await Promise.all(
      soKeToanList.map(record => record.update({ KTQTKmf: name }))
    );
    return soKeToanList
  } catch (error) {
    throw new Error('Lỗi khi lấy và cập nhật dữ liệu: ' + error.message);
  }
};
