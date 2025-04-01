import { KTQTCoChePhanBo } from "../postgres/postgres.js";

export const createKTQTCoChePhanBoService = async (newData) => {
  try {
    const data = await KTQTCoChePhanBo.create(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi tạo bản ghi KTQTCoChePhanBo: " + error.message);
  }
};

export const getKTQTCoChePhanBoByIdService = async (id) => {
  try {
    const data = await KTQTCoChePhanBo.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi KTQTCoChePhanBo không tồn tại");
    }
    return data;
  } catch (error) {
    throw new Error("Lỗi khi lấy bản ghi KTQTCoChePhanBo: " + error.message);
  }
};

export const getAllKTQTCoChePhanBoService = async () => {
  try {
    const data = await KTQTCoChePhanBo.findAll();
    return data.sort((a, b) => a.id - b.id);
  } catch (error) {
    console.log(error);
    throw new Error(
      "Lỗi khi lấy danh sách bản ghi KTQTCoChePhanBo: " + error.message
    );
  }
};

export const updateKTQTCoChePhanBoService = async (newData) => {
  const { id } = newData;
  try {
    const data = await KTQTCoChePhanBo.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi KTQTCoChePhanBo không tồn tại");
    }
    await data.update(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi cập nhật bản ghi KTQTCoChePhanBo: " + error.message);
  }
};

export const deleteKTQTCoChePhanBoService = async (ids) => {
  try {
    const dataList = await KTQTCoChePhanBo.findAll({
      where: {
        id: ids,
      },
    });
    if (dataList.length === 0) {
      throw new Error(
        "Không có bản ghi KTQTCoChePhanBo nào tồn tại với các ID này"
      );
    }
    await KTQTCoChePhanBo.update(
      { show: false },
      {
        where: {
          id: ids,
        },
      }
    );
    return { message: "Các bản ghi KTQTCoChePhanBo đã được ẩn thành công" };
  } catch (error) {
    throw new Error("Lỗi khi ẩn các bản ghi KTQTCoChePhanBo: " + error.message);
  }
};
