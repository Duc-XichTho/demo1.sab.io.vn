import {MappingCard} from '../postgres/postgres.js';

export const createMappingCardService = async (newData) => {
    try {
        const data = await MappingCard.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi MappingCard: ' + error.message);
    }
};

export const getMappingCardByIdService = async (id) => {
    try {
        const data = await MappingCard.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi MappingCard không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi MappingCard: ' + error.message);
    }
};

export const getAllMappingCardService = async () => {
    try {
        const dataList = await MappingCard.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi MappingCard: ' + error.message);
    }
};

export const updateMappingCardService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await MappingCard.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi MappingCard không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi MappingCard: ' + error.message);
    }
};

export const deleteMappingCardService = async (ids) => {
    try {
        const dataList = await MappingCard.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi MappingCard nào tồn tại với các ID này');
        }
        await MappingCard.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi MappingCard đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi MappingCard: ' + error.message);
    }
};

