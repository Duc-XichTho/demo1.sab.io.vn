import {
    CanvasNotepad,
    CanvasContainer
} from "../postgres/postgres.js";

// GET
export const getAllCanvasNotepad = async () => {
    try {
        const notepads = await CanvasNotepad.findAll({
            where: {
                show: true
            }
        });
        const enrichedData = await Promise.all(notepads.map(async (notepad) => {
            const container = await CanvasContainer.findOne({
                where: {
                    id: notepad.canvasContainerId
                },
                attributes: ['title']
            });

            return {
                ...notepad.toJSON(),
                containerTitle: container?.title || null
            };
        }));

        return enrichedData;
    } catch (error) {
        throw new Error('Lỗi khi lấy tất cả bản ghi Canvas Notepad: ' + error.message);
    }
}

export const getCanvasNotepadById = async (id) => {
    try {
        const data = await CanvasNotepad.findOrCreate({
            where: {
                show: true,
                canvasContainerId: id
            }
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi Canvas Notepad: ' + error.message);
    }
}

// CREATE
export const createCanvasNotepad = async (newData) => {
    try {
        const data = await CanvasNotepad.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi Canvas Notepad: ' + error.message);
    }
};

// UPDATE
export const updateCanvasNotepad = async (newData) => {
    const {
        id
    } = newData
    try {
        const data = await CanvasNotepad.findByPk(id)
        if (!data) {
            throw new Error('Bản ghi Canvas Notepad không tồn tại');
        }
        const updatedData = await data.update(newData, {
            where: {
                id: id
            }
        });
        return updatedData;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi Canvas Notepad: ' + error.message);
    }
};

// DELETE
export const deleteCanvasNotepad = async (id) => {
    try {
        const data = await CanvasNotepad.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Canvas Notepad không tồn tại');
        }
        await data.update({
            show: false
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi xóa bản ghi Canvas Notepad: ' + error.message);
    }
};