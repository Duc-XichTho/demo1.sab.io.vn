import { SoKeToan } from '../postgres/postgres.js';
import dayjs from 'dayjs';

export const createSoKeToanService = async (newData) => {
	try {
		const data = await SoKeToan.create(newData);
		return data;
	} catch (error) {
		throw new Error('Lỗi khi tạo bản ghi SoKeToan: ' + error.message);
	}
};

export const getSoKeToanByIdService = async (id) => {
	try {
		const data = await SoKeToan.findByPk(id);
		if (!data) {
			throw new Error('Bản ghi SoKeToan không tồn tại');
		}
		return data;
	} catch (error) {
		throw new Error('Lỗi khi lấy bản ghi SoKeToan: ' + error.message);
	}
};

export const getAllSoKeToanService = async () => {
	try {
		const dataList = await SoKeToan.findAll();
		return dataList;
	} catch (error) {
		throw new Error('Lỗi khi lấy danh sách bản ghi SoKeToan: ' + error.message);
	}
};

export const updateSoKeToanService = async (newData) => {
	const { id } = newData;
	try {
		const data = await SoKeToan.findByPk(id);
		if (!data) {
			throw new Error('Bản ghi SoKeToan không tồn tại');
		}
		newData.updateAt = dayjs().toDate();

		await data.update(newData);

		return data;
	} catch (error) {
		throw new Error('Lỗi khi cập nhật bản ghi SoKeToan: ' + error.message);
	}
};

export const deleteSoKeToanService = async (ids) => {
	try {
		const dataList = await SoKeToan.findAll({
			where: {
				id: ids,
			},
		});
		if (dataList.length === 0) {
			throw new Error('Không có bản ghi SoKeToan nào tồn tại với các ID này');
		}
		await SoKeToan.update(
			{ show: false },
			{
				where: {
					id: ids,
				},
			}
		);
		return { message: 'Các bản ghi SoKeToan đã được ẩn thành công' };
	} catch (error) {
		throw new Error('Lỗi khi ẩn các bản ghi SoKeToan: ' + error.message);
	}
};

export const deleteSoKeToanByMonthService = async (months, company) => {
	try {
		const dataList = await SoKeToan.findAll({
			where: {
				month: months,
				company: company,
			},
		});
		if (dataList.length === 0) {
			throw new Error('Không có bản ghi SoKeToan nào tồn tại với các tháng này');
		}
		await SoKeToan.update(
			{ show: false },
			{
				where: {
					month: months,
					company: company,
				},
			}
		);
		return { message: 'Các bản ghi SoKeToan đã được ẩn thành công' };
	} catch (error) {
		throw new Error('Lỗi khi ẩn các bản ghi SoKeToan: ' + error.message);
	}
};

export const deleteAllSoKeToanService = async (company) => {
	try {
		const dataList = await SoKeToan.findAll();
		if (dataList.length === 0) {
			throw new Error('Không có bản ghi SoKeToan nào');
		}
		await SoKeToan.update(
			{ show: false },
			{
				where: {
					show: true,
					company: company,
				},
			}
		);
		return { message: 'Các bản ghi SoKeToan đã được ẩn thành công' };
	} catch (error) {
		throw new Error('Lỗi khi ẩn các bản ghi SoKeToan: ' + error.message);
	}
};

export const findLastUpdate = async () => {
	try {
		const mostRecentRecord = await SoKeToan.findOne({
			order: [['updateAt', 'DESC']],
		});

		if (mostRecentRecord) {
			return mostRecentRecord.updateAt;
		} else {
			return null;
		}
	} catch (error) {
		console.error('Error finding most recent updateAt record:', error);
		throw new Error('Failed to find the most recent record');
	}
};
export const findLastId = async () => {
	try {
		const mostRecentRecord = await SoKeToan.findOne({
			order: [['id', 'DESC']],
		});

		if (mostRecentRecord) {
			return mostRecentRecord.id;
		} else {
			return null;
		}
	} catch (error) {
		console.error('Error finding most recent id record:', error);
		throw new Error('Failed to find the most id record');
	}
};

export const deleteByDaDung1Service = async (da_dung_1) => {
	try {
		const dataList = await SoKeToan.findAll({
			where: {
				da_dung_1: da_dung_1,
			},
		});

		if (dataList.length === 0) {
			return { message: 'Không có bản ghi nào được tìm thấy' };
		}

		await SoKeToan.update(
			{ show: false },
			{
				where: {
					da_dung_1: da_dung_1,
				},
			}
		);

		return { message: 'Các bản ghi đã được ẩn thành công' };
	} catch (error) {
		throw new Error('Lỗi khi ẩn các bản ghi: ' + error.message);
	}
};

