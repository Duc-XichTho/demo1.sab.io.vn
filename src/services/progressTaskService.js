import {
    Op,
    or, Sequelize
} from "sequelize";
import {
    FileALL,
    ProgressTask
} from "../postgres/postgres.js";

export const getAllProgressTask = async (stepId) => {
    try {
        const data = await ProgressTask.findAll({
            where: { stepId, show: true },
            order: [["id", "ASC"]],
            raw: true
        });

        if (!data.length) return data.map(task => ({ ...task, countFile: 0 }));

        const fileCounts = await FileALL.findAll({
            where: {
                table_id: { [Op.in]: data.map(t => String(t.id)) },
                table: "ProgressTask",
                show : true
            },
            attributes: [
                "table_id",
                [Sequelize.fn("COUNT", "*"), "countFile"]
            ],
            group: ["table_id"],
            raw: true
        });

        const fileCountMap = Object.fromEntries(fileCounts.map(f => [String(f.table_id), f.countFile]));

        return data.map(task => ({
            ...task,
            countFile: fileCountMap[String(task.id)] || 0 // Đảm bảo key là string nếu cần
        }));
    } catch (error) {
        throw new Error("Lỗi khi lấy danh sách bản ghi ProgressTask: " + error.message);
    }
};


// CREATE
export const createProgressTask = async (newData) => {
    try {
        const data = await ProgressTask.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi ProgressTask: ' + error.message);
    }
}

// UPDATE
export const updateProgressTask = async (id, newData) => {
    try {
        const data = await ProgressTask.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi ProgressTask không tồn tại');
        }
        await data.update(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi ProgressTask: ' + error.message);
    }
};

// DELETE
export const deleteProgressTask = async (id) => {
    try {
        const data = await ProgressTask.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi ProgressTask không tồn tại');
        }
        await data.update({
            show: false
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi xóa bản ghi ProgressTask: ' + error.message);
    }
}