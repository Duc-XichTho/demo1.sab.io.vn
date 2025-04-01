import {Kmtc} from '../postgres/postgres.js';

export const createKmtcService = async (newData) => {
    try {
        const data = await Kmtc.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi Kmtc: ' + error.message);
    }
};

export const getKmtcByIdService = async (id) => {
    try {
        const data = await Kmtc.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Kmtc không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi Kmtc: ' + error.message);
    }
};

export const getAllKmtcService = async () => {
    try {
        const dataList = await Kmtc.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi Kmtc: ' + error.message);
    }
};

export const updateKmtcService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await Kmtc.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Kmtc không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi Kmtc: ' + error.message);
    }
};

export const deleteKmtcService = async (ids) => {
    try {
        const dataList = await Kmtc.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi Kmtc nào tồn tại với các ID này');
        }
        await Kmtc.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi Kmtc đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi Kmtc: ' + error.message);
    }
};

