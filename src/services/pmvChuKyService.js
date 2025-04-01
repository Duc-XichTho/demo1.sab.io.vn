import {PMVChuKy} from '../postgres/postgres.js';

export const createPMVChuKyService = async (newData) => {
    try {
        const data = await PMVChuKy.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi PMVChuKy: ' + error.message);
    }
};

export const getPMVChuKyByIdService = async (id) => {
    try {
        const data = await PMVChuKy.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PMVChuKy không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi PMVChuKy: ' + error.message);
    }
};

export const getAllPMVChuKyService = async () => {
    try {
        const dataList = await PMVChuKy.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi PMVChuKy: ' + error.message);
    }
};

export const updatePMVChuKyService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await PMVChuKy.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PMVChuKy không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi PMVChuKy: ' + error.message);
    }
};

export const deletePMVChuKyService = async (ids) => {
    try {
        const dataList = await PMVChuKy.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi PMVChuKy nào tồn tại với các ID này');
        }
        await PMVChuKy.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi PMVChuKy đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi PMVChuKy: ' + error.message);
    }
};

