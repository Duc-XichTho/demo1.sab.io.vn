import {CashFlowCategory} from '../postgres/postgres.js';

export const createCashFlowCategoryService = async (newData) => {
    try {
        const data = await CashFlowCategory.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi CashFlowCategory: ' + error.message);
    }
};

export const getCashFlowCategoryByIdService = async (id) => {
    try {
        const data = await CashFlowCategory.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi CashFlowCategory không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi CashFlowCategory: ' + error.message);
    }
};

export const getAllCashFlowCategoryService = async () => {
    try {
        const dataList = await CashFlowCategory.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi CashFlowCategory: ' + error.message);
    }
};

export const updateCashFlowCategoryService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await CashFlowCategory.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi CashFlowCategory không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi CashFlowCategory: ' + error.message);
    }
};

export const deleteCashFlowCategoryService = async (ids) => {
    try {
        const dataList = await CashFlowCategory.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi CashFlowCategory nào tồn tại với các ID này');
        }
        await CashFlowCategory.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi CashFlowCategory đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi CashFlowCategory: ' + error.message);
    }
};

