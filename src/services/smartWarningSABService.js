import {getPhieuXuatByCardIdService} from "./phieuXuatService.js";
import {getPhieuThuByCardIdService} from "./phieuThuService.js";
import {getDeNghiThanhToanByCardIdService} from "./deNghiThanhToanService.js";
import {getTamUngByCardIdService} from "./tamUngService.js";
import {getPhieuChi2ByCardIdService} from "./phieuChi2Service.js";
import {
    Card, ChiTietPhieuThu,
    DeNghiThanhToan, DeNghiThanhToanDetail, DetailPhieuXuat,
    DonHang,
    DonHangDetail,
    FileALL,
    HoaDon, HoaDonSanPham, PhieuChi2, PhieuChi2Detail,
    PhieuNhap, PhieuThu,
    PhieuXuat, SoKeToan, TamUng, TamUngDetail, Template
} from "../postgres/postgres.js";
import {getHoaDonByCardIdService} from "./hoaDonService.js";
import {getPhieuNhapByCardIdService} from "./phieuNhapService.js";


function filterOlderThan3Days(list) {
    const now = new Date();
    const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);

    return list.filter(item => {
        const createdAt = new Date(item.created_at);
        return createdAt < threeDaysAgo;
    });
}


// GET
export const getAllWarningSAB = async () => {
    try {
        const listCard = await Card.findAll({
            where: {
                show: true
            }
        });
        const listFile = await FileALL.findAll({
            where: {
                show: true
            }
        });
        const listSoKeToan = await SoKeToan.findAll({
            where: {
                show: true
            }
        });
        const listTemplate = await Template.findAll({
            where: {
                show: true
            }
        });
        let temDonHang = listTemplate.find(e => e?.name.includes('Đơn hàng'))
        let temHoaDon = listTemplate.find(e => e?.name.includes('Hóa đơn'))
        let temPhieuXuat = listTemplate.find(e => e?.name.includes('Xuất kho'))
        let temPhieuNhap = listTemplate.find(e => e?.name.includes('Nhập kho'))
        let temPhieuThu = listTemplate.find(e => e?.name.includes('Phiếu thu / Báo có'))
        let temPhieuChi = listTemplate.find(e => e?.name.includes('Phiếu chi / UN chi'))
        let temDNTT = listTemplate.find(e => e?.name.includes('Đề nghị thanh toán'))
        let temTamUng = listTemplate.find(e => e?.name.includes('Tạm ứng'))
        let temDieuChuyenKho = listTemplate.find(e => e?.name.includes('Điều chuyển kho'))

        let listDonHang = []
        let listHoaDon = []
        let listPhieuXuat = []
        let listPhieuNhap = []
        let listPhieuThu = []
        let listPhieuChi = []
        let listDNTT = []
        let listTamUng = []
        let listDieuChuyenKho = []

        //list Lỗi
        let E10 = []
        let E11 = []
        let E12 = []
        let E21 = []
        let E24 = []
        let E30 = []
        let E31 = []
        let E32 = []
        let R28 = []
        let R29 = []
        let R20 = []

//Đơn Hàng-----------------------------------------------------------------------------
        let donHangFull = await DonHang.findAll({
            where: {
                show: true
            }
        });
        for (const donHangRecord of donHangFull) {
            const donHangDetailRecords = await DonHangDetail.findAll({
                where: {
                    id_don_hang: donHangRecord.id,
                    show: true
                },
                raw: true,
            });
            listDonHang.push({
                    ...donHangRecord.dataValues,
                    chi_tiet_don_hang: donHangDetailRecords
                }
            )
        }

//Đơn Hàng-----------------------------------------------------------------------------
        let phieuXuatFull = await PhieuXuat.findAll({
            where: {
                show: true
            }
        });
        for (const phieuXuatRecord of phieuXuatFull) {
            const phieuXuatDetailRecords = await DetailPhieuXuat.findAll({
                where: {
                    id_phieu_xuat: phieuXuatRecord.id,
                    show: true
                },
                raw: true,
            });
            listPhieuXuat.push({
                    ...phieuXuatRecord.dataValues,
                    chi_tiet_don_hang: phieuXuatDetailRecords
                }
            )
        }

//HÓA ĐƠN------------------------------------------------------------------------------
        let hoaDonFull = await HoaDon.findAll({
            where: {
                show: true
            }
        });
        for (const hoaDonRecord of hoaDonFull) {

            const hoaDonDetailRecords = await HoaDonSanPham.findAll({
                where: {
                    orderId: hoaDonRecord.id,
                },
                raw: true,
            });
            listHoaDon.push({
                    ...hoaDonRecord.dataValues,
                    chi_tiet_don_hang: hoaDonDetailRecords
                }
            )
        }


//PHIẾU THU-----------------------------------------------------------------------------
        let phieuThuFull = await PhieuThu.findAll({
            where: {
                show: true
            }
        });
        for (const phieuThuRecord of phieuThuFull) {
            const phieuThuDetailRecords = await ChiTietPhieuThu.findAll({
                where: {
                    id_phieu_thu: phieuThuRecord.id,
                    show: true
                },
                raw: true,
            });
            listPhieuThu.push({
                    ...phieuThuRecord.dataValues,
                    chi_tiet_don_hang: phieuThuDetailRecords
                }
            )
        }

//PHIẾU CHI-----------------------------------------------------------------------------
        let phieuChiFull = await PhieuChi2.findAll({
            where: {
                show: true
            }
        });
        for (const phieuChiRecord of phieuChiFull) {
            const phieuChiDetailRecords = await PhieuChi2Detail.findAll({
                where: {
                    id_phieu_chi: phieuChiRecord.id,
                    show: true
                },
                raw: true,
            });
            listPhieuChi.push({
                    ...phieuChiRecord.dataValues,
                    chi_tiet_don_hang: phieuChiDetailRecords
                }
            )
        }

//ĐỀ NGHỊ THANH TOÁN-----------------------------------------------------------------------------
        let dnttFull = await DeNghiThanhToan.findAll({
            where: {
                show: true
            }
        });
        for (const dnttRecord of dnttFull) {
            const dnttDetailRecords = await DeNghiThanhToanDetail.findAll({
                where: {
                    id_DNTT: dnttRecord.id,
                    show: true
                },
                raw: true,
            });
            listDNTT.push({
                    ...dnttRecord.dataValues,
                    chi_tiet_don_hang: dnttDetailRecords
                }
            )
        }

//TẠM ỨNG-----------------------------------------------------------------------------
        let tamUngFull = await TamUng.findAll({
            where: {
                show: true
            }
        });
        for (const tamUngRecord of tamUngFull) {
            const tamUngDetailRecords = await TamUngDetail.findAll({
                where: {
                    id_tam_ung: tamUngRecord.id,
                    show: true
                },
                raw: true,
            });
            listTamUng.push({
                    ...tamUngRecord.dataValues,
                    chi_tiet_don_hang: tamUngDetailRecords
                }
            )
        }

//LOGIC******************************************************************************************************************
        if (listDonHang.length > 0) {
            for (const donHang of listDonHang) {
                if (listPhieuXuat.length > 0) {
                    for (const phieuXuat of listPhieuXuat) {
                        if (donHang.id.includes(phieuXuat.donHang)) {
                            if (listHoaDon.length > 0) {
                                for (const hoaDon of listHoaDon) {
                                    if (hoaDon.list_id_phieu_xuat.length > 0 && hoaDon.list_id_phieu_xuat.includes(phieuXuat.id)) {
                                        // Bắt đầu so sánh chi tiết đơn hàng và hóa đơn
                                        let chiTietKhongKhop = [];
                                        donHang.chi_tiet_don_hang.forEach((chiTietDonHang) => {
                                            const matchedItem = hoaDon.chi_tiet_don_hang.find(
                                                (chiTietHoaDon) =>
                                                    chiTietDonHang.id_hang_hoa == chiTietHoaDon.productId &&
                                                    chiTietDonHang.so_luong == chiTietHoaDon.soLuong
                                            );

                                            // Nếu không tìm thấy khớp thì thêm vào danh sách không khớp
                                            if (!matchedItem) {
                                                E10.push(
                                                    hoaDon
                                                );
                                            }
                                        });
                                        if (listPhieuThu.length > 0) {
                                            for (const phieuThu of listPhieuThu) {
                                                if (phieuThu.id_hoa_don.length > 0 && phieuThu.id_hoa_don.includes(hoaDon.id)) {
                                                    donHang.chi_tiet_don_hang.forEach((chiTietDonHang) => {
                                                        const matchedItem = phieuThu.chi_tiet_don_hang.find(
                                                            (chiTietPhieuThu) =>
                                                                chiTietDonHang.id_hang_hoa == chiTietPhieuThu.id_hang_hoa &&
                                                                chiTietDonHang.so_luong == chiTietPhieuThu.so_luong
                                                        );

                                                        // Nếu không tìm thấy khớp thì thêm vào danh sách không khớp
                                                        if (!matchedItem) {
                                                            E11.push(
                                                                phieuThu
                                                            );
                                                        }
                                                    });
                                                }
                                            }
                                        }
                                    }

                                }
                            }
                        }
                    }
                }
            }
        }

        if (listPhieuChi.length > 0) {
            for (const phieuChi of listPhieuChi) {
                if (listDNTT.length > 0) {
                    for (const dntt of listDNTT) {
                        if (phieuChi.de_nghi_lien_quan.length > 0 && phieuChi.de_nghi_lien_quan.includes(dntt.id)) {

                            phieuChi.chi_tiet_don_hang.forEach((chiTietPhieuChi) => {
                                const matchedItem = dntt.chi_tiet_don_hang.find(
                                    (chiTietDeNghi) =>
                                        chiTietPhieuChi.id_hang_hoa == chiTietDeNghi.id_hang_hoa &&
                                        chiTietPhieuChi.so_luong == chiTietDeNghi.so_luong
                                );

                                // Nếu không tìm thấy khớp thì thêm vào danh sách không khớp
                                if (!matchedItem) {
                                    E12.push(
                                        {...phieuChi,
                                            loai:'dntt'
                                        }
                                    );
                                }
                            });
                        }
                    }

                    for (const tamUng of listTamUng) {
                        if (phieuChi.tam_ung_lien_quan.length > 0 && phieuChi.tam_ung_lien_quan.includes(tamUng.id)) {

                            phieuChi.chi_tiet_don_hang.forEach((chiTietPhieuChi) => {
                                const matchedItem = tamUng.chi_tiet_don_hang.find(
                                    (chiTietTamUng) =>
                                        chiTietPhieuChi.id_hang_hoa == chiTietTamUng.id_hang_hoa &&
                                        chiTietPhieuChi.so_luong == chiTietTamUng.so_luong
                                );

                                // Nếu không tìm thấy khớp thì thêm vào danh sách không khớp
                                if (!matchedItem) {
                                    E12.push(
                                        {...phieuChi,
                                            loai:'tam_ung'
                                        }
                                    );
                                }
                            });
                        }
                    }
                }
            }
        }


        let listDNTTForCard = []
        for (const card of listCard) {
            const px = await PhieuXuat.findAll({
                where: {
                    id_card_create: card.id,
                    show: true
                },
                raw: true
            });
            if (px && px.length > 0) {
                listPhieuXuat = [...listPhieuXuat, ...px]
            }
            const pn = await PhieuNhap.findAll({
                where: {
                    id_card_create: card.id,
                    show: true
                },
                raw: true
            });
            if (pn && pn.length > 0) {
                listPhieuNhap = [...listPhieuNhap, ...pn]
            }

            // let dntt = await getDeNghiThanhToanByCardIdService(card.id)
            const dntt = await DeNghiThanhToan.findAll({
                where: {
                    id_card_create: card.id,
                    show: true
                },
                raw: true
            });
            if (dntt && dntt.length > 0) {
                listDNTTForCard = [...listDNTTForCard, ...dntt]
            }

        }
        if (listDNTTForCard.length > 0) {
            for (const file of listFile) {
                if (file.table == 'DeNghiThanhToan') {
                    E21 = listDNTTForCard.filter(dntt =>
                        `DNTT_${dntt.id_card_create}` !== file.table_id
                    );
                }
            }
            E21 = [...new Set(E21.map(item => JSON.stringify(item)))].map(item => JSON.parse(item));
            E24 = listDNTTForCard.filter(e => !(e.id_de_nghi_mua || e.id_tam_ung))
        }
        if (listPhieuXuat.length > 0) {
            E30 = [...E30, {phieuXuat: listPhieuXuat.filter(e => !e.donHang)}]
            E31 = [...E31, {phieuXuat: listPhieuXuat.filter(e => !(e.phieu_lq && e.phieu_lq.length > 0))}]
            E32 = [...E32, {phieuXuat: filterOlderThan3Days(listPhieuXuat)}]

        }
        if (listPhieuNhap.length > 0) {
            E30 = [...E30, {phieuNhap: listPhieuNhap.filter(e => !e.id_DNTT)}]
            E31 = [...E31, {phieuNhap: listPhieuNhap.filter(e => !(e.phieu_lq && e.phieu_lq.length > 0))}]
            E32 = [...E32, {phieuNhap: filterOlderThan3Days(listPhieuNhap)}]
        }
        for (const skt of listSoKeToan) {
            if (skt.pl_value && Math.abs(skt.pl_value) > 0 && (!skt.kmf || skt.kmf === '')) {
                R28.push(skt)
            }
            if (skt.cash_value && Math.abs(skt.cash_value) > 0 && (!skt.kmns || skt.kmns === '')) {
                R29.push(skt)
            }
        }

        return ({listPhieuXuat,listPhieuNhap,

            E10: {
                type: 'E10',
                message: 'Đơn hàng không khớp hóa đơn (có gắn nguồn từ đơn hàng đó)',
                data: [...E10],
                path: `/home/chains/${temHoaDon.chain_id}/templates/${temHoaDon.id}`,
                temp: temHoaDon
            },
            E11: {
                type: 'E11',
                message: 'Phiếu thu không khớp đơn hàng (có gắn nguồn từ đơn hàng đó)',
                data: [...E11],
                path: `/home/chains/${temPhieuThu.chain_id}/templates/${temPhieuThu.id}`,
                temp: temPhieuThu
            },
            E12_1: {
                type: 'E12_1',
                message: 'Phiếu chi không khớp tạm ứng (có gắn nguồn từ các phiếu đó)',
                data: [...E12.filter(e=>e.loai === 'tam_ung')],
                path: `/home/chains/${temPhieuChi.chain_id}/templates/${temPhieuChi.id}/`,
                temp: temPhieuChi
            },
            E12_2: {
                type: 'E12_2',
                message: 'Phiếu chi không khớp đề nghị thanh toán (có gắn nguồn từ các phiếu đó)',
                data: [...E12.filter(e=>e.loai === 'dntt')],
                path: `/home/chains/${temPhieuChi.chain_id}/templates/${temPhieuChi.id}`,
                temp: temPhieuChi
            },
            E21: {
                type: 'E21',
                message: 'Đề nghị thanh toán không có file đính kèm',
                data: [...E21],
                path: `/home/chains/${temDNTT.chain_id}/templates/${temDNTT.id}`,
                temp: temDNTT
            },
            E24: {
                type: 'E24',
                message: 'Đề nghị thanh toán không gắn "Đề nghị mua" hoặc "Đề nghị tạm ứng"',
                data: [...E24],
                path: `/home/chains/${temDNTT.chain_id}/templates/${temDNTT.id}`,
                temp: temDNTT
            },
            E30_1: {
                type: 'E30_1',
                message: 'Phiếu xuất kho không gắn phiếu nguồn',
                data: [...E30[0].phieuXuat],
                path: `/home/chains/${temPhieuXuat.chain_id}/templates/${temPhieuXuat.id}`,
                temp: temPhieuXuat
            },
            E30_2: {
                type: 'E30_2',
                message: 'Phiếu nhập kho không gắn phiếu nguồn',
                data: [...E30[1].phieuNhap],
                path: `/home/chains/${temPhieuNhap.chain_id}/templates/${temPhieuNhap.id}`,
                temp: temPhieuNhap
            },
            E31_1: {
                type: 'E31_1',
                message: 'Phiếu xuất kho không gắn phiếu liên quan',
                data: [...E31[0].phieuXuat],
                path: `/home/chains/${temPhieuXuat.chain_id}/templates/${temPhieuXuat.id}`,
                temp: temPhieuXuat
            },
            E31_2: {
                type: 'E31_2',
                message: 'Phiếu nhập kho không gắn phiếu liên quan',
                data: [...E31[1].phieuNhap],
                path: `/home/chains/${temPhieuNhap.chain_id}/templates/${temPhieuNhap.id}`,
                temp: temPhieuNhap
            },
            E32_1: {
                type: 'E32_1',
                message: 'Phiếu xuất kho đã tạo quá 3 ngày nhưng chưa hoàn thành',
                data: [...E32[0].phieuXuat],
                path: `/home/chains/${temPhieuXuat.chain_id}/templates/${temPhieuXuat.id}`,
                temp: temPhieuXuat
            },
            E32_2: {
                type: 'E32_2',
                message: 'Phiếu nhập kho đã tạo quá 3 ngày nhưng chưa hoàn thành',
                data: [...E32[1].phieuNhap],
                path: `/home/chains/${temPhieuNhap.chain_id}/templates/${temPhieuNhap.id}`,
                temp: temPhieuNhap
            },
            R28: {
                type: 'R28',
                message: 'Bản ghi sổ kế toán có PL value nhưng không có Khoản mục KQKD',
                data: [...R28],
                path: `/home/so-lieu/so-ke-toan`
            },
            R29: {
                type: 'R29',
                message: 'Bản ghi sổ kế toán có Cash value nhưng không có khoản mục thu chi',
                data: [...R29],
                path: `/home/so-lieu/so-ke-toan`
            },
        })
    } catch (error) {
        throw new Error(error.message);
    }
}

