import {Metrics} from '../postgres/postgres.js';

export const createMetricsService = async (newData) => {
    try {
        const data = await Metrics.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi Metrics: ' + error.message);
    }
};

export const getMetricsByIdService = async (id) => {
    try {
        const data = await Metrics.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Metrics không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi Metrics: ' + error.message);
    }
};

export const getAllMetricsService = async () => {
    try {
        const dataList = await Metrics.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi Metrics: ' + error.message);
    }
};

export const updateMetricsService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await Metrics.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Metrics không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi Metrics: ' + error.message);
    }
};

export const deleteMetricsService = async (ids) => {
    try {
        const dataList = await Metrics.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi Metrics nào tồn tại với các ID này');
        }
        await Metrics.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi Metrics đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi Metrics: ' + error.message);
    }
};

