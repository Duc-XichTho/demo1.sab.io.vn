import {ChuSoHuu} from '../postgres/postgres.js';

export const createChuSoHuuService = async (newData) => {
    try {
        const data = await ChuSoHuu.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi ChuSoHuu: ' + error.message);
    }
};

export const getChuSoHuuByIdService = async (id) => {
    try {
        const data = await ChuSoHuu.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi ChuSoHuu không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi ChuSoHuu: ' + error.message);
    }
};

export const getAllChuSoHuuService = async () => {
    try {
        const dataList = await ChuSoHuu.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi ChuSoHuu: ' + error.message);
    }
};

export const updateChuSoHuuService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await ChuSoHuu.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi ChuSoHuu không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi ChuSoHuu: ' + error.message);
    }
};

export const deleteChuSoHuuService = async (ids) => {
    try {
        const dataList = await ChuSoHuu.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi ChuSoHuu nào tồn tại với các ID này');
        }
        await ChuSoHuu.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi ChuSoHuu đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi ChuSoHuu: ' + error.message);
    }
};

