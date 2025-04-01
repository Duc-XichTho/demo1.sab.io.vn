import {Kmf} from '../postgres/postgres.js';

export const createKmfService = async (newData) => {
    try {
        const data = await Kmf.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi Kmf: ' + error.message);
    }
};

export const getKmfByIdService = async (id) => {
    try {
        const data = await Kmf.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Kmf không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi Kmf: ' + error.message);
    }
};

export const getAllKmfService = async () => {
    try {
        const dataList = await Kmf.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi Kmf: ' + error.message);
    }
};

export const updateKmfService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await Kmf.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Kmf không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi Kmf: ' + error.message);
    }
};

export const deleteKmfService = async (ids) => {
    try {
        const dataList = await Kmf.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi Kmf nào tồn tại với các ID này');
        }
        await Kmf.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi Kmf đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi Kmf: ' + error.message);
    }
};

