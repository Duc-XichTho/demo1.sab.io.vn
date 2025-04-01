import {DataCRM} from '../postgres/postgres.js';

export const createDataCRMService = async (newData) => {
    try {
        const data = await DataCRM.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi DataCRM: ' + error.message);
    }
};

export const getDataCRMByIdService = async (id) => {
    try {
        const data = await DataCRM.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DataCRM không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi DataCRM: ' + error.message);
    }
};

export const getAllDataCRMService = async () => {
    try {
        const dataList = await DataCRM.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi DataCRM: ' + error.message);
    }
};

export const updateDataCRMService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await DataCRM.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DataCRM không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi DataCRM: ' + error.message);
    }
};

export const deleteDataCRMService = async (ids) => {
    try {
        const dataList = await DataCRM.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi DataCRM nào tồn tại với các ID này');
        }
        await DataCRM.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi DataCRM đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi DataCRM: ' + error.message);
    }
};

