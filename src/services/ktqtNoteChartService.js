import {KTQTNoteChart} from "../postgres/postgres.js";

// GET

export const getOrCreateKTQTNoteChart = async (title) => {
    try {
        const [data] = await KTQTNoteChart.findOrCreate({
            where: {chartTitle: title},
            defaults: {
                chartTitle: title,
            },
        });
        const allKTQTNoteCharts = await KTQTNoteChart.findAll({
            order: [['id', 'ASC']]
        });

        return allKTQTNoteCharts;
    } catch (e) {
        throw new Error("Lỗi khi lấy hoặc tạo bản ghi Chart Data: " + e.message);
    }
};


// CREATE
export const createKTQTNoteChart = async (data) => {
    try {
        const result = await KTQTNoteChart.create({
            show: true,
            metadata: data
        })

        return result;
    } catch (e) {
        throw new Error("Lỗi khi tạo chart data: " + e.message)
    }
}

// UPDATE
export const updateKTQTNoteChart = async (id, data) => {
    try {
        const result = await KTQTNoteChart.update(data, {where: {id: id.id}});
        return result;
    } catch (e) {
        console.error(e)
        throw new Error("Lỗi khi cập nhật chart data: " + e.message);
    }
}


// DELETE
export const deleteKTQTNoteChart = async (id) => {
    try {
        const result = await KTQTNoteChart.update(
            {show: false},
            {
                where: {
                    id
                }
            }
        );
        return result;
    } catch (e) {
        console.error(e)
        throw new Error("Lỗi khi xóa chart data: " + e.message);
    }
}