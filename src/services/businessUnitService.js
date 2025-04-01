import {BusinessUnit} from '../postgres/postgres.js';

export const createBusinessUnitService = async (newData) => {
    try {
        const data = await BusinessUnit.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi BusinessUnit: ' + error.message);
    }
};

export const getBusinessUnitByIdService = async (id) => {
    try {
        const data = await BusinessUnit.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi BusinessUnit không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi BusinessUnit: ' + error.message);
    }
};

export const getAllBusinessUnitService = async () => {
    try {
        const dataList = await BusinessUnit.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi BusinessUnit: ' + error.message);
    }
};

export const updateBusinessUnitService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await BusinessUnit.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi BusinessUnit không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi BusinessUnit: ' + error.message);
    }
};

export const deleteBusinessUnitService = async (ids) => {
    try {
        const dataList = await BusinessUnit.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi BusinessUnit nào tồn tại với các ID này');
        }
        await BusinessUnit.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi BusinessUnit đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi BusinessUnit: ' + error.message);
    }
};

