import {KhaiBaoDauKy} from '../postgres/postgres.js';

export const createKhaiBaoDauKyService = async (newData) => {
    try {
        const data = await KhaiBaoDauKy.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi KhaiBaoDauKy: ' + error.message);
    }
};

export const getKhaiBaoDauKyByIdService = async (id) => {
    try {
        const data = await KhaiBaoDauKy.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi KhaiBaoDauKy không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi KhaiBaoDauKy: ' + error.message);
    }
};

export const getAllKhaiBaoDauKyService = async () => {
    try {
        const dataList = await KhaiBaoDauKy.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi KhaiBaoDauKy: ' + error.message);
    }
};

export const updateKhaiBaoDauKyService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await KhaiBaoDauKy.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi KhaiBaoDauKy không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi KhaiBaoDauKy: ' + error.message);
    }
};

export const deleteKhaiBaoDauKyService = async (ids) => {
    try {
        const dataList = await KhaiBaoDauKy.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi KhaiBaoDauKy nào tồn tại với các ID này');
        }
        await KhaiBaoDauKy.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi KhaiBaoDauKy đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi KhaiBaoDauKy: ' + error.message);
    }
};

