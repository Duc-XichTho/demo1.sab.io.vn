import {HangHoaLo} from '../postgres/postgres.js';

export const createHangHoaLoService = async (newData) => {
    try {
        const data = await HangHoaLo.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi HangHoaLo: ' + error.message);
    }
};

export const getHangHoaLoByIdService = async (id) => {
    try {
        const data = await HangHoaLo.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi HangHoaLo không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi HangHoaLo: ' + error.message);
    }
};

export const getAllHangHoaLoService = async () => {
    try {
        const dataList = await HangHoaLo.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi HangHoaLo: ' + error.message);
    }
};

export const updateHangHoaLoService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await HangHoaLo.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi HangHoaLo không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi HangHoaLo: ' + error.message);
    }
};

export const deleteHangHoaLoService = async (ids) => {
    try {
        const dataList = await HangHoaLo.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi HangHoaLo nào tồn tại với các ID này');
        }
        await HangHoaLo.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi HangHoaLo đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi HangHoaLo: ' + error.message);
    }
};

