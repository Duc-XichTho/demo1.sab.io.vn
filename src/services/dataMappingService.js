import {DataMapping} from '../postgres/postgres.js';

export const createDataMappingService = async (newData) => {
    try {
        const data = await DataMapping.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi DataMapping: ' + error.message);
    }
};

export const getDataMappingByIdService = async (id) => {
    try {
        const data = await DataMapping.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DataMapping không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi DataMapping: ' + error.message);
    }
};

export const getAllDataMappingService = async () => {
    try {
        const dataList = await DataMapping.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi DataMapping: ' + error.message);
    }
};

export const updateDataMappingService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await DataMapping.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DataMapping không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi DataMapping: ' + error.message);
    }
};

export const deleteDataMappingService = async (ids) => {
    try {
        const dataList = await DataMapping.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi DataMapping nào tồn tại với các ID này');
        }
        await DataMapping.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi DataMapping đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi DataMapping: ' + error.message);
    }
};

