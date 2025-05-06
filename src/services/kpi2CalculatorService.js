import { FileNotePad, Kpi2Calculator } from "../postgres/postgres.js";

export const createKpi2CalculatorService = async (newData) => {
    try {
        const data = await Kpi2Calculator.create(newData);
        return data;
    } catch (error) {
        throw new Error("Lỗi khi tạo bản ghi KPI2 Calculator: " + error.message);
    }
};

export const getKpi2CalculatorByIdService = async (id) => {
    try {
        const data = await Kpi2Calculator.findByPk(id);
        if (!data) {
            throw new Error("Bản ghi KPI2 Calculator không tồn tại");
        }
        return data;
    } catch (error) {
        throw new Error("Lỗi khi lấy bản ghi KPI2 Calculator: " + error.message);
    }
};

export const getAllKpi2CalculatorService = async () => {
    try {
        const dataList = await Kpi2Calculator.findAll({
            attributes: ["id", "name"],
            where: {
                show: true,
            },
            order: [["id", "ASC"]],
        });
        return dataList.sort((a, b) => b.id - a.id);
    } catch (error) {
        throw new Error(
            "Lỗi khi lấy danh sách bản ghi KPI2 Calculator: " + error.message
        );
    }
};

export const updateKpi2CalculatorService = async (newData) => {
    const { id } = newData;
    try {
        const data = await Kpi2Calculator.findByPk(id);
        if (!data) {
            throw new Error("Bản ghi KPI2 Calculator không tồn tại");
        }
        await data.update(newData);
        return data;
    } catch (error) {
        throw new Error(
            "Lỗi khi cập nhật bản ghi KPI2 Calculator: " + error.message
        );
    }
};

export const deleteKpi2CalculatorService = async (ids) => {
    try {
        // Tìm các fileNote đang sử dụng KPI này
        const fileNotes = await FileNotePad.findAll({
            where: {
                show: true,
                table: 'KPI',
                type: ids  // type của fileNote chứa id của KPI Calculator
            },
        });

        // Tìm các KPI Calculator cần xóa
        const dataList = await Kpi2Calculator.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error(
                "Không có bản ghi KPI2 Calculator nào tồn tại với các ID này"
            );
        }

        // Thực hiện xóa (ẩn) các fileNote liên quan
        if (fileNotes.length > 0) {
            await FileNotePad.update(
                { show: false },
                {
                    where: {
                        id: fileNotes.map(note => note.id)
                    }
                }
            );
        }

        // Thực hiện xóa (ẩn) các KPI Calculator
        await Kpi2Calculator.update(
            { show: false },
            {
                where: {
                    id: ids,
                },
            }
        );

        return { 
            message: `Các bản ghi KPI2 Calculator đã được ẩn thành công. ${fileNotes.length} FileNote liên quan cũng đã được ẩn.`
        };
    } catch (error) {
        throw new Error("Lỗi khi ẩn các bản ghi KPI2 Calculator: " + error.message);
    }
};