import {
    FileNotePad,
    PMVDeployment,
    PMVPlan,
    TemplateColumn,
    TemplateData,
    TemplateTable,
} from "../postgres/postgres.js";
import "sequelize";
import res from "express/lib/response.js";

// GET
export const getAllTemplateTables = async () => {
    try {
        const fileNotePads = await FileNotePad.findAll({where: {show: true}});
        const fileNotePadIds = fileNotePads.map((fileNote) => fileNote.id);
        const result = await TemplateTable.findAll({
            where: {
                fileNote_id: fileNotePadIds,
                show: true,
            },
            order: [["id", "ASC"]],
        });

        return result;
    } catch (e) {
        throw new Error("Lỗi khi lấy danh sách TemplateTable: " + e.message);
    }
};

export const getAllTemplateTablesPlan = async () => {
    try {
        const plans = await PMVPlan.findAll({where: {show: true}});
        const tables = await TemplateTable.findAll({where: {show: true}, order: [["id", "ASC"]]});
        const deployments = await PMVDeployment.findAll({where: {show: true}});

        const result = tables.map((table) => {
            const matchingPlan = plans.find(plan => table.plan_id === plan.id);
            const matchingDeployment = deployments.find(deployment => table.deployment_id === deployment.id);

            if (matchingPlan && matchingDeployment) {
                return {
                    ...table.dataValues,
                    plan: matchingPlan,
                    deployment: matchingDeployment
                };
            }
            return null;
        }).filter(item => item !== null);

        return result;
    } catch (e) {
        throw new Error("Lỗi khi lấy danh sách TemplateTable: " + e.message);
    }
};

export const getTemplateTableByNoteIdService = async (fileNote_id) => {
    try {
        const result = await TemplateTable.findOrCreate({
            where: {
                fileNote_id,
                show: true,
            },
            defaults: {
                fileNote_id,
                show: true,
            },
        });
        return result;
    } catch (error) {
        console.log("Lỗi getTemplateTableByPlanIdService: " + error.message);
    }
}

export const getTemplateTableByPlanIdService = async (planId) => {
    try {
        const data = await TemplateTable.findAll({where: {plan_id: planId, show: true}})
        if (data) {
            return data;
        } else {
            return {};
        }
    } catch (error) {
        console.log("Lỗi getTemplateTableByPlanIdService: " + error.message);
    }
}


export const getTemplateTableByDevIdService = async (planId) => {
    try {
        const data = await TemplateTable.findOne({where: {deployment_id: planId, show: true}})
        if (data) {
            return data;
        } else {
            return {};
        }
    } catch (error) {
        console.log("Lỗi getTemplateTableByPlanIdService: " + error.message);
    }
}

export const getSheetTableByFileNoteId = async (fileNote_id) => {
    try {
        const result = await TemplateTable.findOrCreate({
            where: {
                fileNote_id,
                show: true,
            },
            defaults: {
                fileNote_id,
                show: true,
            },
        });

        return result;
    } catch (e) {
        throw new Error("Lỗi khi lấy bản ghi Dữ liệu template: " + e.message);
    }
};

export const createTemplateTableService = async (data) => {
    try {
        const result = await TemplateTable.create(data);
        return result;
    } catch (e) {
        throw new Error("Lỗi khi lấy bản ghi Dữ liệu template: " + e.message);
    }
};

export const getAllSheetTable = async () => {
    try {
        const result = await TemplateTable.findAll({
            where: {
                show: true,
            },
        });

        return result;
    } catch (e) {
        throw new Error("Lỗi khi lấy bản ghi Dữ liệu template: " + e.message);
    }
};

export const getTemplateColumn = async (id) => {
    try {
        const result = await TemplateColumn.findAll({
            where: {
                tableId: id,
                show: true,
            },
            order: [["id", "ASC"]],
        });
        return result;
    } catch (e) {
        throw new Error("Lỗi khi lấy bản ghi Dữ liệu template: " + e.message);
    }
};

export const getTemplateRow = async (tableId) => {
    try {
        const result = await TemplateData.findAll({
            where: {
                tableId,
                show: true,
            },
            order: [["id", "ASC"]],
        });
        return result;
    } catch (e) {
        throw new Error("Lỗi khi lấy bản ghi Dữ liệu sheet: " + e.message);
    }
};

export const getValidationData = async (id, columnId) => {
    try {
        let validData = new Set();
        const column = await TemplateColumn.findOne({
            where: {id: columnId},
        });
        if (!column) {
            throw new Error("Column không tồn tại");
        }
        const columnName = column.dataValues.columnName;
        const data = await TemplateData.findAll({
            where: {tableId: id},
            order: [["id", "ASC"]],
        });
        if (!column) {
            throw new Error("Dữ liệu không tồn tại");
        }
        data.forEach((item) => {
            validData.add(item.dataValues.data[columnName]);
        });
        const uniqueValidData = Array.from(validData);
        return uniqueValidData;
    } catch (e) {
        throw new Error("Lỗi khi lấy bản ghi dữ liệu template: " + e.message);
    }
};

export const getTableById = async (id) => {
    try {
        const result = await TemplateTable.findOne({
            where: {
                id,
                show: true,
            },
        });
        return result;
    } catch (e) {
        throw new Error("Lỗi khi lấy bản ghi dữ liệu template: " + e.message);
    }
};

// CREATE
export const createTemplateColumn = async (data) => {
    try {
        const result = await TemplateColumn.create(data);
        return result;
    } catch (e) {
        throw new Error("Lỗi khi tạo bản ghi phân tích dữ liệu: " + e.message);
    }
};

