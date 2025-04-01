import {
    ProgressTaskPost
} from "../postgres/postgres.js";

// GET
export const getAllProgressTaskPost = async (progressTaskId) => {
    try {
        const data = await ProgressTaskPost.findAll({
            where: {
                progressTaskId: progressTaskId,
                show: true
            },
            order: [
                ["id", "ASC"]
            ]
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi ProgressTaskPost: ' + error.message);
    }
}

// UPDATE
export const updateProgressTaskPost = async (id, newData) => {
    try {
        const data = await ProgressTaskPost.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi ProgressTaskPost không tồn tại');
        }
        await data.update(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi ProgressTaskPost: ' + error.message);
    }
};

// CREATE
export const createProgressTaskPost = async (newData) => {
    try {
        const data = await ProgressTaskPost.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi ProgressTaskPost: ' + error.message);
    }
}

// DELETE
export const deleteProgressTaskPost = async (id) => {
    try {
        const data = await ProgressTaskPost.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi ProgressTaskPost không tồn tại');
        }
        await data.update({
            show: false
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi xóa bản ghi ProgressTaskPost: ' + error.message);
    }
};