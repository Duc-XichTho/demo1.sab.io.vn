import { DinhKhoan } from "../postgres/postgres.js";

// GET
export const getDinhKhoanByIdService = async (id) => {
    try {
        const data = await DinhKhoan.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DinhKhoan không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi DinhKhoan: ' + error.message);
    }
};

export const getAllDinhKhoanService = async () => {
    try {
        const dataList = await DinhKhoan.findAll({
            where: {
                show: true,
            }
        });
        return dataList.sort((a, b) => b.id - a.id);
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi DinhKhoan: ' + error.message);
    }
}

// UPDATE
export const updateDinhKhoanService = async (newData) => {
    const { id, oldValue, name } = newData;
    try {
        const data = await DinhKhoan.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DinhKhoan không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi DinhKhoan: ' + error.message);
    }
};

// CREATE
export const createDinhKhoanService = async (newData) => {
    try {
        const data = await DinhKhoan.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi DinhKhoan: ' + error.message);
    }
};

// DELETE
export const deleteDinhKhoanService = async (ids) => {
    try {
        const dataList = await DinhKhoan.findAll({
            where: {
                id: ids
            }
        });
        if (dataList.length === 0) {
            throw new Error('Không tìm thấy bản ghi DinhKhoan cần xóa');
        }
        await DinhKhoan.update(
            { show: false },
            {
                where: {
                    id: ids
                }
            }
        )
        return { message: 'Xóa bản ghi DinhKhoan thành công' };
    } catch (error) {
        throw new Error('Lỗi khi xóa bản ghi DinhKhoan: ' + error.message);
    }
};  