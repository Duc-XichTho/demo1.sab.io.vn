import {ActionLog} from '../postgres/postgres.js';

export const createActionLogService = async (newData) => {
    try {
        const data = await ActionLog.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi ActionLog: ' + error.message);
    }
};

export const getActionLogByIdService = async (id) => {
    try {
        const data = await ActionLog.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi ActionLog không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi ActionLog: ' + error.message);
    }
};

export const getAllActionLogService = async () => {
    try {
        const dataList = await ActionLog.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi ActionLog: ' + error.message);
    }
};

export const updateActionLogService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await ActionLog.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi ActionLog không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi ActionLog: ' + error.message);
    }
};

export const deleteActionLogService = async (ids) => {
    try {
        const dataList = await ActionLog.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi ActionLog nào tồn tại với các ID này');
        }
        await ActionLog.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi ActionLog đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi ActionLog: ' + error.message);
    }
};

