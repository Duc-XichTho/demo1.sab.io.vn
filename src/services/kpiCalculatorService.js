import { KpiCalculator } from "../postgres/postgres.js";

export const createKpiCalculatorService = async (newData) => {
  try {
    const data = await KpiCalculator.create(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi tạo bản ghi KPI Calculator: " + error.message);
  }
};

export const getKpiCalculatorByIdService = async (id) => {
  try {
    const data = await KpiCalculator.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi KPI Calculator không tồn tại");
    }
    return data;
  } catch (error) {
    throw new Error("Lỗi khi lấy bản ghi KPI Calculator: " + error.message);
  }
};

export const getAllKpiCalculatorService = async () => {
  try {
    const dataList = await KpiCalculator.findAll({
      attributes: ["id", "name", "tableVersion"],
      where: {
        show: true,
      },
      order: [["id", "ASC"]],
    });
    return dataList.sort((a, b) => b.id - a.id);
  } catch (error) {
    throw new Error(
      "Lỗi khi lấy danh sách bản ghi KPI Calculator: " + error.message
    );
  }
};

export const updateKpiCalculatorService = async (newData) => {
  const { id } = newData;
  try {
    const data = await KpiCalculator.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi KPI Calculator không tồn tại");
    }
    await data.update(newData);
    return data;
  } catch (error) {
    throw new Error(
      "Lỗi khi cập nhật bản ghi KPI Calculator: " + error.message
    );
  }
};

export const deleteKpiCalculatorService = async (ids) => {
  try {
    const dataList = await KpiCalculator.findAll({
      where: {
        id: ids,
      },
    });
    if (dataList.length === 0) {
      throw new Error(
        "Không có bản ghi KPI Calculator nào tồn tại với các ID này"
      );
    }
    await KpiCalculator.update(
      { show: false },
      {
        where: {
          id: ids,
        },
      }
    );
    return { message: "Các bản ghi KPI Calculator đã được ẩn thành công" };
  } catch (error) {
    throw new Error("Lỗi khi ẩn các bản ghi KPI Calculator: " + error.message);
  }
};
