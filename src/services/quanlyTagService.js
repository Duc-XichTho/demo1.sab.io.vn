import {QuanLyTag} from '../postgres/postgres.js';

export const createQuanLyTagService = async (newData) => {
    try {
        const data = await QuanLyTag.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi QuanLyTag: ' + error.message);
    }
};

export const getQuanLyTagByIdService = async (id) => {
    try {
        const data = await QuanLyTag.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi QuanLyTag không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi QuanLyTag: ' + error.message);
    }
};

export const getAllQuanLyTagService = async () => {
    try {
        const dataList = await QuanLyTag.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi QuanLyTag: ' + error.message);
    }
};

export const updateQuanLyTagService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await QuanLyTag.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi QuanLyTag không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi QuanLyTag: ' + error.message);
    }
};

export const deleteQuanLyTagService = async (ids) => {
    try {
        const dataList = await QuanLyTag.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi QuanLyTag nào tồn tại với các ID này');
        }
        await QuanLyTag.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi QuanLyTag đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi QuanLyTag: ' + error.message);
    }
};

