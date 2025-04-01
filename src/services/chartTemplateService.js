import {ChartTemplate} from '../postgres/postgres.js';

export const createChartTemplateService = async (newData) => {
    try {
        const data = await ChartTemplate.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi ChartTemplate: ' + error.message);
    }
};

export const getChartTemplateByIdService = async (id) => {
    try {
        const data = await ChartTemplate.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi ChartTemplate không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi ChartTemplate: ' + error.message);
    }
};

export const getAllChartTemplateService = async () => {
    try {
        const dataList = await ChartTemplate.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi ChartTemplate: ' + error.message);
    }
};

export const updateChartTemplateService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await ChartTemplate.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi ChartTemplate không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi ChartTemplate: ' + error.message);
    }
};

export const deleteChartTemplateService = async (ids) => {
    try {
        const dataList = await ChartTemplate.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi ChartTemplate nào tồn tại với các ID này');
        }
        await ChartTemplate.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi ChartTemplate đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi ChartTemplate: ' + error.message);
    }
};

