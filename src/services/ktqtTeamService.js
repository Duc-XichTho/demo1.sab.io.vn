import { KTQTTeam } from '../postgres/postgres.js';

export const createKTQTTeamService = async (newData) => {
  try {
    const data = await KTQTTeam.create(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi tạo bản ghi KTQTTeam: ' + error.message);
  }
};

export const getKTQTTeamByIdService = async (id) => {
  try {
    const data = await KTQTTeam.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi KTQTTeam không tồn tại');
    }
    return data;
  } catch (error) {
    throw new Error('Lỗi khi lấy bản ghi KTQTTeam: ' + error.message);
  }
};

export const getAllKTQTTeamService = async () => {
  try {
    const dataList = await KTQTTeam.findAll();
    return dataList.sort((a, b) => a.id - b.id);
  } catch (error) {
    throw new Error('Lỗi khi lấy danh sách bản ghi KTQTTeam: ' + error.message);
  }
};

export const updateKTQTTeamService = async (newData) => {
  const { id } = newData;
  try {
    const data = await KTQTTeam.findByPk(id);
    if (!data) {
      throw new Error('Bản ghi KTQTTeam không tồn tại');
    }
    await data.update(newData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi cập nhật bản ghi KTQTTeam: ' + error.message);
  }
};

export const deleteKTQTTeamService = async (ids) => {
  try {
    const dataList = await KTQTTeam.findAll({
      where: {
        id: ids,
      },
    });
    if (dataList.length === 0) {
      throw new Error('Không có bản ghi KTQTTeam nào tồn tại với các ID này');
    }
    await KTQTTeam.update(
      { show: false },
      {
        where: {
          id: ids,
        },
      }
    );
    return { message: 'Các bản ghi KTQTTeam đã được ẩn thành công' };
  } catch (error) {
    throw new Error('Lỗi khi ẩn các bản ghi KTQTTeam: ' + error.message);
  }
};
