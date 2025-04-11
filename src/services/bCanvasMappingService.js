import {BCanvasMapping} from '../postgres/postgres.js';

export const createBCanvasMappingService = async (newData) => {
    try {
        const data = await BCanvasMapping.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi BCanvasMapping: ' + error.message);
    }
};

export const getBCanvasMappingByIdService = async (id) => {
    try {
        const data = await BCanvasMapping.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi BCanvasMapping không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi BCanvasMapping: ' + error.message);
    }
};

export const getAllBCanvasMappingService = async () => {
    try {
        const dataList = await BCanvasMapping.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi BCanvasMapping: ' + error.message);
    }
};

export const updateBCanvasMappingService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await BCanvasMapping.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi BCanvasMapping không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi BCanvasMapping: ' + error.message);
    }
};

export const deleteBCanvasMappingService = async (ids) => {
    try {
        const dataList = await BCanvasMapping.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi BCanvasMapping nào tồn tại với các ID này');
        }
        await BCanvasMapping.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi BCanvasMapping đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi BCanvasMapping: ' + error.message);
    }
};

