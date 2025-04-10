import { TemplateData } from "../postgres/postgres.js";
import { cacheQueue } from "./redis/cacheQueue.js";

const cacheKey =(tableId) => `${process.env.FOLDER_NAME_BUCKET_BITFLY}_template_data:table_id:${tableId}`;
export const getTemplateDataByTableIdService = async (tableId) => {


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

    cacheQueue.set(cacheKey(tableId), data);

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

    const cacheKeyById = `${process.env.FOLDER_NAME_BUCKET_BITFLY}_template_data:id:${data.id}`;

    cacheQueue.set(cacheKeyById, data);
    cacheQueue.delete(cacheKey(tableId));

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


    cacheQueue.delete(cacheKey(tableId));

    return data;
  } catch (error) {
    console.log('Error createBathTemplateDataService', error.message);
  }
}

export const updateTemplateDataService = async (id, dataUpdate) => {
  try {
    const row = await TemplateData.findByPk(id);
    if (!row) {
      throw new Error("Bản ghi template_data không tồn tại");
    }
    const updatedRow = await row.update({ data: dataUpdate });


    cacheQueue.delete(cacheKey(row.tableId));

    return updatedRow.dataValues;
  } catch (error) {
    console.log('Error updateTemplateDataService', error.message);
  }
};

export const updateBatchTemplateDataService = async (tableId, dataUpdate) => {
  try {
    if (!Array.isArray(dataUpdate)) {
      throw new Error('dataUpdate must be an array');
    }

    const updates = await Promise.all(
      dataUpdate.map(async ({ id, data }) => {
        const row = await TemplateData.findOne({
          where: {
            id,
            tableId,
            show: true
          }
        });
        
        if (!row) {
          throw new Error(`Bản ghi template_data với id ${id} không tồn tại`);
        }
        
        return row.update({ data });
      })
    );

    cacheQueue.delete(cacheKey(tableId));

    return updates.map(row => row.dataValues);
  } catch (error) {
    console.log('Error updateBatchTemplateDataService', error.message);
    throw error;
  }
};

export const deleteTemplateDataByIdService = async (id) => {
  const cacheKeyById = `${process.env.FOLDER_NAME_BUCKET_BITFLY}_template_data:id:${id}`;

  try {
    const row = await TemplateData.findByPk(id);
    if (!row) {
      throw new Error("Bản ghi sheet row không tồn tại");
    }
    const updatedRow = await row.update({ show: false });


    cacheQueue.delete(cacheKeyById);
    cacheQueue.delete(cacheKey(row.tableId));

    return updatedRow.dataValues;
  } catch (error) {
    console.log('Error deleteTemplateDataByIdService', error.message);
  }
};

export const deleteTemplateRowByTableIdService = async (tableId) => {

  try {
    const [updatedCount] = await TemplateData.update(
      { show: false },
      { where: { tableId } }
    );

    if (updatedCount === 0) {
      throw new Error("Không có bản ghi nào được cập nhật");
    }

    const updatedRows = await TemplateData.findAll({ where: { tableId } });

    cacheQueue.delete(cacheKey(tableId));

    return updatedRows;
  } catch (error) {
    console.log('Error deleteTemplateRowByTableIdService', error.message)
  }
};
