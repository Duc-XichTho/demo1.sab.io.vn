import {PBGV3} from "../postgres/postgres.js";

export const createPBGV3Service = async (newData) => {
    try {
        const data = await PBGV3.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi PBGV3: ' + error.message);
    }
};

export const getPBGV3ByIdService = async (id) => {
    try {
        const data = await PBGV3.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PBGV3 không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi PBGV3: ' + error.message);
    }
};

export const getAllPBGV3Service = async () => {
    try {
        const dataList = await PBGV3.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi PBGV3: ' + error.message);
    }
};

export const updatePBGV3Service = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await PBGV3.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PBGV3 không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi PBGV3: ' + error.message);
    }
};

export const deletePBGV3Service = async (ids) => {
    try {
        const dataList = await PBGV3.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi PBGV3 nào tồn tại với các ID này');
        }
        await PBGV3.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi PBGV3 đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi PBGV3: ' + error.message);
    }
};

