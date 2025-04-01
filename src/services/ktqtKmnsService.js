import {KTQTKmns, KTQTSoKeToan} from '../postgres/postgres.js';

export const createKTQTKmnsService = async (newData) => {
  try {
    const data = await KTQTKmns.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi tạo bản ghi KTQTKmns: ' + error.message);
  }
};

export const getKTQTKmnsByIdService = async (id) => {
  try {
    const data = await KTQTKmns.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi KTQTKmns không tồn tại');
    }
    return data;
  } catch (error) {
    throw new Error('Lỗi khi lấy bản ghi KTQTKmns: ' + error.message);
  }
};

export const getAllKTQTKmnsService = async () => {
  try {
    const dataList = await KTQTKmns.findAll();
    return dataList.sort((a, b) => a.id - b.id);
  } catch (error) {
    throw new Error('Lỗi khi lấy danh sách bản ghi KTQTKmns: ' + error.message);
  }
};

export const updateKTQTKmnsService = async (newData) => {
  const { id , oldValue , name} = newData;
  try {
    const data = await KTQTKmns.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi KTQTKmns không tồn tại');
    }
    await data.update(newData)
    //     .then(() => {
    //   fetchAndUpdateRecords(oldValue, name)
    // });
    return data;
  } catch (error) {
    throw new Error('Lỗi khi cập nhật bản ghi KTQTKmns: ' + error.message);
  }
};

export const deleteKTQTKmnsService = async (ids) => {
  try {
    const dataList = await KTQTKmns.findAll({
      where: {
        id: ids,
      },
    });
    if (dataList.length === 0) {
      throw new Error('Không có bản ghi KTQTKmns nào tồn tại với các ID này');
    }
    await KTQTKmns.update(
      { show: false },
      {
        where: {
          id: ids,
        },
      }
    );
    return { message: 'Các bản ghi KTQTKmns đã được ẩn thành công' };
  } catch (error) {
    throw new Error('Lỗi khi ẩn các bản ghi KTQTKmns: ' + error.message);
  }
};
const fetchAndUpdateRecords = async (oldValue, name) => {
  try {
    let soKeToanList = await KTQTSoKeToan.findAll({where: {KTQTKmns: oldValue}});
    await Promise.all(
        soKeToanList.map(record => record.update({KTQTKmns: name}))
    );
    return soKeToanList
  } catch (error) {
    throw new Error('Lỗi khi lấy và cập nhật dữ liệu: ' + error.message);
  }
};

