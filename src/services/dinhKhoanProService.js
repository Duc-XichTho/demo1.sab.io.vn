import { DinhKhoanPro } from "../postgres/postgres.js";

// GET
export const getDinhKhoanProByIdService = async (id) => {
    try {
        const data = await DinhKhoanPro.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DinhKhoanPro không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi DinhKhoanPro: ' + error.message);
    }
};

export const getAllDinhKhoanProService = async () => {
    try {
        const dataList = await DinhKhoanPro.findAll({
            where: {
                show: true,
            }
        });
        return dataList.sort((a, b) => b.id - a.id);
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi DinhKhoanPro: ' + error.message);
    }
}
export const getDinhKhoanProBySubStepAndCardIdService = async (subStepId, idCard) => {
    try {
        const id_card = idCard == 0 ? null : idCard;
        const data = await DinhKhoanPro.findOne({
            where: {
                sub_step_id: subStepId,
                card_id: id_card
            },
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi DinhKhoanPro: ' + error.message);
    }
};

// UPDATE
export const updateDinhKhoanProService = async (newData) => {
    const { id } = newData;
    try {
        const data = await DinhKhoanPro.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DinhKhoanPro không tồn tại');
        }
        await data.update(newData)
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi DinhKhoanPro: ' + error.message);
    }
};

// CREATE
export const createDinhKhoanProService = async (newData) => {
    try {
        const data = await DinhKhoanPro.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi DinhKhoanPro: ' + error.message);
    }
};

// DELETE
export const deleteDinhKhoanProService = async (ids) => {
    try {
        const dataList = await DinhKhoanPro.findAll({
            where: {
                id: ids
            }
        });
        if (dataList.length === 0) {
            throw new Error('Không tìm thấy bản ghi DinhKhoanPro cần xóa');
        }
        await DinhKhoanPro.update(
            { show: false },
            {
                where: {
                    id: ids
                }
            }
        )
        return { message: 'Xóa bản ghi DinhKhoanPro thành công' };
    } catch (error) {
        throw new Error('Lỗi khi xóa bản ghi DinhKhoanPro: ' + error.message);
    }
};  