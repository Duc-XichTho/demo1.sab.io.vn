import { SheetColumn } from "../postgres/postgres.js";

// GET
export const getAllSheetColumnBySheetIdService = async (sheet_id) => {
    try {
        const dataList = await SheetColumn.findAll({
            where: {
                sheet_id,
                show: true,
            }
        });
        return dataList.sort((a, b) => b.id - a.id);
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi SheetColumn: ' + error.message);
    }
}

export const getColumnDataByIdService = async (id) => {
    try {
        const data = await SheetColumn.findByPk(id);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi SheetColumn: ' + error.message);
    }
}

export const getColumnDataByCloneIdService = async (id) => {
    try {
        const data = await SheetColumn.findAll(
            {
                where: {
                    clone_id: id,
                    show: true,
                }
            }
        );
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi SheetColumn: ' + error.message);
    }
}

// CREATE
export const createSheetColumnService = async (data) => {
    try {
        const newSheetColumn = await SheetColumn.create(data);
        return newSheetColumn;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi SheetColumn: ' + error.message);
    }
}

// UPDATE
export const updateSheetColumnService = async (data) => {
    const { id } = data;
    try {
        const sheetColumn = await SheetColumn.findByPk(id);
        if (!sheetColumn) {
            throw new Error('Bản ghi SheetColumn không tồn tại');
        }
        await sheetColumn.update(data)
        return sheetColumn;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi SheetColumn: ' + error.message);
    }
};

// DELETE
export const deleteSheetColumnService = async (ids) => {
    try {
        const dataList = await SheetColumn.findAll({
            where: {
                id: ids
            }
        });
        if (dataList.length === 0) {
            throw new Error('Không tìm thấy bản ghi SheetColumn cần xóa');
        }
        await SheetColumn.update(
            { show: false },
            {
                where: {
                    id: ids
                }
            }
        )
        return { message: 'Xóa bản ghi SheetColumn thành công' };
    } catch (error) {
        throw new Error('Lỗi khi xóa bản ghi SheetColumn: ' + error.message);
    }
}; 