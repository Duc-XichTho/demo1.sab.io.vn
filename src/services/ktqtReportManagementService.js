import { KTQTReportManagementList, KTQTReportManagement, sequelize } from '../postgres/postgres.js';

// GET
export const getReportManagementService = async (id) => {
  try {
    // Ensure the association is defined before querying
    KTQTReportManagement.hasMany(KTQTReportManagementList, { foreignKey: 'management_id' });
    KTQTReportManagementList.belongsTo(KTQTReportManagement, { foreignKey: 'management_id' });

    const data = await KTQTReportManagement.findAll({
      where: {
        id: id,
      },
      include: [
        {
          model: KTQTReportManagementList,
          required: false,
          where: {
            show: true
          }
        },
      ],
      order: [['id', 'ASC']],
    });
    return data;
  } catch (error) {
    throw new Error('Lỗi khi lấy danh sách bản ghi ReportManagement: ' + error.message);
  }
};

export const getReportManagementListService = async () => {
  try {
    const reportManagementList = await KTQTReportManagement.findAll({
      attributes: ['id', 'name'],
      order: [['id', 'ASC']],
      where: { show: true }
    });
    return reportManagementList;
  } catch (error) {
    console.error('Error in getReportManagementListService:', error);
    throw new Error('Lỗi khi lấy danh sách tên ReportManagement: ' + error.message);
  }
};

// UPDATE
export const updateReportManagementService = async (id, data) => {
  const t = await sequelize.transaction();

  try {
    // Update ReportManagement
    const reportManagement = await KTQTReportManagement.findByPk(id, { transaction: t });
    if (!reportManagement) {
      throw new Error('ReportManagement not found');
    }
    await reportManagement.update(data, { transaction: t });

    await t.commit();
    return { reportManagement };
  } catch (error) {
    await t.rollback();
    throw new Error('Lỗi khi cập nhật ReportManagement: ' + error.message);
  }
};

export const updateReportManagementListService = async (id, data) => {
  const t = await sequelize.transaction();

  try {
    const reportManagementList = await KTQTReportManagementList.findByPk(id);
    if (!reportManagementList) {
      throw new Error('ReportManagementList not found');
    }

    await reportManagementList.update(data, { transaction: t });

    await t.commit();
    return { reportManagementList };
  } catch (error) {
    await t.rollback();
    throw new Error('Lỗi khi cập nhật ReportManagementList: ' + error.message);
  }
};

// CREATE
export const createReportManagementService = async (name, year) => {
  try {
    const newReportManagement = await KTQTReportManagement.create({ name, year });
    return newReportManagement;
  } catch (error) {
    throw new Error('Lỗi khi tạo bản ghi ReportManagement: ' + error.message);
  }
};

export const createReportManagementListService = async (id) => {
  try {
    const newReportManagementList = await KTQTReportManagementList.create({ management_id: id });
    return newReportManagementList;
  } catch (error) {
    throw new Error('Lỗi khi tạo bản ghi ReportManagementList: ' + error.message);
  }
};
export const deleteReportManagementService = async (ids) => {
  try {
    const dataList = await KTQTReportManagement.findAll({
      where: {
        id: ids,
      },
    });
    if (dataList.length === 0) {
      throw new Error('Không có bản ghi ReportManagement nào tồn tại với các ID này');
    }
    await KTQTReportManagement.update(
      { show: false },
      {
        where: {
          id: ids,
        },
      }
    );
    return { message: 'Các bản ghi ReportManagement đã được ẩn thành công' };
  } catch (error) {
    throw new Error('Lỗi khi ẩn các bản ghi ReportManagement: ' + error.message);
  }
};
