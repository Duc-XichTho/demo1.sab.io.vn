import {PMVDeployment, PMVPlan} from '../postgres/postgres.js';
import moment from 'moment';

export const createPMVDeploymentService = async (newData) => {
    try {
        const data = await PMVDeployment.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi PMVDeployment: ' + error.message);
    }
};

export const getPMVDeploymentByIdService = async (id) => {
    try {
        const data = await PMVDeployment.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PMVDeployment không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi PMVDeployment: ' + error.message);
    }
}

export const getPMVDeploymentByPlanIdService = async (id) => {
    try {
        const data = await PMVDeployment.findAll({
            where: {plan_id: id}
        });

        if (!data || data.length === 0) {
            return [];
        }
        return data;

    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi PMVDeployment: ' + error.message);
    }
};


const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
};


export const generateDatesByPeriodService = async (date_from, date_to, otherData) => {
    const {typeConfig, values} = otherData;

    if (!typeConfig  || !values) {
        throw new Error('Thiếu thông tin typeConfig hoặc values trong config_period');
    }

    const start = parseDate(date_from);
    const end = parseDate(date_to);
    const result = [];

    const weekMap = {
        'CN': 0,
        'T2': 1,
        'T3': 2,
        'T4': 3,
        'T5': 4,
        'T6': 5,
        'T7': 6
    };
    for (let current = new Date(start); current <= end; current.setDate(current.getDate() + 1)) {
        const dateStr = current.toLocaleDateString('vi-VN');

        if (typeConfig == 'week') {
            const dayOfWeek = current.getDay();
            const dayKey = Object.keys(weekMap).find(key => weekMap[key] === dayOfWeek);
            const value = values[dayKey] || 0;
            result.push({date: dateStr, value});
        }

        if (typeConfig == 'year') {
            const month = current.getMonth() + 1;
            const monthKey = `T${month}`;
            const value = values[monthKey] || 0;
            result.push({date: dateStr, value});
        }
        if (typeConfig == 'month') {
            const dayOfMonth = current.getDate();

            let weekKey;
            if (dayOfMonth <= 7) {
                weekKey = 'T1';
            } else if (dayOfMonth <= 14) {
                weekKey = 'T2';
            } else if (dayOfMonth <= 21) {
                weekKey = 'T3';
            } else {
                weekKey = 'T4'; // Tuần 4 bao gồm ngày từ 22 đến hết tháng
            }

            const value = values[weekKey] || 0;
            result.push({ date: dateStr, value });
        }
    }
    return result;
};


export const getAllPMVDeploymentService = async () => {
    try {
        const dataList = await PMVDeployment.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi PMVDeployment: ' + error.message);
    }
};

export const updatePMVDeploymentService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await PMVDeployment.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PMVDeployment không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi PMVDeployment: ' + error.message);
    }
};

export const deletePMVDeploymentService = async (ids) => {
    try {
        const dataList = await PMVDeployment.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi PMVDeployment nào tồn tại với các ID này');
        }
        await PMVDeployment.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi PMVDeployment đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi PMVDeployment: ' + error.message);
    }
};

