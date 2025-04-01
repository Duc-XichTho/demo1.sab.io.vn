import {DetailPhieuChi, HangHoa, Kho, Lo, PhieuChi} from '../postgres/postgres.js';

export const createPhieuChiService = async (newData) => {
    try {
        const data = await PhieuChi.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi PhieuChi: ' + error.message);
    }
};

export const getPhieuChiByIdService = async (id) => {
    try {
        const data = await PhieuChi.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PhieuChi không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi PhieuChi: ' + error.message);
    }
};

export const getAllPhieuChiService = async () => {
    try {
        const dataList = await PhieuChi.findAll({
            where: {
                show: true // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi PhieuChi: ' + error.message);
    }
};

export const updatePhieuChiService = async (newData) => {
    const {
        id,
        oldValue,
        name
    } = newData;
    try {
        const data = await PhieuChi.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PhieuChi không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi PhieuChi: ' + error.message);
    }
};

export const deletePhieuChiService = async (ids) => {
    try {
        const dataList = await PhieuChi.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi PhieuChi nào tồn tại với các ID này');
        }
        await PhieuChi.update({
            show: false
        }, {
            where: {
                id: ids,
            },
        });
        return {
            message: 'Các bản ghi PhieuChi đã được ẩn thành công'
        };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi PhieuChi: ' + error.message);
    }
};

export const getPhieuChiByCardIdService = async (id) => {
    try {
        if(!id){
            return
        }
        const isNumeric = /^\d+$/.test(id);

        let whereCondition = {
            show: true
        };

        if (isNumeric) {
            whereCondition.id_card_create = id
        } else {
            whereCondition.id = parseInt(id.slice(1), 10);
        }
        const phieuChiRecords = await PhieuChi.findAll({
            where: whereCondition,
            raw: true
        });

        const detailPhieuChiRecords = await DetailPhieuChi.findAll({where: {show: true}, raw: true});
        const hangHoaRecords = await HangHoa.findAll({where: {show: true}, raw: true});
          const khoRecords = await Kho.findAll({where: {show: true}, raw: true})
        const loRecords = await Lo.findAll({where: {show: true}, raw: true})

        const result = phieuChiRecords.map((phieuChi) => {
            // Use filter instead of find for detailPhieuChi
            const detailPhieuChiList = detailPhieuChiRecords.filter((detail) => detail.id_phieu_chi === phieuChi.id);


            // Create danh_sach_hang_hoa using the filtered details
            const danh_sach_hang_hoa = detailPhieuChiList.map((detail) => {
                const hangHoa = hangHoaRecords.find((hh) => hh.id === detail.id_hang_hoa);
                const kho = khoRecords.find((k) => k.id === detail.id_kho);
                const lo = loRecords.find((l) => l.id === detail.id_lo);


                return {
                    id: detail.id_hang_hoa,
                    hh_code: hangHoa ? hangHoa.code : null,
                    hh_name: hangHoa ? hangHoa.name : null,
                    hh_full: hangHoa ? hangHoa.code+' | '+ hangHoa.name : null,
                    dvt: hangHoa ? hangHoa.dvt : null,
                    kho,
                    lo,
                    so_luong: detail.so_luong || 0,
                    gia_nhap: hangHoa ? hangHoa.gia_nhap : null,
                    tong_tien: detail.tong_tien || 0,
                };
            });


            return {
                id: phieuChi.id,
                trang_thai: phieuChi.trang_thai,
                ngay_chi: phieuChi ? phieuChi.ngay_chi : null,
                hinh_thuc: phieuChi ? phieuChi.hinh_thuc : null,
                don_mua_lien_quan: phieuChi ? phieuChi.don_mua_lien_quan : null,
                tai_khoan_nhan_tien: phieuChi ? phieuChi.tai_khoan_nhan_tien : null,
                ten_chu_tai_khoan: phieuChi ? phieuChi.ten_chu_tai_khoan : null,
                so_tien: phieuChi ? phieuChi.so_tien : null,
                so_tien_bang_chu: phieuChi ? phieuChi.so_tien_bang_chu : null,
                ly_do: phieuChi ? phieuChi.ly_do : null,
                thanh_toan_cong_no: phieuChi ? phieuChi.thanh_toan_cong_no : null,
                danh_sach_hang_hoa
            };
        });

        return result;
    } catch (error) {
        console.error('Error in getPhieuChiByCardIdService:', error);
        throw error;
    }
}
