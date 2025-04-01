import {BusinessObjective} from '../postgres/postgres.js';

export const createBusinessObjectiveService = async (newData) => {
    try {
        const data = await BusinessObjective.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi BusinessObjective: ' + error.message);
    }
};

export const getBusinessObjectiveByIdService = async (id) => {
    try {
        const data = await BusinessObjective.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi BusinessObjective không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi BusinessObjective: ' + error.message);
    }
};

export const getAllBusinessObjectiveService = async () => {
    try {
        const dataList = await BusinessObjective.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi BusinessObjective: ' + error.message);
    }
};

export const updateBusinessObjectiveService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await BusinessObjective.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi BusinessObjective không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi BusinessObjective: ' + error.message);
    }
};

export const deleteBusinessObjectiveService = async (ids) => {
    try {
        const dataList = await BusinessObjective.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi BusinessObjective nào tồn tại với các ID này');
        }
        await BusinessObjective.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi BusinessObjective đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi BusinessObjective: ' + error.message);
    }
};

