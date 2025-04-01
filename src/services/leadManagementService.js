import {LeadManagement} from '../postgres/postgres.js';

export const createLeadManagementService = async (newData) => {
    try {
        const data = await LeadManagement.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi LeadManagement: ' + error.message);
    }
};

export const getLeadManagementByIdService = async (id) => {
    try {
        const data = await LeadManagement.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi LeadManagement không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi LeadManagement: ' + error.message);
    }
};

export const getAllLeadManagementService = async () => {
    try {
        const dataList = await LeadManagement.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi LeadManagement: ' + error.message);
    }
};

export const updateLeadManagementService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await LeadManagement.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi LeadManagement không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi LeadManagement: ' + error.message);
    }
};

export const deleteLeadManagementService = async (ids) => {
    try {
        const dataList = await LeadManagement.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi LeadManagement nào tồn tại với các ID này');
        }
        await LeadManagement.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi LeadManagement đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi LeadManagement: ' + error.message);
    }
};

