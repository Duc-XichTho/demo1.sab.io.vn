import {Company} from '../postgres/postgres.js';

export const createCompanyService = async (newData) => {
    try {
        const data = await Company.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi Company: ' + error.message);
    }
};

export const getCompanyByIdService = async (id) => {
    try {
        const data = await Company.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Company không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi Company: ' + error.message);
    }
};

export const getAllCompanyService = async () => {
    try {
        const dataList = await Company.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi Company: ' + error.message);
    }
};

export const updateCompanyService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await Company.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Company không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi Company: ' + error.message);
    }
};

export const deleteCompanyService = async (ids) => {
    try {
        const dataList = await Company.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi Company nào tồn tại với các ID này');
        }
        await Company.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi Company đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi Company: ' + error.message);
    }
};

