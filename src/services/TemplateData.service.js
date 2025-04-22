import {TemplateColumn, TemplateData} from "../postgres/postgres.js";
import { cacheQueue } from "./redis/cacheQueue.js";
import dotenv from "dotenv";
dotenv.config();

const cacheKey =(tableId) => `${process.env.FOLDER_NAME_BUCKET_BITFLY}_template_data:table_id:${tableId}`;
export const getTemplateDataByTableIdService = async (tableId) => {


  try {
    const cachedData = await cacheQueue.get(cacheKey(tableId));
    if (cachedData) {
      return cachedData;
    }

    const data = await TemplateData.findAll({
      where: {
        tableId,
        show: true,
      },
      order: [["id", "DESC"]],
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

export const createTemplateDataService = async (tableId, data , id_DataOriginal) => {
  try {
    const newData = await TemplateData.create({
      tableId,
      data,
      id_DataOriginal,
      show: true,
    });

    const cacheKeyById = `${process.env.FOLDER_NAME_BUCKET_BITFLY}_template_data:id:${newData.id}`;

    cacheQueue.set(cacheKeyById, newData);
    cacheQueue.delete(cacheKey(tableId));

    return newData
  } catch (error) {
    console.log('Error createTemplateDataService', error.message);
  }
};

export const createBatchTemplateDataService = async (tableId, newData, id_DataOriginal) => {

  try {
    const data = await TemplateData.bulkCreate(newData.map((item) => ({
      tableId,
      data: item,
      id_DataOriginal
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
  const t = await TemplateData.sequelize.transaction(); // bắt đầu transaction

  try {
    if (!Array.isArray(dataUpdate)) {
      throw new Error('dataUpdate must be an array');
    }

    const updates = [];

    for (const { id, data } of dataUpdate) {
      const row = await TemplateData.findOne({
        where: { id, tableId, show: true },
        transaction: t
      });

      if (!row) {
        throw new Error(`Bản ghi template_data với id ${id} không tồn tại`);
      }

      const updated = await row.update({ data }, { transaction: t });
      updates.push(updated);
    }

    await t.commit(); // commit transaction
    cacheQueue.delete(cacheKey(tableId));
    return updates.map(row => row.dataValues);
  } catch (error) {
    await t.rollback(); // rollback nếu lỗi
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
    const deletedCount = await TemplateData.destroy({
      where: { tableId }
    });

    if (deletedCount === 0) {
      throw new Error("Không có bản ghi nào bị xoá");
    }

    cacheQueue.delete(cacheKey(tableId));

    return { message: `${deletedCount} dòng đã được xoá` };
  } catch (error) {
    console.log('Error deleteTemplateRowByTableIdService', error.message);
  }
};

export const deleteTemplateColByTableIdService = async (tableId) => {
  try {
    const deletedCount = await TemplateColumn.destroy({
      where: { tableId }
    });

    if (deletedCount === 0) {
      throw new Error("Không có bản ghi nào bị xoá");
    }

    cacheQueue.delete(cacheKey(tableId));

    return { message: `${deletedCount} cột đã được xoá` };
  } catch (error) {
    console.log('Error deleteTemplateColByTableIdService', error.message);
  }
};
