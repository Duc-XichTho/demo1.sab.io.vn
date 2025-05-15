import {NoteChart} from "../postgres/postgres.js";

// GET

export const getOrCreateNoteChart = async (title) => {
    try {
        const [noteChart] = await NoteChart.findOrCreate({
            where: {chartTitle: title},
            defaults: {
                chartTitle: title,
            },
        });
        const allNoteCharts = await NoteChart.findAll({
            order: [['id', 'ASC']]
        });

        return allNoteCharts;
    } catch (e) {
        throw new Error("Lỗi khi lấy hoặc tạo bản ghi Chart Data: " + e.message);
    }
};


// CREATE
export const createNoteChart = async (data) => {
    try {
        const result = await NoteChart.create(data)

        return result;
    } catch (e) {
        throw new Error("Lỗi khi tạo chart data: " + e.message)
    }
}

// UPDATE
export const updateNoteChart = async (id, data) => {
    try {
        const result = await NoteChart.update(data, {where: {id: id.id}});
        return result;
    } catch (e) {
        console.error(e)
        throw new Error("Lỗi khi cập nhật chart data: " + e.message);
    }
}

export const  getNoteChartByIdService = async (id) => {
    try {
        const data = await NoteChart.findByPk(id);
        return data || null;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi chart data: ' + error.message);
    }
};

// DELETE
export const deleteNoteChart = async (id) => {
    try {
        const result = await NoteChart.update(
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

export const getALLNoteChart = async () => {
    try {
        const allNoteCharts = await NoteChart.findAll({
            where : {
              show : true
            },
            order: [['id', 'ASC']]
        });

        return allNoteCharts;
    } catch (e) {
        throw new Error("Lỗi khi lấy hoặc tạo bản ghi Chart Data: " + e.message);
    }
};