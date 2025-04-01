import { SheetData } from "../postgres/postgres.js";

// GET
export const getAllSheetDataBySheetIdService = async (sheet_id) => {
    try {
        const dataList = await SheetData.findAll({
            where: {
                sheet_id,
                show: true,
            }
        });
        return dataList.sort((a, b) => b.id - a.id);
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi SheetData: ' + error.message);
    }
}

// CREATE
export const createSheetDataService = async (data) => {
    try {
        const newSheetData = await SheetData.create(data);
        return newSheetData;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi SheetData: ' + error.message);
    }
}

// UPDATE
export const updateSheetDataService = async (data) => {
    const { id } = data;
    try {
        const sheet = await SheetData.findByPk(id);
        if (!sheet) {
            throw new Error('Bản ghi SheetData không tồn tại');
        }
        await sheet.update(data)
        return sheet;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi SheetData: ' + error.message);
    }
};

// DELETE
export const deleteSheetDataService = async (ids) => {
    try {
        const dataList = await SheetData.findAll({
            where: {
                id: ids
            }
        });
        if (dataList.length === 0) {
            throw new Error('Không tìm thấy bản ghi SheetData cần xóa');
        }
        await SheetData.update(
            { show: false },
            {
                where: {
                    id: ids
                }
            }
        )
        return { message: 'Xóa bản ghi SheetData thành công' };
    } catch (error) {
        throw new Error('Lỗi khi xóa bản ghi SheetData: ' + error.message);
    }
}; 