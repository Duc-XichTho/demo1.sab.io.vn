import {getAllWarningSAB} from "../services/smartWarningSABService.js";

// GET
export const getAllWarningController = async (req, res) => {
	try {
		const dataList = await getAllWarningSAB();
		res.status(200).json(dataList);
	} catch (e) {
		res.status(404).json({
			message: "Lỗi khi lấy danh sách cảnh báo: " + e.message,
		});
	}
}