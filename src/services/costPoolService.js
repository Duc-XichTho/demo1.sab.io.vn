import {CostPool} from '../postgres/postgres.js';

export const createCostPoolService = async (newData) => {
    try {
        const data = await CostPool.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi CostPool: ' + error.message);
    }
};

export const getCostPoolByIdService = async (id) => {
    try {
        const data = await CostPool.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi CostPool không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi CostPool: ' + error.message);
    }
};

export const getAllCostPoolService = async () => {
    try {
        const dataList = await CostPool.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi CostPool: ' + error.message);
    }
};

export const updateCostPoolService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await CostPool.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi CostPool không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi CostPool: ' + error.message);
    }
};

export const deleteCostPoolService = async (ids) => {
    try {
        const dataList = await CostPool.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi CostPool nào tồn tại với các ID này');
        }
        await CostPool.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi CostPool đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi CostPool: ' + error.message);
    }
};

