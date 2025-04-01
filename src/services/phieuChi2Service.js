import {
    PhieuChi2,
    PhieuChi2Detail,
    NhanVien,
    PhieuChi,
    DetailPhieuChi,
    HangHoa,
    Kho,
    Lo, HoaDon
} from "../postgres/postgres.js";

export const getAllPhieuChi2Service = async () => {
    try {
        const phieuChi2Records = await PhieuChi2.findAll({
            where: {show: true}, raw: true, order: [['id', 'DESC']],
        });
        const phieuChi2DetailRecords = await PhieuChi2Detail.findAll({
            where: {
                show: true
            },
            order: [['created_at', 'ASC']],
            raw: true
        });
        const nhanVienRecords = await NhanVien.findAll({where: {show: true}, raw: true});

        const result = phieuChi2Records.map(phieuChi2 => {
            const phieuChi2Details = phieuChi2DetailRecords.filter(phieuChi2Detail => phieuChi2Detail.id_phieu_chi === phieuChi2.id);
            const nhanVien = nhanVienRecords.find(nv => nv.id === phieuChi2.id_nhan_vien);
            return {
                ...phieuChi2,
                nhan_vien: nhanVien || null,
                chi_tiet_phieu_chi: phieuChi2Details
            };
        });

        return result;

    } catch (error) {
        throw new Error('Lỗi khi getAllPhieuChi2Service: ' + error.message);
    }
}

export const createPhieuChi2Service = async (newData) => {
    try {
        let year = newData.year;

        if (!/^\d{4}$/.test(year)) {
            year = new Date().getFullYear().toString();
        }
        const currentYear = String(year).slice(-2);
        const nextId = (await PhieuChi2.max('id')) + 1 || 1;

        newData.code = `PCH/${1000 + nextId}/${currentYear}`;

        const data = await PhieuChi2.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi createPhieuChi2Service: ' + error.message);
    }
}

export const updatePhieuChi2Service = async (id, newData) => {
    try {
        const data = await PhieuChi2.findByPk(id);
        if (!data) {
            throw new Error("Bản ghi PhieuChi2 không tồn tại");
        }
        await data.update(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi updatePhieuChi2Service: ' + error.message);
    }
}

export const deletePhieuChi2Service = async (id) => {
    try {
        const data = await PhieuChi2.findByPk(id);
        if (!data) {
            throw new Error("Bản ghi PhieuChi2 không tồn tại");
        }
        await data.update({show: false});
        return data;
    } catch (error) {
        throw new Error('Lỗi khi deletePhieuChi2Service: ' + error.message);
    }
}

export const getPhieuChi2ByCardIdService = async (id) => {
    try {
        if (!id) {
            return
        }
        const phieuChi2Records = await PhieuChi2.findAll({
            where: {
                id_card_create: id,
                show: true
            },
            raw: true
        });

        const phieuChi2DetailRecords = await PhieuChi2Detail.findAll({
            where: {
                show: true
            },
            order: [['created_at', 'ASC']],
            raw: true
        });
        const nhanVienRecords = await NhanVien.findAll({where: {show: true}, raw: true});

        const result = phieuChi2Records.map(phieuChi2 => {
            const phieuChi2Details = phieuChi2DetailRecords.filter(phieuChi2Detail => phieuChi2Detail.id_phieu_chi === phieuChi2.id);
            const nhanVien = nhanVienRecords.find(nv => nv.id === phieuChi2.id_nhan_vien);
            return {
                ...phieuChi2,
                nhan_vien: nhanVien || null,
                chi_tiet_phieu_chi: phieuChi2Details
            };
        });

        return result;
    } catch (error) {
        console.error('Error in getPhieuChiByCardIdService:', error);
        throw error;
    }
}