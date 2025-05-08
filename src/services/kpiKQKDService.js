import {KpiKQKD} from '../postgres/postgres.js';

export const createKpiKQKDService = async (newData) => {
    try {
        const data = await KpiKQKD.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi KpiKQKD: ' + error.message);
    }
};

export const getKpiKQKDByIdService = async (id) => {
    try {
        const data = await KpiKQKD.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi KpiKQKD không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi KpiKQKD: ' + error.message);
    }
};

export const getKpiKQKDByIdKHKDService = async (id) => {
    try {
        const data = await KpiKQKD.findAll({
            where : {
                id_khkd_tong_hop : id,
                show: true
            },
            order: [['id', 'DESC']]
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi KpiKQKD: ' + error.message);
    }
};

export const getAllKpiKQKDService = async () => {
    try {
        const dataList = await KpiKQKD.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi KpiKQKD: ' + error.message);
    }
};

export const updateKpiKQKDService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await KpiKQKD.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi KpiKQKD không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi KpiKQKD: ' + error.message);
    }
};

export const deleteKpiKQKDService = async (ids) => {
    try {
        const dataList = await KpiKQKD.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi KpiKQKD nào tồn tại với các ID này');
        }
        await KpiKQKD.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi KpiKQKD đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi KpiKQKD: ' + error.message);
    }
};

