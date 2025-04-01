import {ResultCrossCheck} from '../postgres/postgres.js';

export const createResultCrossCheckService = async (newData) => {
    try {
        const data = await ResultCrossCheck.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi ResultCrossCheck: ' + error.message);
    }
};

export const getResultCrossCheckByIdService = async (id) => {
    try {
        const data = await ResultCrossCheck.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi ResultCrossCheck không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi ResultCrossCheck: ' + error.message);
    }
};

export const getAllResultCrossCheckService = async () => {
    try {
        const dataList = await ResultCrossCheck.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi ResultCrossCheck: ' + error.message);
    }
};

export const updateResultCrossCheckService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await ResultCrossCheck.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi ResultCrossCheck không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi ResultCrossCheck: ' + error.message);
    }
};

export const deleteResultCrossCheckService = async (ids) => {
    try {
        const dataList = await ResultCrossCheck.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi ResultCrossCheck nào tồn tại với các ID này');
        }
        await ResultCrossCheck.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi ResultCrossCheck đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi ResultCrossCheck: ' + error.message);
    }
};

