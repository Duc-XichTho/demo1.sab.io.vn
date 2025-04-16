import {
    CanvasBot
} from "../postgres/postgres.js";

// GET
export const getAllCanvasBot = async () => {
    try {
        const dataList = await CanvasBot.findAll({
            where: {
                show: true
            },
            order: [
                ["id", "ASC"]
            ],
        });
        return dataList;
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi Canvas Bot: ' + error.message);
    }
}
export const getCanvasBotByIdCanvasContainer = async (id) => {
    try {
        const dataList = await CanvasBot.findAll({
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
        throw new Error('Lỗi khi lấy danh sách bản ghi Canvas Bot: ' + error.message);
    }
}

// CREATE
export const createCanvasBot = async (newData) => {
    try {
        const data = await CanvasBot.create(newData);
        const paddedId = data.id.toString().padStart(3, '0');
        const code = `BOT${paddedId}`;
        const updatedData = await CanvasBot.update({
            code: code
        }, {
            where: {
                id: data.id
            }
        });

        return updatedData;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi Canvas Bot: ' + error.message);
    }
}

// UPDATE
export const updateCanvasBot = async (newData) => {
    const {
        id
    } = newData
    try {
        const data = await CanvasBot.findByPk(id)
        if (!data) {
            throw new Error('Bản ghi Canvas Bot không tồn tại');
        }
        await data.update(newData)
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi Canvas Bot: ' + error.message);
    }
}

// DELTE
export const deleteCanvasBot = async (id) => {
    try {
        const data = await CanvasBot.findByPk(id)
        if (!data) {
            throw new Error('Bản ghi Canvas Bot không tồn tại');
        }
        await data.update({
            show: false
        })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi xóa bản ghi Canvas Bot: ' + error.message);
    }
}