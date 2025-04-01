import { SoQuanLyChiTraTruoc } from "../postgres/postgres.js";

// GET
export const getAllSoQuanLyChiTraTruocService = async () => {
	try {
		const dataList = await SoQuanLyChiTraTruoc.findAll({
			order: [['id', 'DESC']],
			where: {
				show: true,
			}
		});
		return dataList;
	} catch (error) {
		throw new Error('Lỗi khi lấy danh sách bản ghi SoQuanLyChiTraTruoc: ' + error.message);
	}
};

// CREATE
export const createSoQuanLyChiTraTruocService = async (newData) => {
	try {
		const data = await SoQuanLyChiTraTruoc.create(newData);
		return data;
	} catch (error) {
		throw new Error('Lỗi khi tạo bản ghi SoQuanLyChiTraTruoc: ' + error.message);
	};
};

// UPDATE
export const updateSoQuanLyChiTraTruocService = async (newData) => {
	const { id } = newData;
	try {
		const data = await SoQuanLyChiTraTruoc.findByPk(id);
		if (!data) {
			throw new Error('Bản ghi SoQuanLyChiTraTruoc không tồn tại');
		}
		await data.update(newData);
		return data;
	} catch (error) {
		throw new Error('Lỗi khi cập nhật bản ghi SoQuanLyChiTraTruoc: ' + error.message);
	};
};

// DELETE
export const deleteSoQuanLyChiTraTruocService = async (id) => {
	try {
		const dataList = await SoQuanLyChiTraTruoc.update(
			{ show: false },
			{
				where: {
					id
				}
			}
		);
		return dataList;
	} catch (error) {
		throw new Error('Lỗi khi ẩn bản ghi SoQuanLyChiTraTruoc: ' + error.message);
	}
};