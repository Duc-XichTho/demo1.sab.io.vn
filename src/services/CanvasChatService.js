import {
    CanvasChat
} from "../postgres/postgres.js";

// GET
export const getAllCanvasChat = async () => {
    try {
        const dataList = await CanvasChat.findAll({
            where: {
                show: true
            },
            order: [
                ["id", "ASC"]
            ],
        });
        return dataList;
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi Canvas Chat: ' + error.message);
    }
}

export const getAllCanvasChatByCanvasContainer = async (id) => {
    try {
        const dataList = await CanvasChat.findAll({
            where: {
                idCanvasContainer:id,
                show: true
            },
            order: [
                ["id", "ASC"]
            ],
        });
        return dataList;
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi Canvas Chat: ' + error.message);
    }
}

// CREATE
export const createCanvasChat = async (newData) => {
    try {
        const data = await CanvasChat.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi Canvas Chat: ' + error.message);
    }
};

// UPDATE
export const updateCanvasChat = async (newData) => {
    const {
        id
    } = newData
    try {
        const data = await CanvasChat.findByPk(id)
        if (!data) {
            throw new Error('Bản ghi Canvas Chat không tồn tại');
        }
        await data.update(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi Canvas Chat: ' + error.message);
    }
};

// DELETE
export const deleteCanvasChat = async (id) => {
    try {
        const data = await CanvasChat.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Canvas Chat không tồn tại');
        }
        await data.update({
            show: false
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi xóa bản ghi Canvas Chat: ' + error.message);
    }
};