import {
    Progress,
} from "../postgres/postgres.js";

// GET
export const getAllProgressService = async () => {
    try {
        const data = await Progress.findAll({
            where: {
                show: true
            },
            order: [
                ['id', 'ASC']
            ]
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi Progress: ' + error.message);
    }
}

// CREATE
export const createProgressService = async (newData) => {
    try {
        const data = await Progress.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi Progress: ' + error.message);
    }
}

// UPDATE
export const updateProgressService = async (newData) => {
    const {
        id
    } = newData;
    try {
        const data = await Progress.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Progress không tồn tại');
        }
        const updatedData = await data.update(newData)
        return updatedData
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi Progress: ' + error.message);
    }
}

// DELETE
export const deleteProgressService = async (id) => {
    try {
        const data = await Progress.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Progress không tồn tại');
        }
        await data.update({
            show: false
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi xóa bản ghi Progress: ' + error.message);
    }
}