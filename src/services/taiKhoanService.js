import {TaiKhoan} from '../postgres/postgres.js';

export const createTaiKhoanService = async (newData) => {
    try {
        const data = await TaiKhoan.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi TaiKhoan: ' + error.message);
    }
};

export const getTaiKhoanByIdService = async (id) => {
    try {
        const data = await TaiKhoan.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi TaiKhoan không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi TaiKhoan: ' + error.message);
    }
};

export const getAllTaiKhoanService = async () => {
    try {
        const dataList = await TaiKhoan.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi TaiKhoan: ' + error.message);
    }
};

export const updateTaiKhoanService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await TaiKhoan.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi TaiKhoan không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi TaiKhoan: ' + error.message);
    }
};

export const deleteTaiKhoanService = async (ids) => {
    try {
        const dataList = await TaiKhoan.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi TaiKhoan nào tồn tại với các ID này');
        }
        await TaiKhoan.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi TaiKhoan đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi TaiKhoan: ' + error.message);
    }
};

