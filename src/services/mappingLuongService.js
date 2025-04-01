import {MappingLuong} from "../postgres/postgres.js";


export const createMappingLuongService = async (newData) => {
  try {
    const data = await MappingLuong.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi tạo bản ghi MappingLuong: ' + error.message);
  }
};

export const getMappingLuongByIdService = async (id) => {
  try {
    const data = await MappingLuong.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi MappingLuong không tồn tại');
    }
    return data;
  } catch (error) {
    throw new Error('Lỗi khi lấy bản ghi MappingLuong: ' + error.message);
  }
};

export const getAllMappingLuongService = async () => {
  try {
    const dataList = await MappingLuong.findAll();
    return dataList.sort((a, b) => a.id - b.id);
  } catch (error) {
    throw new Error('Lỗi khi lấy danh sách bản ghi MappingLuong: ' + error.message);
  }
};

export const updateMappingLuongService = async (newData) => {
  const { id } = newData;
  try {
    const data = await MappingLuong.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi MappingLuong không tồn tại');
    }
    await data.update(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi cập nhật bản ghi MappingLuong: ' + error.message);
  }
};

export const deleteMappingLuongService = async (ids) => {
  try {
    const dataList = await MappingLuong.findAll({
      where: {
        id: ids,
      },
    });
    if (dataList.length === 0) {
      throw new Error('Không có bản ghi MappingLuong nào tồn tại với các ID này');
    }
    await MappingLuong.update(
      { show: false },
      {
        where: {
          id: ids,
        },
      }
    );
    return { message: 'Các bản ghi MappingLuong đã được ẩn thành công' };
  } catch (error) {
    throw new Error('Lỗi khi ẩn các bản ghi MappingLuong: ' + error.message);
  }
};
