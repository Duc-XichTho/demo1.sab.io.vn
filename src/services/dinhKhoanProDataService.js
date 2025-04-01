import { DinhKhoanProData } from "../postgres/postgres.js";

// GET
export const getAllDinhKhoanProData= async () => {
    try {
        const data = await DinhKhoanProData.findAll({
            where: {
                show: true
            },
            order: [['id', 'DESC']]
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi DinhKhoanProData: ' + error.message);
    }
}
// GET
export const getDinhKhoanProDataByDinhKhoanId = async (dinhKhoan_id) => {
    try {
        const data = await DinhKhoanProData.findAll({
            where: {
                dinhKhoan_id,
                show: true
            },
            order: [['id', 'DESC']]
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi DinhKhoanProData: ' + error.message);
    }
}

// UPDATE
export const updateDInhKhoanProData = async (newData) => {
    const { id } = newData;
    try {
        const data = await DinhKhoanProData.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DinhKhoanProData không tồn tại');
        }
        await data.update(newData)
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi DinhKhoanProData: ' + error.message);
    }
};

// CREATE
export const createDinhKhoanProData = async (newData) => {
    try {
        const data = await DinhKhoanProData.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi DinhKhoanProData: ' + error.message);
    }
};

// DELETE
export const deleteDinhKhoanProData = async (id) => {
    try {
        const data = await DinhKhoanProData.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DinhKhoanProData không tồn tại');
        }
        await data.update({ show: false });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi xóa bản ghi DinhKhoanProData: ' + error.message);
    }
};
