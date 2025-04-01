import { CheckList } from "../postgres/postgres.js";

// GET
export const getCheckListByIdService = async (id) => {
    try {
        const data = await CheckList.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi CheckList không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi CheckList: ' + error.message);
    }
};

export const getAllCheckListService = async () => {
    try {
        const dataList = await CheckList.findAll();
        return dataList.sort((a, b) => b.id - a.id);
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi CheckList: ' + error.message);
    }
}

// UPDATE
export const updateCheckListService = async (newData) => {
    const { id, oldValue, name } = newData;
    try {
        const data = await CheckList.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi CheckList không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi CheckList: ' + error.message);
    }
};

// CREATE
export const createCheckListService = async (newData) => {
    try {
        const data = await CheckList.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi CheckList: ' + error.message);
    }
};

// DELETE
export const deleteCheckListService = async (ids) => {
    try {
        const dataList = await CheckList.findAll({
            where: {
                id: ids
            }
        });
        if (dataList.length === 0) {
            throw new Error('Không tìm thấy bản ghi CheckList cần xóa');
        }
        await CheckList.update(
            { show: false },
            {
                where: {
                    id: ids
                }
            }
        )
        return { message: 'Xóa bản ghi CheckList thành công' };
    } catch (error) {
        throw new Error('Lỗi khi xóa bản ghi CheckList: ' + error.message);
    }
};  