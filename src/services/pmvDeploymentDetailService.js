import { PMVDeploymentDetail } from '../postgres/postgres.js';

export const createPMVDeploymentDetailService = async (newData) => {
    try {
        const data = await PMVDeploymentDetail.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi PMVDeploymentDetail: ' + error.message);
    }
};

export const getPMVDeploymentDetailByIdService = async (id) => {
    try {
        const data = await PMVDeploymentDetail.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PMVDeploymentDetail không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi PMVDeploymentDetail: ' + error.message);
    }
};

export const getPMVDeploymentDetailByDeploymentIdService = async (deploymenId) => {
    try {
        const data = await PMVDeploymentDetail.findAll({
            where: {
                deployment_id: deploymenId,
                show: true
            }
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi PMVDeploymentDetail:' + error.message);
    }
}

export const getAllPMVDeploymentDetailService = async () => {
    try {
        const dataList = await PMVDeploymentDetail.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi PMVDeploymentDetail: ' + error.message);
    }
};

export const updatePMVDeploymentDetailService = async (newData) => {
    const { id, oldValue, name } = newData;
    try {
        const data = await PMVDeploymentDetail.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PMVDeploymentDetail không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi PMVDeploymentDetail: ' + error.message);
    }
};

export const deletePMVDeploymentDetailService = async (ids) => {
    try {
        const dataList = await PMVDeploymentDetail.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi PMVDeploymentDetail nào tồn tại với các ID này');
        }
        await PMVDeploymentDetail.update(
            { show: false },
            {
                where: {
                    id: ids,
                },
            }
        );
        return { message: 'Các bản ghi PMVDeploymentDetail đã được ẩn thành công' };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi PMVDeploymentDetail: ' + error.message);
    }
};

