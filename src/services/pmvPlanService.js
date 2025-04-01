import {PMVPlan} from '../postgres/postgres.js';

export const createPMVPlanService = async (newData) => {
    try {
        const data = await PMVPlan.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi PMVPlan: ' + error.message);
    }
};

export const getPMVPlanByIdService = async (id) => {
    try {
        const data = await PMVPlan.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PMVPlan không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi PMVPlan: ' + error.message);
    }
};

export const getAllPMVPlanService = async () => {
    try {
        const dataList = await PMVPlan.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi PMVPlan: ' + error.message);
    }
};


export const checkDuyetPMVPlanService = async () => {
    try {
        const dataList = await PMVPlan.findAll({
            where: {
                show: true,
                duyet: 'Đã duyệt'
            }
        });
        if (dataList.length) {
            return false
        } else return true;
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi PMVPlan: ' + error.message);
    }
};

export const updatePMVPlanService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await PMVPlan.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PMVPlan không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi PMVPlan: ' + error.message);
    }
};

export const deletePMVPlanService = async (ids) => {
    try {
        const dataList = await PMVPlan.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi PMVPlan nào tồn tại với các ID này');
        }
        await PMVPlan.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi PMVPlan đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi PMVPlan: ' + error.message);
    }
};

