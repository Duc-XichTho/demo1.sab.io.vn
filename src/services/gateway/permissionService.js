import { PermissionGw } from "../../postgres/postgres.js";
import { Op } from "sequelize";

// GET ALL
export const getAllPermissions = async () => {
    try {
        const data = await PermissionGw.findAll({
            where: {
                show: true,
            },
            order: [["id", "DESC"]],
        });
        return data;
    } catch (error) {
        throw new Error(
            "Lỗi khi lấy danh sách bản ghi PermissionGw: " + error.message
        );
    }
};

// GET BY USER EMAIL AND COMPANY ID
export const getPermissionByUserAndCompany = async (userEmail, companyId) => {
    try {
        const data = await PermissionGw.findOne({
            where: {
                user_email: userEmail,
                company_id: companyId,
                show: true,
            },
        });
        return data;
    } catch (error) {
        throw new Error(
            "Lỗi khi lấy thông tin quyền: " + error.message
        );
    }
};

// GET BY COMPANY ID
export const getPermissionsByCompanyId = async (companyId) => {
    try {
        const data = await PermissionGw.findAll({
            where: {
                company_id: companyId,
                show: true,
            },
            order: [["id", "DESC"]],
        });
        return data;
    } catch (error) {
        throw new Error(
            "Lỗi khi lấy danh sách quyền theo công ty: " + error.message
        );
    }
};

// GET BY USER EMAIL
export const getPermissionsByUserEmail = async (userEmail) => {
    try {
        const data = await PermissionGw.findAll({
            where: {
                user_email: userEmail,
                show: true,
            },
            order: [["id", "DESC"]],
        });
        return data;
    } catch (error) {
        throw new Error(
            "Lỗi khi lấy danh sách quyền theo người dùng: " + error.message
        );
    }
};

// UPDATE
export const updatePermission = async (data) => {
    try {
        const { id } = data;
        const permission = await PermissionGw.findByPk(id);
        if (!permission) {
            throw new Error("Bản ghi PermissionGw không tồn tại");
        }
        await permission.update(data);
        return data;
    } catch (error) {
        throw new Error("Lỗi khi cập nhật bản ghi PermissionGw: " + error.message);
    }
};

// CREATE
export const createPermission = async (data) => {
    try {
        // Check if a permission already exists for this user and company
        const existingPermission = await PermissionGw.findOne({
            where: {
                user_email: data.user_email,
                company_id: data.company_id,
                show: true
            }
        });

        if (existingPermission) {
            // Update the existing permission instead of creating a new one
            await existingPermission.update(data);
            return existingPermission;
        }

        // Create a new permission if none exists
        const permission = await PermissionGw.create(data);
        return permission;
    } catch (error) {
        throw new Error("Lỗi khi tạo bản ghi PermissionGw: " + error.message);
    }
};

// DELETE
export const deletePermission = async (id) => {
    try {
        const permission = await PermissionGw.findByPk(id);
        if (!permission) {
            throw new Error("Bản ghi PermissionGw không tồn tại");
        }
        await permission.update({ show: false });
        return permission;
    } catch (error) {
        throw new Error("Lỗi khi xóa bản ghi PermissionGw: " + error.message);
    }
}; 