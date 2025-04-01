import {Thue} from '../postgres/postgres.js';

export const createThueService = async (newData) => {
    try {
        const data = await Thue.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi Thue: ' + error.message);
    }
};

export const getThueByIdService = async (id) => {
    try {
        const data = await Thue.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Thue không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi Thue: ' + error.message);
    }
};

export const getAllThueService = async () => {
    try {
        const dataList = await Thue.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi Thue: ' + error.message);
    }
};

export const updateThueService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await Thue.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Thue không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi Thue: ' + error.message);
    }
};

export const deleteThueService = async (ids) => {
    try {
        const dataList = await Thue.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi Thue nào tồn tại với các ID này');
        }
        await Thue.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi Thue đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi Thue: ' + error.message);
    }
};

