import {HopDong} from '../postgres/postgres.js';

export const createHopDongService = async (newData) => {
    try {
        const data = await HopDong.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi HopDong: ' + error.message);
    }
};

export const getHopDongByIdService = async (id) => {
    try {
        const data = await HopDong.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi HopDong không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi HopDong: ' + error.message);
    }
};

export const getAllHopDongService = async () => {
    try {
        const dataList = await HopDong.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi HopDong: ' + error.message);
    }
};

export const updateHopDongService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await HopDong.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi HopDong không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi HopDong: ' + error.message);
    }
};

export const deleteHopDongService = async (ids) => {
    try {
        const dataList = await HopDong.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi HopDong nào tồn tại với các ID này');
        }
        await HopDong.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi HopDong đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi HopDong: ' + error.message);
    }
};

