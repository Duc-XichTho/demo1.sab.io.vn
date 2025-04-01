import {DetailLenhSanXuat} from '../postgres/postgres.js';

export const createDetailLenhSanXuatService = async (newData) => {
    try {
        const data = await DetailLenhSanXuat.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi DetailLenhSanXuat: ' + error.message);
    }
};

export const getDetailLenhSanXuatByIdService = async (id) => {
    try {
        const data = await DetailLenhSanXuat.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DetailLenhSanXuat không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi DetailLenhSanXuat: ' + error.message);
    }
};

export const getAllDetailLenhSanXuatService = async () => {
    try {
        const dataList = await DetailLenhSanXuat.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi DetailLenhSanXuat: ' + error.message);
    }
};

export const updateDetailLenhSanXuatService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await DetailLenhSanXuat.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DetailLenhSanXuat không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi DetailLenhSanXuat: ' + error.message);
    }
};

export const deleteDetailLenhSanXuatService = async (ids) => {
    try {
        const dataList = await DetailLenhSanXuat.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi DetailLenhSanXuat nào tồn tại với các ID này');
        }
        await DetailLenhSanXuat.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi DetailLenhSanXuat đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi DetailLenhSanXuat: ' + error.message);
    }
};

