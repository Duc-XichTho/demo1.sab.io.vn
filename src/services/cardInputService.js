import { CardInput } from '../postgres/postgres.js';

export const createCardInputService = async (newData) => {
    try {
        const data = await CardInput.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi CardInput: ' + error.message);
    }
};

export const getCardInputByIdService = async (id) => {
    try {
        const data = await CardInput.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi CardInput không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi CardInput: ' + error.message);
    }
};

export const getAllCardInputService = async () => {
    try {
        const dataList = await CardInput.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi CardInput: ' + error.message);
    }
};

export const updateCardInputService = async (newData) => {
    const { id, oldValue, name } = newData;
    try {
        const data = await CardInput.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi CardInput không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi CardInput: ' + error.message);
    }
};

export const deleteCardInputService = async (ids) => {
    try {
        const dataList = await CardInput.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi CardInput nào tồn tại với các ID này');
        }
        await CardInput.update(
            { show: false },
            {
                where: {
                    id: ids,
                },
            }
        );
        return { message: 'Các bản ghi CardInput đã được ẩn thành công' };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi CardInput: ' + error.message);
    }
};

