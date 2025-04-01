import {ReportCanvas} from '../postgres/postgres.js';

export const createReportCanvasService = async (newData) => {
    try {
        const data = await ReportCanvas.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi ReportCanvas: ' + error.message);
    }
};

export const getReportCanvasByIdService = async (id) => {
    try {
        const data = await ReportCanvas.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi ReportCanvas không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi ReportCanvas: ' + error.message);
    }
};

export const getAllReportCanvasService = async () => {
    try {
        const dataList = await ReportCanvas.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi ReportCanvas: ' + error.message);
    }
};

export const updateReportCanvasService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await ReportCanvas.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi ReportCanvas không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi ReportCanvas: ' + error.message);
    }
};

export const deleteReportCanvasService = async (ids) => {
    try {
        const dataList = await ReportCanvas.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi ReportCanvas nào tồn tại với các ID này');
        }
        await ReportCanvas.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi ReportCanvas đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi ReportCanvas: ' + error.message);
    }
};

