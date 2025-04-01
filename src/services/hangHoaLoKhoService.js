import {HangHoaLoKho} from '../postgres/postgres.js';

export const createHangHoaLoKhoService = async (newData) => {
    try {
        const data = await HangHoaLoKho.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi HangHoaLoKho: ' + error.message);
    }
};

export const getHangHoaLoKhoByIdService = async (id) => {
    try {
        const data = await HangHoaLoKho.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi HangHoaLoKho không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi HangHoaLoKho: ' + error.message);
    }
};

export const getAllHangHoaLoKhoService = async () => {
    try {
        const dataList = await HangHoaLoKho.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi HangHoaLoKho: ' + error.message);
    }
};

export const updateHangHoaLoKhoService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await HangHoaLoKho.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi HangHoaLoKho không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi HangHoaLoKho: ' + error.message);
    }
};

export const deleteHangHoaLoKhoService = async (ids) => {
    try {
        const dataList = await HangHoaLoKho.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi HangHoaLoKho nào tồn tại với các ID này');
        }
        await HangHoaLoKho.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi HangHoaLoKho đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi HangHoaLoKho: ' + error.message);
    }
};

