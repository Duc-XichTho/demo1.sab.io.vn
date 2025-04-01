import cron from 'node-cron';
import moment from 'moment';
import dotenv from 'dotenv';
// API
import { getAllHoaDonReminder, updateHoaDonService } from '../hoaDonService.js';
import { getAllKhachHangService } from '../khachHangService.js';
import { sendTemplateEmail } from './send_email.js';

dotenv.config();

export const schedule = () => {
    cron.schedule('0 0 9 * * *', async () => {
        try {
            const hoaDonList = await getAllHoaDonReminder();
            const khachHangList = await getAllKhachHangService();
            let hoaDons = [];
            let khachHangs = [];
            hoaDonList.forEach(hoaDon => {
                hoaDons.push(hoaDon.dataValues);
            })
            khachHangList.forEach(KH => {
                khachHangs.push(KH.dataValues);
            })
            const khachHangMapping = khachHangs.reduce((acc, khachHang) => {
                acc[khachHang.id] = khachHang;
                return acc;
            }, {});
            const currentDate = moment();
            await Promise.all(hoaDons.map(async (hd) => {
                const KHData = khachHangMapping[hd.id_khach_hang];
                const term = KHData.dieu_khoan_tt === null ? 45 : KHData.dieu_khoan_tt;
                const ngay_den_han = moment(hd.date).add(term, 'days').format('YYYY-MM-DD');
                const ngayDenHanMoment = moment(ngay_den_han, 'YYYY-MM-DD');
                const diffInDays = ngayDenHanMoment.diff(currentDate, 'days');
                let title = `Công nợ ${type} quá hạn sắp chuyển nhóm `;
                const type = hd.type == 'dau_vao' ? 'phải trả' : 'Phải thu'
                if (diffInDays == 1) {
                    title = `Công nợ ${type} sắp đến hạn ngày ${ngayDenHanMoment}`
                } else if (diffInDays == -7) {
                    title += '< 7 - 30 ngày >'
                } else if (diffInDays == -30) {
                    title += '< 30 - 60 ngày >'
                } else if (diffInDays == -60) {
                    title += '< 60+ ngày >'
                } else {
                    return;
                }
                if (KHData.email || KHData.email_phu_trach) {
                    try {
                        await sendTemplateEmail({
                            to: 'hieu@xichtho-vn.com',
                            subject: title,
                            data: {
                                title: title,
                                type: type,
                                name: KHData.name,
                                mst: KHData.mst,
                                so_hoa_don: hd.so_hoa_don,
                                date: moment(hd.date).format('DD-MM-YYY'),
                                term: term,
                                ngay_den_han: moment(ngayDenHanMoment).format('DD-MM-YYY'),
                                total: hd.tong_gia_tri,
                                link: process.env.URL_CLIENT + '/home/hoa-don/bang-ke-hoa-don'
                            },
                            template: 'thongBaoCongNo'
                        })
                    } catch (error) {
                        console.error('CHECK EMAIL FAILED WITH ERROR:', error);
                    } finally {
                        if (diffInDays == -60) {
                            await updateHoaDonService({
                                id: hd.id,
                                reminder: false,
                                email_sent: true
                            })
                        }
                    }
                }
            }));
        } catch (error) {
            console.error('CHECK EMAIL FAILED WITH ERROR:', error);
        }
    });
}