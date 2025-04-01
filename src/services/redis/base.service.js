import { setCache, deleteFromCache, getFromCache, publishChange } from './redis.helper.js';
import dayjs from 'dayjs';

export const createBase = async (model, prefix, ttlConfig, newData) => {
  if (!model || !prefix || !ttlConfig || !newData) {
    throw new Error('Thiếu tham số đầu vào');
  }
  try {
    const data = await model.create(newData);
    const cacheKey = `${prefix}:id:${data.id}`;
    await setCache(cacheKey, ttlConfig.single, data);
    await publishChange(`${prefix}:changes`, { action: 'create', id: data.id, data });
    return data;
  } catch (error) {
    throw new Error(`Lỗi khi tạo bản ghi: ${error.message}`);
  }
};

export const getByIdBase = async (model, prefix, ttlConfig, id) => {
  if (!model || !prefix || !ttlConfig || !id) {
    throw new Error('Thiếu tham số đầu vào');
  }
  try {
    const cacheKey = `${prefix}:id:${id}`;
    return await getFromCache(cacheKey, ttlConfig.single, async () => {
      const data = await model.findByPk(id);
      if (!data) throw new Error('Bản ghi không tồn tại');
      return data;
    });
  } catch (error) {
    throw new Error(`Lỗi khi lấy bản ghi: ${error.message}`);
  }
};

export const getAllBase = async (model, prefix, ttlConfig, where = { show: true }) => {
  if (!model || !prefix || !ttlConfig) {
    throw new Error('Thiếu tham số đầu vào');
  }
  try {
    const listKey = `${prefix}:all`;
    return await getFromCache(listKey, ttlConfig.list, async () => {
      return await model.findAll({ where });
    });
  } catch (error) {
    throw new Error(`Lỗi khi lấy danh sách bản ghi: ${error.message}`);
  }
};

export const updateBase = async (model, prefix, ttlConfig, newData) => {
  if (!model || !prefix || !ttlConfig || !newData?.id) {
    throw new Error('Thiếu tham số đầu vào');
  }
  const { id } = newData;
  try {
    const data = await model.findByPk(id);
    if (!data) throw new Error('Bản ghi không tồn tại');
    newData.updateAt = dayjs().toDate();
    await data.update(newData);

    const cacheKey = `${prefix}:id:${id}`;
    await setCache(cacheKey, ttlConfig.single, data);
    await publishChange(`${prefix}:changes`, { action: 'update', id, data });
    return data;
  } catch (error) {
    throw new Error(`Lỗi khi cập nhật bản ghi: ${error.message}`);
  }
};

export const deleteByConditionBase = async (
  model,
  prefix,
  ttlConfig,
  where,
  notFoundMessage = 'Không tìm thấy bản ghi cần ẩn'
) => {
  if (!model || !prefix || !ttlConfig || !where) {
    throw new Error('Thiếu tham số đầu vào');
  }
  try {
    const dataList = await model.findAll({ where });
    if (dataList.length === 0) return { message: notFoundMessage, deletedRecords: [] };
    await model.update({ show: false }, { where });

    const ids = dataList.map((item) => item.id);
    await deleteFromCache(prefix, ids);
    await publishChange(`${prefix}:changes`, { action: 'delete', ids });
    return { message: 'Các bản ghi đã được ẩn thành công', deletedRecords: dataList };
  } catch (error) {
    throw new Error(`Lỗi khi ẩn các bản ghi: ${error.message}`);
  }
};

export const getCountBase = async (model, prefix, ttlConfig, where = { show: true }) => {
  if (!model || !prefix || !ttlConfig) {
    throw new Error('Thiếu tham số đầu vào');
  }
  try {
    const cacheKey = `${prefix}:count`;
    return await getFromCache(cacheKey, ttlConfig.count, async () => {
      return await model.count({ where });
    });
  } catch (error) {
    throw new Error(`Không thể lấy số lượng bản ghi: ${error.message}`);
  }
};