import { LoaiTien } from '../postgres/postgres.js';

export const createLoaiTienService = async (newData) => {
  try {
    const data = await LoaiTien.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi tạo bản ghi LoaiTien: ' + error.message);
  }
};

export const getLoaiTienByIdService = async (id) => {
  try {
    const data = await LoaiTien.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi LoaiTien không tồn tại');
    }
    return data;
  } catch (error) {
    throw new Error('Lỗi khi lấy bản ghi LoaiTien: ' + error.message);
  }
};

export const getAllLoaiTienService = async () => {
  try {
    const dataList = await LoaiTien.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
    return dataList.sort((a, b) => b.id - a.id);

  } catch (error) {
    throw new Error('Lỗi khi lấy danh sách bản ghi LoaiTien: ' + error.message);
  }
};

export const updateLoaiTienService = async (newData) => {
  const { id, oldValue, name } = newData;
  try {
    const data = await LoaiTien.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi LoaiTien không tồn tại');
    }
    await data.update(newData)
    //     .then(() => {
    //   fetchAndUpdateRecords(oldValue, name)
    // });
    return data;
  } catch (error) {
    throw new Error('Lỗi khi cập nhật bản ghi LoaiTien: ' + error.message);
  }
};

export const deleteLoaiTienService = async (ids) => {
  try {
    const dataList = await LoaiTien.findAll({
      where: {
        id: ids,
      },
    });
    if (dataList.length === 0) {
      throw new Error('Không có bản ghi LoaiTien nào tồn tại với các ID này');
    }
    await LoaiTien.update(
      { show: false },
      {
        where: {
          id: ids,
        },
      }
    );
    return { message: 'Các bản ghi LoaiTien đã được ẩn thành công' };
  } catch (error) {
    throw new Error('Lỗi khi ẩn các bản ghi LoaiTien: ' + error.message);
  }
};

