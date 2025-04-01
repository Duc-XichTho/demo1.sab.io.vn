import { KhoanMucDoanhThuChiPhi } from '../postgres/postgres.js';

export const createKhoanMucDoanhThuChiPhiService = async (newData) => {
  try {
    const data = await KhoanMucDoanhThuChiPhi.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi tạo bản ghi KhoanMucDoanhThuChiPhi: ' + error.message);
  }
};

export const getKhoanMucDoanhThuChiPhiByIdService = async (id) => {
  try {
    const data = await KhoanMucDoanhThuChiPhi.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi KhoanMucDoanhThuChiPhi không tồn tại');
    }
    return data;
  } catch (error) {
    throw new Error('Lỗi khi lấy bản ghi KhoanMucDoanhThuChiPhi: ' + error.message);
  }
};

export const getAllKhoanMucDoanhThuChiPhiService = async () => {
  try {
    const dataList = await KhoanMucDoanhThuChiPhi.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
    return dataList.sort((a, b) => b.id - a.id);

  } catch (error) {
    throw new Error('Lỗi khi lấy danh sách bản ghi KhoanMucDoanhThuChiPhi: ' + error.message);
  }
};

export const updateKhoanMucDoanhThuChiPhiService = async (newData) => {
  const { id, oldValue, name } = newData;
  try {
    const data = await KhoanMucDoanhThuChiPhi.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi KhoanMucDoanhThuChiPhi không tồn tại');
    }
    await data.update(newData)
    //     .then(() => {
    //   fetchAndUpdateRecords(oldValue, name)
    // });
    return data;
  } catch (error) {
    throw new Error('Lỗi khi cập nhật bản ghi KhoanMucDoanhThuChiPhi: ' + error.message);
  }
};

export const deleteKhoanMucDoanhThuChiPhiService = async (ids) => {
  try {
    const dataList = await KhoanMucDoanhThuChiPhi.findAll({
      where: {
        id: ids,
      },
    });
    if (dataList.length === 0) {
      throw new Error('Không có bản ghi KhoanMucDoanhThuChiPhi nào tồn tại với các ID này');
    }
    await KhoanMucDoanhThuChiPhi.update(
      { show: false },
      {
        where: {
          id: ids,
        },
      }
    );
    return { message: 'Các bản ghi KhoanMucDoanhThuChiPhi đã được ẩn thành công' };
  } catch (error) {
    throw new Error('Lỗi khi ẩn các bản ghi KhoanMucDoanhThuChiPhi: ' + error.message);
  }
};

