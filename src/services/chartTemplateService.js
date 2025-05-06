import {ChartTemplate, FileNotePad} from '../postgres/postgres.js';

export const createChartTemplateService = async (newData) => {
    try {
        const data = await ChartTemplate.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi ChartTemplate: ' + error.message);
    }
};

export const getChartTemplateByIdService = async (id) => {
    try {
        const data = await ChartTemplate.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi ChartTemplate không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi ChartTemplate: ' + error.message);
    }
};

export const getAllChartTemplateService = async () => {
    try {
        const dataList = await ChartTemplate.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi ChartTemplate: ' + error.message);
    }
};

export const updateChartTemplateService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await ChartTemplate.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi ChartTemplate không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi ChartTemplate: ' + error.message);
    }
};

export const deleteChartTemplateService = async (ids) => {
    try {
        // Tìm các fileNote đang sử dụng ChartTemplate này
        const fileNotes = await FileNotePad.findAll({
            where: {
                show: true,
                table: 'ChartTemplate',
                type: ids  // type của fileNote chứa id của ChartTemplate
            },
        });

        const dataList = await ChartTemplate.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi ChartTemplate nào tồn tại với các ID này');
        }

        // Thực hiện xóa (ẩn) các fileNote liên quan
        if (fileNotes.length > 0) {
            await FileNotePad.update(
                { show: false },
                {
                    where: {
                        id: fileNotes.map(note => note.id)
                    }
                }
            );
        }

        // Thực hiện xóa (ẩn) các ChartTemplate
        await ChartTemplate.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );

        return {
            message: `Các bản ghi ChartTemplate đã được ẩn thành công. ${fileNotes.length} FileNote liên quan cũng đã được ẩn.`
        };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi ChartTemplate: ' + error.message);
    }
};

