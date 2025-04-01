import { PhongBan } from '../postgres/postgres.js';

export const createPhongBanService = async (newData) => {
  try {
    const data = await PhongBan.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi tạo bản ghi PhongBan: ' + error.message);
  }
};

export const getPhongBanByIdService = async (id) => {
  try {
    const data = await PhongBan.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi PhongBan không tồn tại');
    }
    return data;
  } catch (error) {
    throw new Error('Lỗi khi lấy bản ghi PhongBan: ' + error.message);
  }
};

export const getAllPhongBanService = async () => {
  try {
    const dataList = await PhongBan.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
    return dataList.sort((a, b) => b.id - a.id);

  } catch (error) {
    throw new Error('Lỗi khi lấy danh sách bản ghi PhongBan: ' + error.message);
  }
};

export const updatePhongBanService = async (newData) => {
  const { id, oldValue, name } = newData;
  try {
    const data = await PhongBan.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi PhongBan không tồn tại');
    }
    await data.update(newData)
    //     .then(() => {
    //   fetchAndUpdateRecords(oldValue, name)
    // });
    return data;
  } catch (error) {
    throw new Error('Lỗi khi cập nhật bản ghi PhongBan: ' + error.message);
  }
};

export const deletePhongBanService = async (ids) => {
  try {
    const dataList = await PhongBan.findAll({
      where: {
        id: ids,
      },
    });
    if (dataList.length === 0) {
      throw new Error('Không có bản ghi PhongBan nào tồn tại với các ID này');
    }
    await PhongBan.update(
      { show: false },
      {
        where: {
          id: ids,
        },
      }
    );
    return { message: 'Các bản ghi PhongBan đã được ẩn thành công' };
  } catch (error) {
    throw new Error('Lỗi khi ẩn các bản ghi PhongBan: ' + error.message);
  }
};

