import { User } from "../postgres/postgres.js";

export const getUserByEmailService = async (email) => {
  return await User.findByPk(email);
};

export const getAllUserService = async () => {
  try {
    const result = await User.findAll({
      order: [["name", "ASC"]],
    });
    if (result.length === 0) {
      return {
        code: "NOT_FOUND",
        message: "Không có dữ liệu User",
        result: result,
      };
    }

    return {
      code: "SUCCESS",
      message: "Lấy dữ liệu User thành công",
      result: result,
    };
  } catch (error) {
    throw error;
  }
};

export const createUserService = async (data) => {
  const user = await User.findOne({
    where: {
      email: data.email,
    },
  });

  if (user) {
    return {
      code: "USER_EXIST",
      message: "Email đã tồn tại trong hệ thống",
    };
  }

  await User.create(data);

  return {
    code: "USER_CREATED",
    message: "Thêm thành công",
  };
};

export const updateUserService = async (email, data) => {
  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (user) {
      await user.update(data);
      return {
        code: "UPDATED",
        message: "Cập nhật thành công",
      };
    } else {
      return {
        code: "NOT_FOUND",
        message: "Không tìm thấy User",
      };
    }
  } catch (error) {
    throw error;
  }
};

export const deleteUsersService = async (emails) => {
  try {
    if (!emails) {
      return {
        code: "NOT_FOUND",
        message: "Không tìm thấy Nhân viên",
      };
    }

    const emailArray = Array.isArray(emails) ? emails : [emails];

    await User.destroy({
      where: {
        email: emailArray,
      },
    });

    return {
      code: "DELETED",
      message: "Xóa thành công",
    };
  } catch (error) {
    throw error;
  }
};
