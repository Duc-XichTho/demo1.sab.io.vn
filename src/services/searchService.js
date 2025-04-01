import {
    BusinessUnit,
    Card,
    CardInput,
    Chain, ChuongTrinh, ChuSoHuu, DuAn, FileALL,
    FileNotePad, HangHoa, HoaDon, HopDong,
    Input, Kenh, KhachHang, Kho, Kmf, Kmtc, LoaiTien,
    NhaCungCap, NhanVien, PhieuXuat,
    SoKeToan,
    Step, TaiKhoan, TaiKhoanNganHang, TaiSanDauTu,
    Template,
    ReportCanvas
} from '../postgres/postgres.js';
import {Op} from "sequelize";

export const searchRecordsByKey = async (modelType, conditions) => {
    const modelMap = {
        Card,
        Template,
        Chain,
        Step,
        SoKeToan,
        Input,
        CardInput,
        FileNotePad,
        NhaCungCap,
        KhachHang,
        DuAn,
        HangHoa,
        Kmf,
        Kmtc,
        HopDong,
        Kho,
        Kenh,
        ChuongTrinh,
        NhanVien,
        BusinessUnit,
        TaiKhoanNganHang,
        TaiKhoan,
        TaiSanDauTu,
        LoaiTien,
        ChuSoHuu,
        FileALL,
        PhieuXuat,
        HoaDon,
        ReportCanvas
    };

    const model = modelMap[modelType];

    if (!model) {
        throw new Error(`Model "${modelType}" không tồn tại.`);
    }
    const finalConditions = {
        ...conditions,
        show: true,
    };
    if (Array.isArray(conditions.id) && conditions.id.length > 0) {
        finalConditions.id = {[Op.in]: conditions.id};
    }

    const result = await model.findAll({
        where: finalConditions,
    });

    return result;
};
