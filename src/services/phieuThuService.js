import {ChiTietPhieuThu, HangHoa, PhieuChi2, PhieuThu} from '../postgres/postgres.js';

export const getPhieuThuByCardIdService = async (id) => {
    try {
        const isNumeric = /^\d+$/.test(id);

        let whereCondition = {
            show: true
        };

        if (isNumeric) {
            whereCondition.id_card_create = id
        } else {
            whereCondition.id = parseInt(id.slice(1), 10);
        }
        const phieuThuRecords = await PhieuThu.findAll({
            where: whereCondition,
            raw: true
        });

        const detailPhieuThuRecords = await ChiTietPhieuThu.findAll({where: {show: true}, raw: true});
        const hangHoaRecords = await HangHoa.findAll({where: {show: true}, raw: true});
        const result = phieuThuRecords.map((phieuThu) => {
            // Use filter instead of find for detailPhieuThu
            const detailPhieuThuList = detailPhieuThuRecords.filter((detail) => detail.id_phieu_thu === phieuThu.id);

            // Create danh_sach_hang_hoa using the filtered details
            const danh_sach_hang_hoa = detailPhieuThuList.map((detail) => {
                const hangHoa = hangHoaRecords.find((hh) => hh.id === detail.id_hang_hoa);


                return {
                    id: detail.id_hang_hoa,
                    code: hangHoa ? hangHoa.code : null,
                    name: hangHoa ? hangHoa.name : null,
                    dvt: hangHoa ? hangHoa.dvt : null,
                    so_luong: detail.so_luong,
                    chiet_khau: detail.chiet_khau,
                    don_gia: hangHoa ? hangHoa.gia_ban : null,
                    tong_tien: detail.tong_tien,
                    thue_gtgt: detail.thue_gtgt,
                };
            });


            return {
                id_phieu_thu: phieuThu.id,
                phieu_lq: phieuThu? phieuThu.phieu_lq : [],
                id_hoa_don : phieuThu.id_hoa_don,
                code: phieuThu.code,
                type: phieuThu.type,
                trang_thai: phieuThu.trang_thai,
                ngay_thu: phieuThu ? phieuThu.ngay_thu : null,
                hinh_thuc: phieuThu ? phieuThu.hinh_thuc : null,
                don_hang_lien_quan: `DH|${id}`,
                nguoi_chuyen_tien: phieuThu ? phieuThu.nguoi_chuyen_tien : null,
                so_tien: phieuThu ? phieuThu.so_tien : null,
                so_tien_bang_chu: phieuThu ? phieuThu.so_tien_bang_chu : null,
                ly_do: phieuThu ? phieuThu.ly_do : null,
                thu_cong_no: phieuThu ? phieuThu.thu_cong_no : null,
                danh_sach_hang_hoa,
                created_at : phieuThu.created_at
            };
        });

        return result;
    } catch (error) {
        console.error('Error in getPhieuThuByCardIdService:', error);
        throw error;
    }
}

export const createPhieuThuService = async (newData) => {
    try {
        let year = newData.year;

        if (!/^\d{4}$/.test(year)) {
            year = new Date().getFullYear().toString();
        }
        const currentYear = String(year).slice(-2);
        const nextId = (await PhieuThu.max('id')) + 1 || 1;

        newData.code = `PTH/${1000 + nextId}/${currentYear}`;

        const data = await PhieuThu.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi PhieuThu: ' + error.message);
    }
};

export const getPhieuThuByIdService = async (id) => {
    try {
        const data = await PhieuThu.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PhieuThu không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi PhieuThu: ' + error.message);
    }
};

export const getAllPhieuThuService = async () => {
    try {
        const dataList = await PhieuThu.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            },
            order: [['created_at', 'DESC']],
        });
        ;
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi PhieuThu: ' + error.message);
    }
};

export const updatePhieuThuService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await PhieuThu.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PhieuThu không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi PhieuThu: ' + error.message);
    }
};

export const deletePhieuThuService = async (ids) => {
    try {
        const dataList = await PhieuThu.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi PhieuThu nào tồn tại với các ID này');
        }
        await PhieuThu.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi PhieuThu đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi PhieuThu: ' + error.message);
    }
};

