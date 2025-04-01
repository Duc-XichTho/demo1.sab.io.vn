import { DonViTinh } from '../postgres/postgres.js';

export const createDonViTinhService = async (newData) => {
  try {
    const data = await DonViTinh.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi tạo bản ghi DonViTinh: ' + error.message);
  }
};

export const getDonViTinhByIdService = async (id) => {
  try {
    const data = await DonViTinh.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi DonViTinh không tồn tại');
    }
    return data;
  } catch (error) {
    throw new Error('Lỗi khi lấy bản ghi DonViTinh: ' + error.message);
  }
};

export const getAllDonViTinhService = async () => {
  try {
    const dataList = await DonViTinh.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
    return dataList.sort((a, b) => b.id - a.id);

  } catch (error) {
    throw new Error('Lỗi khi lấy danh sách bản ghi DonViTinh: ' + error.message);
  }
};

export const updateDonViTinhService = async (newData) => {
  const { id, oldValue, name } = newData;
  try {
    const data = await DonViTinh.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi DonViTinh không tồn tại');
    }
    await data.update(newData)
    //     .then(() => {
    //   fetchAndUpdateRecords(oldValue, name)
    // });
    return data;
  } catch (error) {
    throw new Error('Lỗi khi cập nhật bản ghi DonViTinh: ' + error.message);
  }
};

export const deleteDonViTinhService = async (ids) => {
  try {
    const dataList = await DonViTinh.findAll({
      where: {
        id: ids,
      },
    });
    if (dataList.length === 0) {
      throw new Error('Không có bản ghi DonViTinh nào tồn tại với các ID này');
    }
    await DonViTinh.update(
      { show: false },
      {
        where: {
          id: ids,
        },
      }
    );
    return { message: 'Các bản ghi DonViTinh đã được ẩn thành công' };
  } catch (error) {
    throw new Error('Lỗi khi ẩn các bản ghi DonViTinh: ' + error.message);
  }
};

