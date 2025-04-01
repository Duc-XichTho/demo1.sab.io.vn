import * as phieuNhapXuatService from '../services/phieuNhapXuatService.js';

export const getAllPhieuXuatController = async (req, res) => {
  try {
    const data = await phieuNhapXuatService.getAllPhieuXuatService();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy danh sách bản ghi PhieuXuat: ' + error.message });
  }
}

export const getAllPhieuNhapController = async (req, res) => {
  try {
    const data = await phieuNhapXuatService.getAllPhieuNhapService();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lay danh sach bai ghi PhieuNhap: ' + error.message });
  }
}