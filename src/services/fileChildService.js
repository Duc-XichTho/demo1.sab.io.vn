import { FileChild } from "../postgres/postgres.js";

export const createFileChildService = async (newData) => {
  try {
    const data = await FileChild.create(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi tạo bản ghi FileChild: " + error.message);
  }
};

export const getFileChildByIdService = async (id) => {
  try {
    const data = await FileChild.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi FileChild không tồn tại");
    }
    return data;
  } catch (error) {
    throw new Error("Lỗi khi lấy bản ghi FileChild: " + error.message);
  }
};

export const getFileChildService = async () => {
  try {
    const dataList = await FileChild.findAll({
      order: [["id", "DESC"]],
    });

    return dataList;
  } catch (error) {
    throw new Error(
      "Lỗi khi lấy danh sách bản ghi FileChild: " + error.message
    );
  }
};

export const updateFileChildService = async (newData) => {
  const { id, oldValue, code } = newData;
  try {
    const data = await FileChild.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi FileChild không tồn tại");
    }
    await data.update(newData);
    //     .then(() => {
    //     fetchAndUpdateRecords(oldValue, code)
    // });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi cập nhật bản ghi FileChild: " + error.message);
  }
};

export const deleteFileChildService = async (id) => {
  try {
    const ids = Array.isArray(id) ? id : [id];

    const dataList = await FileChild.findAll({
      where: { id: ids },
    });

    if (dataList.length === 0) {
      throw new Error(
        `Không có bản ghi FileChild nào tồn tại với các ID: ${ids.join(", ")}`
      );
    }

    await FileChild.update({ show: false }, { where: { id: ids } });

    return {
      message: `Các bản ghi FileChild (ID: ${ids.join(
        ", "
      )}) đã được ẩn thành công`,
    };
  } catch (error) {
    throw new Error(`Lỗi khi ẩn các bản ghi FileChild: ${error.message}`);
  }
};
