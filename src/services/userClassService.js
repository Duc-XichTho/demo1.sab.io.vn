import { UserClass } from "../postgres/postgres.js";
import { Op } from "sequelize";
export const getAllUserClassService = async () => {
  return await UserClass.findAll({
    order: [["name", "ASC"]],
  });
};

export const getUserClassByIdService = async (id) => {
  return await UserClass.findByPk(id);
};

export const getUserClassByEmailService = async (email) => {
  try {
    const userClasses = await UserClass.findAll({
      where: {
        userAccess: {
          [Op.contains]: email,
        },
      },
      raw: true,
    });

    if (userClasses) {
      return userClasses;
    } else {
      return {
        code: "NOT_FOUND",
        message: "User không nằm trong User Class nào.",
      };
    }
  } catch (error) {
    throw error;
  }
};


export const createUserClassService = async (data) => {
  try {
    const userClass = await UserClass.create(data);

    if (userClass) {
      return {
        code: "CREATED",
        message: "Tạo User Class thành công",
      };
    } else {
      return {
        code: "NOT_CREATED",
        message: "Tạo User Class không thành công",
      };
    }
  } catch (error) {
    throw error;
  }
};

export const updateUserClassService = async (id, data) => {
  try {
    const userClass = await UserClass.findByPk(id);

    if (userClass) {
      await userClass.update(data);
      return {
        code: "UPDATED",
        message: "Cập nhật thành công",
      };
    } else {
      return {
        code: "NOT_FOUND",
        message: "Không tìm thấy User Class",
      };
    }
  } catch (error) {
    throw error;
  }
};

export const deleteUserClassService = async (id) => {
  try {
    const userClass = await UserClass.findByPk(id);

    if (userClass) {
      await userClass.destroy();
      return {
        code: "DELETED",
        message: "Xóa thành công",
      };
    } else {
      return {
        code: "NOT_FOUND",
        message: "Không tìm thấy User Class",
      };
    }
  } catch (error) {
    throw error;
  }
};
