import {
    ProgressStep
} from '../postgres/postgres.js';

// GET
export const getAllProgressStep = async (progressId) => {
    try {
        const data = await ProgressStep.findAll({
            where: {
                progressId: progressId,
                show: true
            },
            order: [
                ["id", "ASC"]
            ]
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi ProgressStep: ' + error.message);
    }
}

// CREATE
export const createProgressStep = async (newData) => {
    try {
        const data = await ProgressStep.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi ProgressStep: ' + error.message);
    }
}

// UPDATE
export const updateProgressStep = async (id, newData) => {
    try {
        const data = await ProgressStep.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi ProgressStep không tồn tại');
        }
        await data.update(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi ProgressStep: ' + error.message);
    }
};

// DELETE
export const deleteProgressStep = async (id) => {
    try {
        const data = await ProgressStep.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi ProgressStep không tồn tại');
        }
        await data.update({
            show: false
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi xóa bản ghi ProgressStep: ' + error.message);
    }
};