import { Sheet } from "../postgres/postgres.js";

// GET
export const getSheetByIdService = async (id) => {
    try {
        const data = await Sheet.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Sheet không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi Sheet: ' + error.message);
    }
};

export const getAllSheetService = async () => {
    try {
        const dataList = await Sheet.findAll({
            where: {
                show: true,
            }
        });
        return dataList.sort((a, b) => b.id - a.id);
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi Sheet: ' + error.message);
    }
}

// UPDATE
export const updateSheetService = async (newData) => {
    const { id } = newData;
    try {
        const data = await Sheet.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Sheet không tồn tại');
        }
        await data.update(newData)
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi Sheet: ' + error.message);
    }
};

// CREATE
export const createSheetService = async (newData) => {
    try {
        const data = await Sheet.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi Sheet: ' + error.message);
    }
};

// DELETE
export const deleteSheetService = async (ids) => {
    try {
        const dataList = await Sheet.findAll({
            where: {
                id: ids
            }
        });
        if (dataList.length === 0) {
            throw new Error('Không tìm thấy bản ghi Sheet cần xóa');
        }
        await Sheet.update(
            { show: false },
            {
                where: {
                    id: ids
                }
            }
        )
        return { message: 'Xóa bản ghi Sheet thành công' };
    } catch (error) {
        throw new Error('Lỗi khi xóa bản ghi Sheet: ' + error.message);
    }
};  