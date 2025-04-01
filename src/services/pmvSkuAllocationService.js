import { PMVSkuAllocation } from '../postgres/postgres.js';

export const createPMVSkuAllocationService = async (newData) => {
    try {
        
        await Promise.all(newData.map(i =>
            PMVSkuAllocation.destroy({ where: { deploy_detail_id: i.deploy_detail_id } })
        ));

        const results = await PMVSkuAllocation.bulkCreate(newData);

        return results;
    } catch (error) {
        throw new Error('Lỗi khi tạo/cập nhật hàng loạt PMVSkuAllocation: ' + error.message);
    }
};

export const getPMVSkuAllocationByIdService = async (id) => {
    try {
        const data = await PMVSkuAllocation.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PMVSkuAllocation không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi PMVSkuAllocation: ' + error.message);
    }
};

export const getAllPMVSkuAllocationByDeployDetailIdService = async (deployDetailId) => {
    try {
        const data = await PMVSkuAllocation.findAll({
            where: {
                deploy_detail_id: deployDetailId
            }
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi PMVSkuAllocation:'+ error.message);
    } 
}

export const getAllPMVSkuAllocationService = async () => {
    try {
        const dataList = await PMVSkuAllocation.findAll({
            where: {
                show: true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi PMVSkuAllocation: ' + error.message);
    }
};

export const getAllDetailIDService = async () => {
    try {
        const data = await PMVSkuAllocation.findAll({
            attributes: ['deploy_detail_id'],
            group: ['deploy_detail_id'],
            raw: true
        })
        return data
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi PMVSkuAllocation:' + error.message);
    }
}

export const updatePMVSkuAllocationService = async (newData) => {
    const { id, oldValue, name } = newData;
    try {
        const data = await PMVSkuAllocation.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PMVSkuAllocation không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi PMVSkuAllocation: ' + error.message);
    }
};

export const deletePMVSkuAllocationService = async (ids) => {
    try {
        const dataList = await PMVSkuAllocation.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi PMVSkuAllocation nào tồn tại với các ID này');
        }
        await PMVSkuAllocation.update(
            { show: false },
            {
                where: {
                    id: ids,
                },
            }
        );
        return { message: 'Các bản ghi PMVSkuAllocation đã được ẩn thành công' };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi PMVSkuAllocation: ' + error.message);
    }
};

