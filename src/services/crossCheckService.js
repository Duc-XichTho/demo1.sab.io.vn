import {CrossCheck} from '../postgres/postgres.js';

export const createCrossCheckService = async (newData) => {
    try {
        const data = await CrossCheck.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi CrossCheck: ' + error.message);
    }
};

export const getCrossCheckByIdService = async (id) => {
    try {
        const data = await CrossCheck.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi CrossCheck không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi CrossCheck: ' + error.message);
    }
};

export const getAllCrossCheckService = async () => {
    try {
        const dataList = await CrossCheck.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi CrossCheck: ' + error.message);
    }
};

export const updateCrossCheckService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await CrossCheck.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi CrossCheck không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi CrossCheck: ' + error.message);
    }
};

export const deleteCrossCheckService = async (ids) => {
    try {
        const dataList = await CrossCheck.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi CrossCheck nào tồn tại với các ID này');
        }
        await CrossCheck.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi CrossCheck đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi CrossCheck: ' + error.message);
    }
};

