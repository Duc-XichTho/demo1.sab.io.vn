import { TaiKhoanNganHang } from '../postgres/postgres.js';

export const createTaiKhoanNganHangService = async (newData) => {
    try {
        const data = await TaiKhoanNganHang.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi TaiKhoanNganHang: ' + error.message);
    }
};

export const getTaiKhoanNganHangByIdService = async (id) => {
    try {
        const data = await TaiKhoanNganHang.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi TaiKhoanNganHang không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi TaiKhoanNganHang: ' + error.message);
    }
};

export const getAllTaiKhoanNganHangService = async () => {
    try {
        const dataList = await TaiKhoanNganHang.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi TaiKhoanNganHang: ' + error.message);
    }
};

export const updateTaiKhoanNganHangService = async (newData) => {
    const { id, oldValue, name } = newData;
    try {
        const data = await TaiKhoanNganHang.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi TaiKhoanNganHang không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi TaiKhoanNganHang: ' + error.message);
    }
};

export const deleteTaiKhoanNganHangService = async (ids) => {
    try {
        const dataList = await TaiKhoanNganHang.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi TaiKhoanNganHang nào tồn tại với các ID này');
        }
        await TaiKhoanNganHang.update(
            { show: false },
            {
                where: {
                    id: ids,
                },
            }
        );
        return { message: 'Các bản ghi TaiKhoanNganHang đã được ẩn thành công' };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi TaiKhoanNganHang: ' + error.message);
    }
};

