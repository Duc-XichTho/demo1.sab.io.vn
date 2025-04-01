import {Lo} from '../postgres/postgres.js';

export const createLoService = async (newData) => {
    try {
        const data = await Lo.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi Lo: ' + error.message);
    }
};

export const getLoByIdService = async (id) => {
    try {
        const data = await Lo.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Lo không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi Lo: ' + error.message);
    }
};

export const getAllLoService = async () => {
    try {
        const dataList = await Lo.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi Lo: ' + error.message);
    }
};

export const updateLoService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await Lo.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Lo không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi Lo: ' + error.message);
    }
};

export const deleteLoService = async (ids) => {
    try {
        const dataList = await Lo.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi Lo nào tồn tại với các ID này');
        }
        await Lo.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi Lo đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi Lo: ' + error.message);
    }
};

