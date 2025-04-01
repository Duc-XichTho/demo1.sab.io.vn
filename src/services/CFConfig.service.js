import { CFConfig } from "../postgres/postgres.js"

export const getAllCFConfigService = async () => {
  try {
    const data = await CFConfig.findAll({ where: { show: true } })
    return data
  } catch (error) {
    throw error;
  }
};

export const getCFConfigByIdService = async (id) => {
  try {
    const data = await CFConfig.findOne({ where: { id: id, show: true } })
    return data
  } catch (error) {
    throw error;
  }
};

export const getCFConfigByPlanIdService = async (planId) => {
  try {
    const data = await CFConfig.findAll({ where: { plan_id: planId, show: true } })
    return data
  } catch (error) {
    throw error;
  }
};

export const createCFConfigService = async (data) => {
  try {
    const res = await CFConfig.create(data)
    return res
  } catch (error) {
    throw error;
  }
};

export const updateCFConfigService = async (id, data) => {
  try {
    const cf = await CFConfig.findByPk(id)
    if (cf) {
      await cf.update(data)
      return { code: "UPDATED", message: "Cập nhật thành công" }
    } else {
      return { code: "NOT_FOUND", message: "Không tìm thấy" }
    }
  } catch (error) {
    throw error;
  }
};

export const deleteCFConfigService = async (id) => {
  try {
    const cf = await CFConfig.findByPk(id)
    if (cf) {
      await cf.update({ show: false })
      return { code: "DELETED", message: "Xóa thành công" }
    } else {
      return { code: "NOT_FOUND", message: "Không tìm thấy" }
    }
  } catch (error) {
    throw error;
  }
}