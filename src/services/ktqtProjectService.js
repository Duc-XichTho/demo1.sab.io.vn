import { KTQTProject } from "../postgres/postgres.js";

export const createKTQTProject = async (value) => {
  try {
    const data = await KTQTProject.create(value);
    return {
      msg: data ? "thêm dữ liệu thành công" : "Lỗi thêm dữ liệu",
      data,
    };
  } catch (error) {
    return {
      error: error,
      msg: "Lỗi máy chủ",
    };
  }
};

export const getKTQTProject = async () => {
  try {
    const data = await KTQTProject.findAll({
      order: [["id", "DESC"]],
      where: {
        show: true,
      },
    });
    return {
      msg: data.length ? "Lấy KTQTProjectList thành công" : "KTQTProjectList trống ",
      data: data,
    };
  } catch (error) {
    return {
      error: error,
      msg: "Lỗi máy chủ",
    };
  }
};

export const hideKTQTProject = async (id) => {
  try {
    const data = await KTQTProject.findOne({ where: { id: id } });
    if (data) {
      await KTQTProject.update({ show: false }, { where: { id: id } });
      const value = await KTQTProject.findOne({ where: { id: data.id } });
      return {
        msg: "Đã thay dổi show = fasle thành công",
        data: value,
      };
    } else {
      return {
        msg: "Không tìm thấy đối tượng phù hợp để thay đổi",
        id: id,
      };
    }
  } catch (error) {
    return {
      error: error,
      msg: "Lỗi máy chủ",
    };
  }
};

export const updateKTQTProject = async (id, value) => {
  try {
    const data = await KTQTProject.findOne({ where: { id: id } });
    if (data) {
      await KTQTProject.update(value, { where: { id: id } });
      return {
        msg: "Thành công",
        data: { ...value, id },
      };
    } else {
      return {
        msg: "Không tìm thấy đối tượng phù hợp để sửa",
      };
    }
  } catch (error) {
    return {
      error: error,
      msg: "Lỗi máy chủ",
    };
  }
};