export const createTemplateRow = async (tableId, data) => {
    try {
        const result = await TemplateData.create({
            tableId,
            data,
            show: true,
        });
        return result;
    } catch (e) {
        throw new Error("Lỗi khi tạo bản ghi phân tích dữ liệu: " + e.message);
    }
};

// UPDATE
export const updateTemplateTable = async (data) => {
    try {
        const {id} = data;
        const sheet = await TemplateTable.findByPk(id);
        if (!sheet) {
            throw new Error("Bản ghi template table không tồn tại");
        }
        const {dataValues} = await sheet.update(data);
        return dataValues;
    } catch (e) {
        throw new Error("Lỗi khi cập nhật bản ghi template: " + e.message);
    }
};

export const updateTemplateColumn = async (data) => {
    try {
        const {id} = data;
        const sheet = await TemplateColumn.findByPk(id);
        if (!sheet) {
            throw new Error("Bản ghi template column không tồn tại");
        }
        const {dataValues} = await sheet.update(data);
        return dataValues;
    } catch (e) {
        throw new Error("Lỗi khi tạo bản ghi phân tích dữ liệu: " + e.message);
    }
};

export const updateTemplateColumnWidth = async (id, width) => {
    try {
        const template = await TemplateColumn.findByPk(id);
        if (!template) {
            throw new Error("Bản ghi template column không tồn tại");
        }
        const {dataValues} = await template.update({columnWidth: width});
        return dataValues;
    } catch (e) {
        throw new Error("Lỗi khi tạo bản ghi dữ liệu: " + e.message);
    }
};

export const updateColumnIndexes = async (data) => {
    try {
        const {tableId, columns} = data;
        if (!tableId || !Array.isArray(columns)) {
            throw new Error("Invalid input data");
        }
        const updatePromises = columns.map(({id, columnIndex}) =>
            SheetColumn.update(
                {columnIndex},
                {
                    where: {
                        id,
                        tableId,
                    },
                }
            )
        );
        await Promise.all(updatePromises);
        return updatePromises;
    } catch (e) {
        console.error("Error updating column indexes:", error);
        return res.status(500).json({
            error: "Failed to update column indexes",
            message: error.message,
        });
    }
};

export const updateTemplateRow = async (id, data) => {
    try {
        const row = await TemplateData.findByPk(id);
        if (!row) {
            throw new Error("Bản ghi template row không tồn tại");
        }
        const {dataValues} = await row.update({data: data});
        return dataValues;
    } catch (e) {
        throw new Error("Lỗi khi tạo bản ghi phân tích dữ liệu: " + e.message);
    }
};

export const updateColumnSelectOption = async (id, selectOptions) => {
    try {
        const column = await TemplateColumn.findByPk(id);
        if (!column) {
            throw new Error("Bản ghi sheet row không tồn tại");
        }
        const {dataValues} = await column.update({
            selectOptions: selectOptions,
        });
        return dataValues;
    } catch (e) {
        throw new Error("Lỗi khi tạo bản ghi phân tích dữ liệu: " + e.message);
    }
};

export const updateColumnTemplateOption = async (id, sheetOptions) => {
    try {
        const column = await TemplateColumn.findByPk(id);
        if (!column) {
            throw new Error("Bản ghi sheet row không tồn tại");
        }
        const {dataValues} = await column.update({
            selectColumnSheet: sheetOptions,
        });
        return dataValues;
    } catch (e) {
        throw new Error("Lỗi khi tạo bản ghi phân tích dữ liệu: " + e.message);
    }
};

export const updateColumnFormulaOption = async (id, formulaOptions) => {
    try {
        const column = await TemplateColumn.findByPk(id);
        if (!column) {
            throw new Error("Bản ghi sheet row không tồn tại");
        }
        const {dataValues} = await column.update({
            selectFormula: formulaOptions,
        });
        return dataValues;
    } catch (e) {
        throw new Error("Lỗi khi tạo bản ghi phân tích dữ liệu: " + e.message);
    }
};

// DELETE
export const deleteTemplateRow = async (id) => {
    try {
        const row = await TemplateData.findByPk(id);
        if (!row) {
            throw new Error("Bản ghi sheet row không tồn tại");
        }
        const {dataValues} = await row.update({show: false});
        return dataValues;
    } catch (e) {
        throw new Error("Lỗi khi tạo bản ghi phân tích dữ liệu: " + e.message);
    }
};

export const deleteTemplateRowByTableId = async (tableId) => {
    try {
        const data = await TemplateData.findAll({where: {tableId}});
        if (!data) {
            throw new Error("Bản ghi sheet row không tồn tại");
        }
        for (const row of data) {
            await row.update({show: false});
        }
        return data;
    } catch (e) {
        throw new Error("Lỗi khi set show = false: " + e.message);
    }
};

export const deleteTemplateColumn = async (data) => {
    try {
        const {tableId, rowId, columnName} = data;
        console.log(data);
        const column = await TemplateColumn.findByPk(rowId);
        if (!column) {
            throw new Error("Bản ghi sheet row không tồn tại");
        }
        const {dataValues} = await column.update({show: false});
        const rows = await TemplateData.findAll({where: {tableId}});
        for (const row of rows) {
            const updatedData = {...row.dataValues.data};
            delete updatedData[columnName];
            row.set("data", updatedData);
            await row.save();
        }
        return dataValues;
    } catch (e) {
        throw new Error("Lỗi khi tạo bản ghi phân tích dữ liệu: " + e.message);
    }
};
