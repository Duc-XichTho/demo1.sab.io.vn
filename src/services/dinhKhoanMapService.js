import {
    DinhKhoanMap
} from "../postgres/postgres.js";

// GET
export const getAllDinhKhoanMapService = async () => {
    try {
        const data = await DinhKhoanMap.findAll({
            where: {
                show: true,
            },
            order: [
                ['id', 'DESC']
            ],
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi DinhKhoanMap: ' + error.message);
    }
}

// UPDATE
export const updateDinhKhoanMapService = async (newData) => {
    const {
        id
    } = newData;
    try {
        const data = await DinhKhoanMap.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DinhKhoanMap không tồn tại');
        }
        await data.update(newData)
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi DinhKhoanMap: ' + error.message);
    }
}

// CREATE
export const createDinhKhoanMapService = async (newData) => {
    try {
        const data = await DinhKhoanMap.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi DinhKhoanMap: ' + error.message);
    }
}

// DELETE
export const deleteDinhKhoanMapService = async (id) => {
    try {
        const data = await DinhKhoanMap.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DinhKhoanMap không tồn tại');
        }
        await data.update({
            show: false
        })
    } catch (error) {
        throw new Error('Lỗi khi xóa bản ghi DinhKhoanMap: ' + error.message);
    }
};