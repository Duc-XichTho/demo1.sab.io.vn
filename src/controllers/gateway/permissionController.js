import {
    getAllPermissions,
    getPermissionByUserAndCompany,
    getPermissionsByCompanyId,
    getPermissionsByUserEmail,
    updatePermission,
    createPermission,
    deletePermission,
} from "../../services/gateway/permissionService.js";

// GET ALL
export const getAllPermissionsController = async (req, res) => {
    try {
        const permissionList = await getAllPermissions();
        res.status(200).json(permissionList);
    } catch (error) {
        res.status(500).json({
            message: "Lỗi khi lấy danh sách bản ghi Permission: " + error.message,
        });
    }
};

// GET BY USER EMAIL AND COMPANY ID
export const getPermissionByUserAndCompanyController = async (req, res) => {
    try {
        const { userEmail, companyId } = req.params;
        const permission = await getPermissionByUserAndCompany(userEmail, companyId);

        if (!permission) {
            return res.status(200).json(null);
        }

        res.status(200).json(permission);
    } catch (error) {
        res.status(500).json({
            message: "Lỗi khi lấy thông tin quyền: " + error.message,
        });
    }
};

// GET BY COMPANY ID
export const getPermissionsByCompanyIdController = async (req, res) => {
    try {
        const companyId = req.params.companyId;
        const permissionList = await getPermissionsByCompanyId(companyId);
        res.status(200).json(permissionList);
    } catch (error) {
        res.status(500).json({
            message: "Lỗi khi lấy danh sách quyền theo công ty: " + error.message,
        });
    }
};

// GET BY USER EMAIL
export const getPermissionsByUserEmailController = async (req, res) => {
    try {
        const userEmail = req.params.userEmail;
        const permissionList = await getPermissionsByUserEmail(userEmail);
        res.status(200).json(permissionList);
    } catch (error) {
        res.status(500).json({
            message: "Lỗi khi lấy danh sách quyền theo người dùng: " + error.message,
        });
    }
};

// UPDATE
export const updatePermissionController = async (req, res) => {
    try {
        const permission = await updatePermission(req.body);
        res.status(200).json(permission);
    } catch (error) {
        res.status(404).json({
            message: "Bản ghi không tồn tại hoặc lỗi khi cập nhật: " + error.message,
        });
    }
};

// CREATE
export const createPermissionController = async (req, res) => {
    try {
        const permission = await createPermission(req.body);
        res.status(200).json(permission);
    } catch (error) {
        res.status(404).json({
            message: "Lỗi khi tạo bản ghi Permission: " + error.message,
        });
    }
};

// DELETE
export const deletePermissionController = async (req, res) => {
    try {
        const permission = await deletePermission(req.params.id);
        res.status(200).json(permission);
    } catch (error) {
        res.status(404).json({
            message: "Bản ghi không tồn tại hoặc lỗi khi xóa: " + error.message,
        });
    }
}; 