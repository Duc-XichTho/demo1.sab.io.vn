import { KhoanMucThuChiTien } from '../postgres/postgres.js';

export const createKhoanMucThuChiTienService = async (newData) => {
  try {
    const data = await KhoanMucThuChiTien.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi tạo bản ghi KhoanMucThuChiTien: ' + error.message);
  }
};

export const getKhoanMucThuChiTienByIdService = async (id) => {
  try {
    const data = await KhoanMucThuChiTien.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi KhoanMucThuChiTien không tồn tại');
    }
    return data;
  } catch (error) {
    throw new Error('Lỗi khi lấy bản ghi KhoanMucThuChiTien: ' + error.message);
  }
};

export const getAllKhoanMucThuChiTienService = async () => {
  try {
    const dataList = await KhoanMucThuChiTien.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
    return dataList.sort((a, b) => b.id - a.id);

  } catch (error) {
    throw new Error('Lỗi khi lấy danh sách bản ghi KhoanMucThuChiTien: ' + error.message);
  }
};

export const updateKhoanMucThuChiTienService = async (newData) => {
  const { id, oldValue, name } = newData;
  try {
    const data = await KhoanMucThuChiTien.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi KhoanMucThuChiTien không tồn tại');
    }
    await data.update(newData)
    //     .then(() => {
    //   fetchAndUpdateRecords(oldValue, name)
    // });
    return data;
  } catch (error) {
    throw new Error('Lỗi khi cập nhật bản ghi KhoanMucThuChiTien: ' + error.message);
  }
};

export const deleteKhoanMucThuChiTienService = async (ids) => {
  try {
    const dataList = await KhoanMucThuChiTien.findAll({
      where: {
        id: ids,
      },
    });
    if (dataList.length === 0) {
      throw new Error('Không có bản ghi KhoanMucThuChiTien nào tồn tại với các ID này');
    }
    await KhoanMucThuChiTien.update(
      { show: false },
      {
        where: {
          id: ids,
        },
      }
    );
    return { message: 'Các bản ghi KhoanMucThuChiTien đã được ẩn thành công' };
  } catch (error) {
    throw new Error('Lỗi khi ẩn các bản ghi KhoanMucThuChiTien: ' + error.message);
  }
};

