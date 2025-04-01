import { KTQTSoKeToan } from '../postgres/postgres.js';
import dayjs from 'dayjs';
import {Op} from "sequelize";

export const createKTQTSoKeToanService = async (newData) => {
  try {
    const data = await KTQTSoKeToan.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi tạo bản ghi KTQTSoKeToan: ' + error.message);
  }
};

export const getKTQTSoKeToanByIdService = async (id) => {
  try {
    const data = await KTQTSoKeToan.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi KTQTSoKeToan không tồn tại');
    }
    return data;
  } catch (error) {
    throw new Error('Lỗi khi lấy bản ghi KTQTSoKeToan: ' + error.message);
  }
};

export const getAllKTQTSoKeToanService = async () => {
  try {
    const dataList = await KTQTSoKeToan.findAll({where: { show: true }});
    return dataList;
  } catch (error) {
    throw new Error('Lỗi khi lấy danh sách bản ghi KTQTSoKeToan: ' + error.message);
  }
};

export const updateKTQTSoKeToanService = async (newData) => {
  const { id } = newData;
  try {
    const data = await KTQTSoKeToan.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi KTQTSoKeToan không tồn tại');
    }
    newData.updateAt = dayjs().toDate();

    await data.update(newData);

    return data;
  } catch (error) {
    throw new Error('Lỗi khi cập nhật bản ghi KTQTSoKeToan: ' + error.message);
  }
};

export const deleteKTQTSoKeToanService = async (ids) => {
  try {
    const dataList = await KTQTSoKeToan.findAll({
      where: {
        id: ids,
      },
    });
    if (dataList.length === 0) {
      throw new Error('Không có bản ghi KTQTSoKeToan nào tồn tại với các ID này');
    }
    await KTQTSoKeToan.update(
      { show: false },
      {
        where: {
          id: ids,
        },
      }
    );
    return { message: 'Các bản ghi KTQTSoKeToan đã được ẩn thành công' };
  } catch (error) {
    throw new Error('Lỗi khi ẩn các bản ghi KTQTSoKeToan: ' + error.message);
  }
};

export const deleteKTQTSoKeToanByMonthService = async (month, year,company) => {
  console.log(month, year,company)
  try {
    const dataList = await KTQTSoKeToan.findAll({
      where: {
        month: month,
        year:year,
        company:company,
      },
    });
    if (dataList.length === 0) {
      return { message: 'Khong tim thay ban ghi can an' }
    }
    await KTQTSoKeToan.update(
      { show: false },
      {
        where: {
          month: month,
          year:year,
          company:company,
        },
      }
    );
    return { message: 'Các bản ghi KTQTSoKeToan đã được ẩn thành công' };
  } catch (error) {
    throw new Error('Lỗi khi ẩn các bản ghi KTQTSoKeToan: ' + error.message);
  }
};
export const deleteKTQTSoKeToanByYearService = async (year,company) => {
  try {
    const dataList = await KTQTSoKeToan.findAll({
      where: {
        year: year,
        company: company,
      },
    });
    if (dataList.length === 0) {
      return { message: 'Khong tim thay ban ghi can an' }
    }
    await KTQTSoKeToan.update(
      { show: false },
      {
        where: {
          year: year,
          company: company,
        },
      }
    );
    return { message: 'Các bản ghi KTQTSoKeToan đã được ẩn thành công' };
  } catch (error) {
    throw new Error('Lỗi khi ẩn các bản ghi KTQTSoKeToan: ' + error.message);
  }
};

export const deleteAllKTQTSoKeToanService = async () => {
  try {
    const dataList = await KTQTSoKeToan.findAll();
    if (dataList.length === 0) {
      throw new Error('Không có bản ghi KTQTSoKeToan nào');
    }
    await KTQTSoKeToan.update(
      { show: false },
      {
        where: {
          show: true,
        },
      }
    );
    return { message: 'Các bản ghi KTQTSoKeToan đã được ẩn thành công' };
  } catch (error) {
    throw new Error('Lỗi khi ẩn các bản ghi KTQTSoKeToan: ' + error.message);
  }
};
export const findLastUpdate = async () => {
  try {
    const mostRecentRecord = await KTQTSoKeToan.findOne({
      where: { show: true }, // Chỉ lấy bản ghi có show = true
      order: [['updateAt', 'DESC']],
    });

    return mostRecentRecord ? mostRecentRecord.updateAt : null;
  } catch (error) {
    console.error('Lỗi khi tìm bản ghi có updateAt mới nhất:', error);
    throw new Error('Không thể tìm bản ghi mới nhất.');
  }
};

export const findLastId = async () => {
  try {
    const mostRecentRecord = await KTQTSoKeToan.findOne({
      where: { show: true }, // Chỉ lấy bản ghi có show = true
      order: [['id', 'DESC']],
    });

    return mostRecentRecord ? mostRecentRecord.id : null;
  } catch (error) {
    console.error('Lỗi khi tìm bản ghi có ID lớn nhất:', error);
    throw new Error('Không thể tìm ID lớn nhất.');
  }
};


export const deleteByDaDung1Service = async (da_dung_1) => {
  try {
    const dataList = await KTQTSoKeToan.findAll({
      where: {
        da_dung_1: da_dung_1,
      },
    });

    if (dataList.length === 0) {
      return { message: 'Không có bản ghi nào được tìm thấy' };
    }

    await KTQTSoKeToan.update(
        { show: false },
        {
          where: {
            da_dung_1: da_dung_1,
          },
        }
    );

    return { message: 'Các bản ghi đã được ẩn thành công' };
  } catch (error) {
    throw new Error('Lỗi khi ẩn các bản ghi: ' + error.message);
  }
};

export const getUpdatedKTQTSoKeToanService = async (lastUpdated) => {
  try {
    const dataList = await KTQTSoKeToan.findAll({
      where: {
        updateAt: { [Op.gt]: lastUpdated } // Chỉ lấy bản ghi có updateAt mới hơn
      },
      order: [['updateAt', 'ASC']],
    });

    return dataList;
  } catch (error) {
    throw new Error('Lỗi khi lấy bản ghi mới cập nhật: ' + error.message);
  }
};

export const getCountSoKeToanService = async () => {
  try {
    const count = await KTQTSoKeToan.count({where: { show: true }}); // Đếm số bản ghi trong MongoDB
    return count;
  } catch (error) {
    console.error("Lỗi khi lấy số lượng bản ghi:", error);
    throw new Error("Không thể lấy số lượng bản ghi.");
  }
};
