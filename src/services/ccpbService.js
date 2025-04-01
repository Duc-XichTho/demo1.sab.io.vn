import {CCPB} from '../postgres/postgres.js';

export const createCCPBService = async (newData) => {
    try {
        const data = await CCPB.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi CCPB: ' + error.message);
    }
};

export const getCCPBByIdService = async (id) => {
    try {
        const data = await CCPB.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi CCPB không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi CCPB: ' + error.message);
    }
};

export const getAllCCPBService = async () => {
    try {
        const dataList = await CCPB.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi CCPB: ' + error.message);
    }
};

export const updateCCPBService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await CCPB.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi CCPB không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi CCPB: ' + error.message);
    }
};

export const deleteCCPBService = async (ids) => {
    try {
        const dataList = await CCPB.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi CCPB nào tồn tại với các ID này');
        }
        await CCPB.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi CCPB đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi CCPB: ' + error.message);
    }
};

