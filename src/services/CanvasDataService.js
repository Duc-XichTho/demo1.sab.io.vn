import {
    CanvasData
} from "../postgres/postgres.js";

// GET
export const getAllCanvasData = async () => {
    try {
        const dataList = await CanvasData.findAll({
            where: {
                show: true
            },
            order: [
                ["id", "ASC"]
            ],
        });
        return dataList;
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi Canvas Data: ' + error.message);
    }
}

// CREATE
export const createCanvasData = async (newData) => {
    try {
        const data = await CanvasData.create(newData);
        // const paddedId = data.id.toString().padStart(3, '0');
        // const code = `COMP${paddedId}`;
        // const updatedData = await CanvasData.update({
        //     code: code
        // }, {
        //     where: {
        //         id: data.id
        //     }
        // });

        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi Canvas Data: ' + error.message);
    }
}

// UPDATE
export const updateCanvasData = async (newData) => {
    const {
        id
    } = newData
    try {
        const data = await CanvasData.findByPk(id)
        if (!data) {
            throw new Error('Bản ghi Canvas Data không tồn tại');
        }
        await data.update(newData)
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi Canvas Data: ' + error.message);
    }
}

// DELETE
export const deleteCanvasData = async (id) => {
    try {
        const data = await CanvasData.findByPk(id)
        if (!data) {
            throw new Error('Bản ghi Canvas Data không tồn tại');
        }
        await data.update({
            show: false
        })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi xóa bản ghi Canvas Data: ' + error.message);
    }
}