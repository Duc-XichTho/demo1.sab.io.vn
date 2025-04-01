import {
  LenhSanXuat,
  LenhSanXuatNL,
  LenhSanXuatSP,
} from "../postgres/postgres.js";

// GET
export const getLenhSanXuatByIdService = async (id) => {
  try {
    const data = await LenhSanXuat.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi LenhSanXuat không tồn tại");
    }
    return data;
  } catch (error) {
    throw new Error("Lỗi khi lấy bản ghi LenhSanXuat: " + error.message);
  }
};

export const getAllLenhSanXuatService = async () => {
  try {
    const dataList = await LenhSanXuat.findAll({
      where: {
        show: true,
      },
      order: [["id", "ASC"]],
    });
    return dataList.sort((a, b) => b.id - a.id);
  } catch (error) {
    throw new Error(
      "Lỗi khi lấy danh sách bản ghi LenhSanXuat: " + error.message
    );
  }
};

export const getAllLenhSanXuatSPByLSXIdService = async (id) => {
  try {
    const dataList = await LenhSanXuatSP.findAll({
      where: {
        idLSX: id,
        show: true,
      },
      order: [["id", "ASC"]],
    });
    return dataList;
  } catch (error) {
    throw new Error(
      "Lỗi khi lấy danh sách bản ghi LenhSanXuatSP: " + error.message
    );
  }
};

export const getAllLenhSanXuatNLByLSXIdService = async (id) => {
  try {
    const dataList = await LenhSanXuatNL.findAll({
      where: {
        idLSX: id,
        show: true,
      },
      order: [["id", "ASC"]],
    });
    return dataList;
  } catch (error) {
    throw new Error(
      "Lỗi khi lấy danh sách bản ghi LenhSanXuatNL: " + error.message
    );
  }
};

// CREATE
export const createLenhSanXuatService = async (newData) => {
  try {
    const data = await LenhSanXuat.create(newData);
    const paddedId = data.id.toString().padStart(3, "0");
    await data.update({ code: `LSX${paddedId}` });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi tạo bản ghi LenhSanXuat: " + error.message);
  }
};

export const createLenhSanXuatNLService = async (newData) => {
  try {
    const data = await LenhSanXuatNL.create(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi tạo bản ghi LenhSanXuatNL: " + error.message);
  }
};

export const createLenhSanXuatSPService = async (newData) => {
  try {
    const data = await LenhSanXuatSP.create(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi tạo bản ghi LenhSanXuatSP: " + error.message);
  }
};

// UPDATE
export const updateLenhSanXuatService = async (newData) => {
  const { id, oldValue, name } = newData;
  try {
    const data = await LenhSanXuat.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi LenhSanXuat không tồn tại");
    }
    await data.update(newData);
    //     .then(()=> {
    //      fetchAndUpdateRecords(oldValue, name)
    // })
    return data;
  } catch (error) {
    throw new Error("Lỗi khi cập nhật bản ghi LenhSanXuat: " + error.message);
  }
};

export const updateLenhSanXuatNLService = async (newData) => {
  const { id } = newData;
  try {
    const data = await LenhSanXuatNL.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi LenhSanXuatNL không tồn tại");
    }
    await data.update(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi cập nhật bản ghi LenhSanXuatNL: " + error.message);
  }
};

export const updateLenhSanXuatSPService = async (newData) => {
  const { id } = newData;
  try {
    const data = await LenhSanXuatSP.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi LenhSanXuatSP không tồn tại");
    }
    await data.update(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi cập nhật bản ghi LenhSanXuatSP: " + error.message);
  }
};

// DELETE
export const deleteLenhSanXuatService = async (ids) => {
  try {
    const dataList = await LenhSanXuat.findAll({
      where: {
        id: ids,
      },
    });
    if (dataList.length === 0) {
      throw new Error(
        "Không có bản ghi LenhSanXuat nào tồn tại với các ID này"
      );
    }
    await LenhSanXuat.update(
      { show: false },
      {
        where: {
          id: ids,
        },
      }
    );
    return { message: "Các bản ghi LenhSanXuat đã được ẩn thành công" };
  } catch (error) {
    throw new Error("Lỗi khi ẩn các bản ghi LenhSanXuat: " + error.message);
  }
};

export const deleteLenhSanXuatNLService = async (id) => {
  try {
    const data = await LenhSanXuatNL.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi LenhSanXuatNL không tồn tại");
    }
    await data.update({ show: false });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi xóa bản ghi LenhSanXuatNL: " + error.message);
  }
};

export const deleteLenhSanXuatSPService = async (id) => {
  try {
    const data = await LenhSanXuatSP.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi LenhSanXuatSP không tồn tại");
    }
    await data.update({ show: false });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi xóa bản ghi LenhSanXuatSP: " + error.message);
  }
};
