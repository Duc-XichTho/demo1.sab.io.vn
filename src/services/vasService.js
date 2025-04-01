import {SoKeToan, Vas} from '../postgres/postgres.js';

export const createVasService = async (newData) => {
  try {
    const data = await Vas.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi tạo bản ghi Vas: ' + error.message);
  }
};

export const getVasByIdService = async (id) => {
  try {
    const data = await Vas.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi Vas không tồn tại');
    }
    return data;
  } catch (error) {
    throw new Error('Lỗi khi lấy bản ghi Vas: ' + error.message);
  }
};

export const getAllVasService = async () => {
  try {
    const dataList = await Vas.findAll({
      order: [['id', 'ASC']],
    });
    return dataList;
  } catch (error) {
    throw new Error('Lỗi khi lấy danh sách bản ghi Vas: ' + error.message);
  }
};

export const updateVasService = async (newData) => {
  const { id , oldValue , ten_tai_khoan } = newData;
  try {
    const data = await Vas.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi Vas không tồn tại');
    }
    await data.update(newData)
    //     .then(() => {
    //   if (oldValue && ten_tai_khoan) {
    //     fetchAndUpdateRecords(oldValue, ten_tai_khoan)
    //   }
    //
    // })
    return data;
  } catch (error) {
    throw new Error('Lỗi khi cập nhật bản ghi Vas: ' + error.message);
  }
};

export const deleteVasService = async (id) => {
  try {
    const dataList = await Vas.findOne({
      where: {
        id,
      },
    });
    if (dataList.length === 0) {
      throw new Error('Không có bản ghi Vas nào tồn tại với các ID này');
    }
    await Vas.update(
      { show: false },
      {
        where: {
          id,
        },
      }
    );
    return { message: 'Các bản ghi Vas đã được ẩn thành công' };
  } catch (error) {
    throw new Error('Lỗi khi ẩn các bản ghi Vas: ' + error.message);
  }
};

const fetchAndUpdateRecords = async (oldValue, ten_tai_khoan) => {
  try {
    let [soKeToanListTkNo, soKeToanListTkCo] = await Promise.all([
      SoKeToan.findAll({ where: { tk_no: oldValue } }),
      SoKeToan.findAll({ where: { tk_co: oldValue } })
    ]);
    let combinedList = [...soKeToanListTkNo, ...soKeToanListTkCo];
    await Promise.all(
        combinedList.map(record => record.update({
          tk_no: record?.tk_no === oldValue?ten_tai_khoan : record?.tk_no,
          tk_co: record?.tk_co === oldValue?ten_tai_khoan : record?.tk_co
        }))
    );

    return combinedList;
  } catch (error) {
    throw new Error('Lỗi khi lấy và cập nhật dữ liệu: ' + error.message);
  }
};

