import { FileNotePad, FileTab, ReportCanvas, TemplateTable } from "../postgres/postgres.js";


; export const getAllFileTabService = async () => {
    try {
        const fileTabs = await FileTab.findAll({
            where: { show: true },
            raw: true,
        });

        const result = await Promise.all(
            fileTabs.map(async (tab) => {
                const notes = await FileNotePad.findAll({
                    where: {
                        tab: tab.key,
                        show: true
                    },
                    raw: true,
                });
                return {
                    ...tab,
                    listFileNote: notes,
                };
            })
        );
        return result;
    } catch (error) {
        throw new Error("Lỗi khi lấy dữ liệu: " + error.message);
    }
};

export const getFileTabByTypeService = async (table, type) => {
    let model = null;
    let noteWhere = {};
    let fileTabs = [];
    try {
        if (type == 'data') {
            fileTabs = await FileTab.findAll({
                where: {
                    show: true,
                    type: type,
                    table: table
                },
                raw: true,
            });
            model = FileNotePad;
            noteWhere = { table: 'Template' };
        } else if (type == 'dashboard') {
            fileTabs = await FileTab.findAll({
                where: {
                    show: true,
                    type: type,
                },
                raw: true,
            });
            model = ReportCanvas;
        } else {
            return fileTabs;
        }

        const result = await Promise.all(
            fileTabs.map(async (tab) => {
                const notes = await model.findAll({
                    where: {
                        tab: tab.key,
                        show: true,
                        ...noteWhere,
                    },
                    order: [['position', 'ASC']],
                    raw: true,
                });

                return {
                    ...tab,
                    listFileNote: notes,
                };
            })
        );
        return result;
    } catch
    (error) {
        throw new Error("Lỗi khi lấy dữ liệu: " + error.message);
    }
}
    ;

export const getAllFileTabTypeDataService = async () => {
    try {
        const fileTabs = await FileTab.findAll({
            where: {
                show: true,
                show2: true,
                type: "data",
            },
            raw: true,
        });

        const result = await Promise.all(
            fileTabs.map(async (tab) => {
                let notes = await FileNotePad.findAll({
                    where: {
                        tab: tab.key,
                        show: true
                    },
                    order: [['position', 'ASC']],
                    raw: true,
                });

                const templateNotes = notes.filter(note => note.table === 'Template');
                const templateIds = templateNotes.map(note => note.id);

                // Lấy danh sách các fileNote còn tồn tại và show = true
                const validFileNotes = new Set(notes.map(note => note.id));

                const templates = await TemplateTable.findAll({
                    where: {
                        fileNote_id: templateIds,
                        show: true
                    },
                    raw: true,
                });

                // Lọc templates chỉ giữ lại những template có fileNote còn tồn tại
                const validTemplates = templates.filter(t => validFileNotes.has(t.fileNote_id));

                // Tạo map để lưu các note ID cần ẩn (liên quan đến ROTATE template)
                const rotateNoteIds = new Set();
                validTemplates.forEach(t => {
                    if (t.table_type === 'ROTATE') {
                        rotateNoteIds.add(t.fileNote_id);
                    }
                });

                // Lọc bỏ các note liên quan đến ROTATE template
                notes = notes.filter(note => !rotateNoteIds.has(note.id));

                const templateMap = {};
                validTemplates.forEach(t => {
                    if (t.isCombine || t.mother_table_id) {
                        templateMap[t.fileNote_id] = true;
                    }
                });

                const templateTableMap = {};
                validTemplates.forEach(t => {
                    if (!templateTableMap[t.fileNote_id]) templateTableMap[t.fileNote_id] = [];
                    templateTableMap[t.fileNote_id].push(t);
                });

                notes = notes.map(note => {
                    let extra = {};
                    if (note.table === 'ChartTemplate' || note.table === 'KPI' || note.table === 'TiptapWithChart') {
                        extra.isNotEdit = true;
                    }
                    if (note.table === 'Template' && templateMap[note.id]) {
                        extra.isNotEdit = true;
                    }
                    // Thêm templateTable nếu là Template
                    if (note.table === 'Template') {
                        extra.templateTable = templateTableMap[note.id] || [];
                        // Thêm table_id từ TemplateTable nếu có
                        const matchingTemplate = validTemplates.find(t => t.fileNote_id === note.id);
                        if (matchingTemplate) {
                            extra.table_id = matchingTemplate.id;
                        }
                        // Tính số lượng bảng xoay dựa trên validTemplates
                        extra.so_luong_bang_xoay = validTemplates.filter(t => t.mother_table_id == matchingTemplate?.id).length;
                    }

                    return { ...note, ...extra };
                });

                return {
                    ...tab,
                    listFileNote: notes,
                };
            })
        );

        return result;
    } catch (error) {
        throw new Error("Lỗi khi lấy dữ liệu: " + error.message);
    }
};



// CREATE
export const createFileTabService = async (data) => {
    try {
        const result = await FileTab.create(data);
        return result;
    } catch (error) {
        throw new Error("Lỗi khi tạo bản ghi File Tab: " + error.message);
    }
};

// UPDATE
export const updateFileTabService = async (data) => {
    try {
        const { id } = data;
        const fileTab = await FileTab.findByPk(id);
        if (!fileTab) {
            throw new Error("Bản ghi file tab không tồn tại");
        }
        await fileTab.update(data);
        return fileTab;
    } catch (error) {
        throw new Error("Lỗi khi cập nhật bản ghi File tab: " + error.message);
    }
};

// DELETE
export const deleteFileTabService = async (id) => {
    try {
        const fileTab = await FileTab.findByPk(id);
        if (!fileTab) {
            throw new Error("Bản ghi file tab không tồn tại");
        }
        await fileTab.update({ show: false });
        return { message: "Xóa file tab thành công" };
    } catch (error) {
        throw new Error("Lỗi khi xóa bản ghi File tab: " + error.message);
    }
};
