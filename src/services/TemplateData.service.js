import { TemplateData } from "../postgres/postgres.js";
import { cacheQueue } from "./redis/cacheQueue.js";

export const getTemplateDataByTableIdService = async (tableId) => {
  const cacheKey = `template_data:table_id:${tableId}`;

  try {
    const cachedData = await cacheQueue.get(cacheKey);
    if (cachedData) {
      return cachedData;
    }

    const data = await TemplateData.findAll({
      where: {
        tableId,
        show: true,
      },
      order: [["id", "ASC"]],
    });

    cacheQueue.set(cacheKey, data);

    return data;
  } catch (error) {
    console.log('Error getTemplateDataByTableIdService', error.message)
  }
};

export const getTemplateDataByIdService = async (id) => {
  try {
    const data = await TemplateData.findOne({
      where: {
        id,
        show: true,
      },
      order: [["id", "ASC"]],
    });
    return data;
  } catch (error) {
    console.log('Error getTemplateDataByIdService', error.message)
  }
};

export const createTemplateDataService = async (tableId, newData) => {
  try {
    const data = await TemplateData.create({
      tableId,
      newData,
      show: true,
    });

    const cacheKeyById = `template_data:id:${data.id}`;
    const cacheKeyByTable = `template_data:table_id:${tableId}`;

    cacheQueue.set(cacheKeyById, data);
    cacheQueue.delete(cacheKeyByTable);

    return data;
  } catch (error) {
    console.log('Error createTemplateDataService', error.message);
  }
};

export const createBatchTemplateDataService = async (tableId, newData) => {

  try {
    const data = await TemplateData.bulkCreate(newData.map((item) => ({
      tableId,
      data: item,
    })));

    const cacheKeyByTable = `template_data:table_id:${tableId}`;

    cacheQueue.delete(cacheKeyByTable);

    return data;
  } catch (error) {
    console.log('Error createBathTemplateDataService', error.message);
  }
}

export const updateTemplateDataService = async (id, dataUpdate) => {
  const cacheKeyById = `template_data:id:${id}`;

  try {
    const row = await TemplateData.findByPk(id);
    if (!row) {
      throw new Error("Bản ghi template_data không tồn tại");
    }
    const updatedRow = await row.update({ data: dataUpdate });

    const cacheKeyByTable = `template_data:table_id:${row.tableId}`;

    cacheQueue.set(cacheKeyById, updatedRow);
    cacheQueue.delete(cacheKeyByTable);

    return updatedRow.dataValues;
  } catch (error) {
    console.log('Error updateTemplateDataService', error.message);
  }
};

export const deleteTemplateDataByIdService = async (id) => {
  const cacheKeyById = `template_data:id:${id}`;

  try {
    const row = await TemplateData.findByPk(id);
    if (!row) {
      throw new Error("Bản ghi sheet row không tồn tại");
    }
    const updatedRow = await row.update({ show: false });

    const cacheKeyByTable = `template_data:table_id:${row.tableId}`;

    cacheQueue.delete(cacheKeyById);
    cacheQueue.delete(cacheKeyByTable);

    return updatedRow.dataValues;
  } catch (error) {
    console.log('Error deleteTemplateDataByIdService', error.message);
  }
};

export const deleteTemplateRowByTableIdService = async (tableId) => {
  const cacheKeyByTable = `template_data:table_id:${tableId}`;

  try {
    const [updatedCount] = await TemplateData.update(
      { show: false },
      { where: { tableId } }
    );

    if (updatedCount === 0) {
      throw new Error("Không có bản ghi nào được cập nhật");
    }

    const updatedRows = await TemplateData.findAll({ where: { tableId } });

    cacheQueue.delete(cacheKeyByTable);

    return updatedRows;
  } catch (error) {
    console.log('Error deleteTemplateRowByTableIdService', error.message)
  }
};
