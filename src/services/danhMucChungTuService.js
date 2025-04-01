import { DanhMucChungTu } from "../postgres/postgres.js";

export const createDanhMucChungTuService = async (newData) => {
  try {
    const data = await DanhMucChungTu.create(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi tạo bản ghi DanhMucChungTu: " + error.message);
  }
};

export const getDanhMucChungTuByIdService = async (id) => {
  try {
    const data = await DanhMucChungTu.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi DanhMucChungTu không tồn tại");
    }
    return data;
  } catch (error) {
    throw new Error("Lỗi khi lấy bản ghi DanhMucChungTu: " + error.message);
  }
};

export const getAllDanhMucChungTuService = async () => {
  try {
    const dataList = await DanhMucChungTu.findAll({
      where: {
        show: true,
      },
    });
    return dataList.sort((a, b) => b.id - a.id);
  } catch (error) {
    throw new Error(
      "Lỗi khi lấy danh sách bản ghi DanhMucChungTu: " + error.message
    );
  }
};

export const updateDanhMucChungTuService = async (newData) => {
  const { id, oldValue, name } = newData;
  try {
    const data = await DanhMucChungTu.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi DanhMucChungTu không tồn tại");
    }
    await data.update(newData);
    //     .then(() => {
    //   fetchAndUpdateRecords(oldValue, name)
    // });
    return data;
  } catch (error) {
    throw new Error(
      "Lỗi khi cập nhật bản ghi DanhMucChungTu: " + error.message
    );
  }
};

export const deleteDanhMucChungTuService = async (ids) => {
  try {
    const dataList = await DanhMucChungTu.findAll({
      where: {
        id: ids,
      },
    });
    if (dataList.length === 0) {
      throw new Error(
        "Không có bản ghi DanhMucChungTu nào tồn tại với các ID này"
      );
    }
    await DanhMucChungTu.update(
      { show: false },
      {
        where: {
          id: ids,
        },
      }
    );
    return { message: "Các bản ghi DanhMucChungTu đã được ẩn thành công" };
  } catch (error) {
    throw new Error("Lỗi khi ẩn các bản ghi DanhMucChungTu: " + error.message);
  }
};
