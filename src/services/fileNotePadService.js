import {
    FileNotePad, TemplateTable
} from '../postgres/postgres.js';

export const createFileNotePadService = async (newData) => {
    try {
        const data = await FileNotePad.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi FileNotePad: ' + error.message);
    }
};
export const getFileNotePadByIdService = async (id) => {
    try {
        const data = await FileNotePad.findByPk(id, { raw: true });
        if (!data || data.show !== true) {
            throw new Error('Bản ghi FileNotePad không tồn tại hoặc không được hiển thị');
        }
        if (data.table === 'ChartTemplate' || data.table === 'KPI') {
            data.isNotEdit = true;
        }

        if (data.table === 'Template') {
            const template = await TemplateTable.findOne({
                where: {
                    fileNote_id: data.id,
                    show: true,
                },
                raw: true,
            });
            if (template && (template.isCombine || template.mother_table_id)) {
                data.isNotEdit = true;
            }
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi FileNotePad: ' + error.message);
    }
};


export const getFileNotePadService = async () => {
    try {
        const dataList = await FileNotePad.findAll();
        return dataList.sort((a, b) => a.id - b.id);
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi FileNotePad: ' + error.message);
    }
};

export const updateFileNotePadService = async (newData) => {
    const {
        id,
        oldValue,
        code
    } = newData;
    try {
        const data = await FileNotePad.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi FileNotePad không tồn tại');
        }
        await data.update(newData)
        //     .then(() => {
        //     fetchAndUpdateRecords(oldValue, code)
        // });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi FileNotePad: ' + error.message);
    }
};

export const deleteFileNotePadService = async (id) => {
    try {
        const dataList = await FileNotePad.findByPk(id);
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi FileNotePad nào tồn tại với các ID này');
        }
        await dataList.update({
            show: false
        });
        await TemplateTable.update(
            { show: false },
            { where: { fileNote_id: id } }
        );
        return {
            message: 'Các bản ghi FileNotePad đã được ẩn thành công'
        };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi FileNotePad: ' + error.message);
    }
};