import {ChiTietPhieuGiaoHang, HangHoa, Kho, Lo, PhieuGiaoHang} from "../postgres/postgres.js";

export const getAllPhieuGiaoHangService = async () => {
    try {
        const data = await PhieuGiaoHang.findAll({where: {show: true}, raw: true});
        return data
    } catch (error) {
        throw new Error('Lỗi khi getAllPhieuGiaoHangService: ' + error.message);
    }
}
export const getPhieuGiaoHangByCardIdService = async (cardId) => {
    try {
        const phieuGiaoHangRecord = await PhieuGiaoHang.findAll({
            where: {
                id_card_create: cardId,
                show: true
            },
            raw: true
        });

        const chiTietPhieuGiaoHangs = await ChiTietPhieuGiaoHang.findAll({ where: { show: true }, raw: true });
        const hangHoaRecords = await HangHoa.findAll({ where: { show: true }, raw: true });

        const result = phieuGiaoHangRecord.map((phieuGiaoHang) => {
            // Use filter instead of find for chiTietPhieu
            const chiTietPhieuList = chiTietPhieuGiaoHangs.filter((detail) => detail.id_phieu_giao_hang === phieuGiaoHang.id);

            // Create danh_sach_hang_hoa using the filtered details
            const danh_sach_hang_hoa = chiTietPhieuList.map((detail) => {
                const hangHoa = hangHoaRecords.find((hh) => hh.id === detail.id_hang_hoa);
                return {
                    id: detail.id,
                    code: hangHoa ? hangHoa.code : null,
                    name: hangHoa ? hangHoa.name : null,
                    so_luong: detail.so_luong,
                    hh_full: hangHoa ? `${hangHoa.code} | ${hangHoa.name}` : null,
                };
            });

            return {
                id: phieuGiaoHang.id,
                nguoi_giao_hang: phieuGiaoHang ? phieuGiaoHang.nguoi_giao_hang : null,
                nguoi_nhan_hang: phieuGiaoHang ? phieuGiaoHang.nguoi_nhan_hang : null,
                thoi_gian_nhan: phieuGiaoHang ? phieuGiaoHang.thoi_gian_nhan : null,
                list_id_phieu_xuat: phieuGiaoHang ? phieuGiaoHang.list_id_phieu_xuat : null,
                danh_sach_hang_hoa,
                created_at : phieuGiaoHang.created_at
            };
        });

        return result;
    } catch (error) {
        throw new Error('Lỗi khi getPhieuGiaoHangByCardIdService: ' + error.message);
    }
}


export const createPhieuGiaoHangService = async (newData) => {
    try {
        const data = await PhieuGiaoHang.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi createPhieuGiaoHangService: ' + error.message);
    }
}

export const updatePhieuGiaoHangService = async (id, newData) => {
    try {
        const data = await PhieuGiaoHang.findByPk(id);
        if (!data) {
            throw new Error("Bản ghi PhieuGiaoHang không tồn tại");
        }
        await data.update(newData);
        return data;
    } catch (error) {
        throw new Error("Lỗi khi updatePhieuGiaoHangService: " + error.message);
    }
}

export const hidePhieuGiaoHangService = async (id) => {
    try {
        const data = await PhieuGiaoHang.findByPk(id);
        if (!data) {
            throw new Error("Bản ghi PhieuGiaoHang không tồn tại");
        }
        await data.update({show: false});
        return data;
    } catch (error) {
        throw new Error("Lỗi khi hidePhieuGiaoHangService: " + error.message);
    }
}