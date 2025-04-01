import { DinhMucNL, DinhMucSP } from "../postgres/postgres.js";

// GET
export const getAllDinhMucSPService = async () => {
  try {
    const dataList = await DinhMucSP.findAll({
      order: [["id", "ASC"]],
    });
    return dataList;
  } catch (error) {
    throw new Error(
      "Lỗi khi lấy danh sách bản ghi DinhMucSP: " + error.message
    );
  }
};

export const getAllDinhMucNLBySPIdService = async (idSP) => {
  try {
    const dataList = await DinhMucNL.findAll({
      where: {
        idSP: idSP,
        show: true,
      },
    });
    return dataList;
  } catch (error) {
    throw new Error(
      "Lỗi khi lấy danh sách bản ghi DinhMucNL: " + error.message
    );
  }
};

// CREATE
export const createDinhMucNLService = async (newData) => {
  try {
    const data = await DinhMucNL.create(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi tạo bản ghi DinhMucNL: " + error.message);
  }
};

export const createDinhMucSPService = async (newData) => {
  try {
    const data = await DinhMucSP.create(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi tạo bản ghi DinhMucSP: " + error.message);
  }
};

// UPDATE
export const updateDinhMucNLService = async (newData) => {
  const { id } = newData;
  try {
    const data = await DinhMucNL.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi DinhMucNL không tồn tại");
    }
    await data.update(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi cập nhật bản ghi DinhMucNL: " + error.message);
  }
};

export const updateDinhMucSPService = async (newData) => {
  const { id } = newData;
  try {
    const data = await DinhMucSP.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi DinhMucSP không tồn tại");
    }
    await data.update(newData, { email: newData.email || null });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi cập nhật bản ghi DinhMucSP: " + error.message);
  }
};

// DELETE
export const deleteDinhMucSPService = async (id) => {
  try {
    const data = await DinhMucSP.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi DinhMucSP không tồn tại");
    }
    await data.update({ show: false });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi xóa bản ghi DinhMucSP: " + error.message);
  }
};

export const deleteDinhMucNLService = async (id) => {
  try {
    const data = await DinhMucNL.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi DinhMucNL không tồn tại");
    }
    await data.update({ show: false });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi xóa bản ghi DinhMucNL: " + error.message);
  }
};
