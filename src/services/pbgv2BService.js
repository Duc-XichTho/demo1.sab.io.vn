import {PBGV2B} from "../postgres/postgres.js";

export const createPBGV2BService = async (newData) => {
    try {
        const data = await PBGV2B.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi PBGV2B: ' + error.message);
    }
};

export const getPBGV2BByIdService = async (id) => {
    try {
        const data = await PBGV2B.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PBGV2B không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi PBGV2B: ' + error.message);
    }
};

export const getAllPBGV2BService = async () => {
    try {
        const dataList = await PBGV2B.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi PBGV2B: ' + error.message);
    }
};

export const updatePBGV2BService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await PBGV2B.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PBGV2B không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi PBGV2B: ' + error.message);
    }
};

export const deletePBGV2BService = async (ids) => {
    try {
        const dataList = await PBGV2B.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi PBGV2B nào tồn tại với các ID này');
        }
        await PBGV2B.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi PBGV2B đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi PBGV2B: ' + error.message);
    }
};

