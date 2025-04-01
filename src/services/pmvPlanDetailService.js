import {PMVPlanDetail} from '../postgres/postgres.js';

export const createPMVPlanDetailService = async (newData) => {
    try {
        const data = await PMVPlanDetail.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi PMVPlanDetail: ' + error.message);
    }
};

export const getPMVPlanDetailByIdService = async (id) => {
    try {
        const data = await PMVPlanDetail.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PMVPlanDetail không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi PMVPlanDetail: ' + error.message);
    }
};

export const getAllPMVPlanDetailService = async () => {
    try {
        const dataList = await PMVPlanDetail.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi PMVPlanDetail: ' + error.message);
    }
};

export const updatePMVPlanDetailService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await PMVPlanDetail.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PMVPlanDetail không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi PMVPlanDetail: ' + error.message);
    }
};

export const deletePMVPlanDetailService = async (ids) => {
    try {
        const dataList = await PMVPlanDetail.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi PMVPlanDetail nào tồn tại với các ID này');
        }
        await PMVPlanDetail.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi PMVPlanDetail đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi PMVPlanDetail: ' + error.message);
    }
};

