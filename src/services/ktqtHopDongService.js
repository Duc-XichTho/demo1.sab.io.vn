import {KtqtHopDong} from '../postgres/postgres.js';

export const createKtqtHopDongService = async (newData) => {
    try {
        const data = await KtqtHopDong.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi KtqtHopDong: ' + error.message);
    }
};

export const getKtqtHopDongByIdService = async (id) => {
    try {
        const data = await KtqtHopDong.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi KtqtHopDong không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi KtqtHopDong: ' + error.message);
    }
};

export const getAllKtqtHopDongService = async () => {
    try {
        const dataList = await KtqtHopDong.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi KtqtHopDong: ' + error.message);
    }
};

export const updateKtqtHopDongService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await KtqtHopDong.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi KtqtHopDong không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi KtqtHopDong: ' + error.message);
    }
};

export const deleteKtqtHopDongService = async (ids) => {
    try {
        const dataList = await KtqtHopDong.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi KtqtHopDong nào tồn tại với các ID này');
        }
        await KtqtHopDong.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi KtqtHopDong đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi KtqtHopDong: ' + error.message);
    }
};

