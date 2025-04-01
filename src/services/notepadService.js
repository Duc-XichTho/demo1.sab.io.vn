import { NotePad } from "../postgres/postgres.js";

// GET
export const getNotePadByIdService = async (id) => {
    try {
        const data = await NotePad.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi NotePad không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi NotePad: ' + error.message);
    }
};

export const getAllNotepadService = async () => {
    try {
        const dataList = await NotePad.findAll({
            where: {
                show: true,
            }
        });
        return dataList.sort((a, b) => b.id - a.id);
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi NotePad: ' + error.message);
    }
}

// UPDATE
export const updateNotepadService = async (newData) => {
    const { id, oldValue, name } = newData;
    try {
        const data = await NotePad.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi NotePad không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi NotePad: ' + error.message);
    }
};

// CREATE
export const createNotepadService = async (newData) => {
    try {
        const data = await NotePad.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi NotePad: ' + error.message);
    }
};

// DELETE
export const deleteNotepadService = async (ids) => {
    try {
        const dataList = await NotePad.findAll({
            where: {
                id: ids
            }
        });
        if (dataList.length === 0) {
            throw new Error('Không tìm thấy bản ghi NotePad cần xóa');
        }
        await NotePad.update(
            { show: false },
            {
                where: {
                    id: ids
                }
            }
        )
        return { message: 'Xóa bản ghi NotePad thành công' };
    } catch (error) {
        throw new Error('Lỗi khi xóa bản ghi NotePad: ' + error.message);
    }
};  