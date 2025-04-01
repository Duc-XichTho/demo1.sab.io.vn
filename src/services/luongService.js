import {Luong} from "../postgres/postgres.js";


export const createLuongService = async (newData) => {
  try {
    const data = await Luong.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi tạo bản ghi Luong: ' + error.message);
  }
};

export const getLuongByIdService = async (id) => {
  try {
    const data = await Luong.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi Luong không tồn tại');
    }
    return data;
  } catch (error) {
    throw new Error('Lỗi khi lấy bản ghi Luong: ' + error.message);
  }
};

export const getAllLuongService = async () => {
  try {
    const dataList = await Luong.findAll();
    return dataList.sort((a, b) => a.id - b.id);
  } catch (error) {
    throw new Error('Lỗi khi lấy danh sách bản ghi Luong: ' + error.message);
  }
};

export const updateLuongService = async (newData) => {
  const { id } = newData;
  try {
    const data = await Luong.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi Luong không tồn tại');
    }
    await data.update(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi cập nhật bản ghi Luong: ' + error.message);
  }
};

export const deleteLuongService = async (ids) => {
  try {
    const dataList = await Luong.findAll({
      where: {
        id: ids,
      },
    });
    if (dataList.length === 0) {
      throw new Error('Không có bản ghi Luong nào tồn tại với các ID này');
    }
    await Luong.update(
      { show: false },
      {
        where: {
          id: ids,
        },
      }
    );
    return { message: 'Các bản ghi Luong đã được ẩn thành công' };
  } catch (error) {
    throw new Error('Lỗi khi ẩn các bản ghi Luong: ' + error.message);
  }
};
