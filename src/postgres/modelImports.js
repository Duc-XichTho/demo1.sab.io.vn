import { createUserModel } from "../models/user.js";
import { createDanhMucChungTuModel } from "../models/danhMucChungTu.js";
import { createDonViTinhModel } from "../models/donViTinh.js";
import { createTaiKhoanModel } from "../models/taiKhoan.js";
import { createKhachHangModel } from "../models/khachHang.js";
import { createNhaCungCapModel } from "../models/nhaCungCap.js";
import { createNhanVienModel } from "../models/nhanVien.js";
import { createHangHoaModel } from "../models/hangHoa.js";
import { createKhoModel } from "../models/kho.js";
import { createThueModel } from "../models/thue.js";
import { createTaiKhoanNganHangModel } from "../models/taiKhoanNganHang.js";
import { createKhoanMucDoanhThuChiPhiModel } from "../models/khoanMucDoanhThuChiPhi.js";
import { createKhoanMucThuChiTienModel } from "../models/khoanMucThuChiTien.js";
import { createCardInputModel } from "../models/cardInput.js";
import { createLoaiTienModel } from "../models/loaiTien.js";
import { createCardModel } from "../models/card.js";
import { createChainModel } from "../models/chain.js";
import { createNotePadModel } from "../models/notepad.js";
import { createCheckListModel } from "../models/checkList.js";
import { createInputModel } from "../models/input.js";
import { createDinhKhoanModel } from "../models/dinhKhoan.js";
import { createSheetModel } from "../models/sheet.js";
import { createSheetColumnModel } from "../models/sheetColumn.js";
import { createSheetDataModel } from "../models/sheetData.js";
import { createStepModel } from "../models/step.js";
import { createSupStepModel } from "../models/subStep.js";
import { createTemplateModel } from "../models/template.js";
import { createUserClassModel } from "../models/userClass.js";
import { createConversationModel } from "../models/conversation.js";
import { createTabContentModel } from "../models/tab_content.js";
import { createCategoryModel } from "../models/category.js";
import { createPhongBanModel } from "../models/phongBan.js";
import { createKmfModel } from "../models/kmf.js";
import { createKmtcModel } from "../models/kmtc.js";
import { createHopDongModel } from "../models/hopDong.js";
import { createDuAnModel } from "../models/duAn.js";
import { createCompanyModel } from "../models/company.js";
import { createActionLogModel } from "../models/actionLog.js";
import { createSoKeToanModel } from "../models/soKeToan.js";
import { createSoChuoiModel } from "../models/soChuoi.js";
import { createFileModel } from "../models/file.js";
import { createDinhKhoanProModel } from "../models/dinhKhoanPro.js";
import { createDinhKhoanProAutoModel } from "../models/dinhKhoanProAuto.js";
import { createMappingCardModel } from "../models/mappingCard.js";
import { createDinhKhoanProDataModel } from "../models/dinhKhoanProData.js";
import { createLoModel } from "../models/lo.js";
import { createPhieuNhapModel } from "../models/phieuNhap.js";
import { createPhieuXuatModel } from "../models/phieuXuat.js";
import { createDetailPhieuXuatModel } from "../models/detailPhieuXuat.js";
import { createDetailPhieuNhapModel } from "../models/detailPhieuNhap.js";
import { createHangHoaLoKhoModel } from "../models/hangHoaLoKho.js";
import { createHangHoaLoModel } from "../models/hangHoaLo.js";
import { createVasModel } from "../models/vas.js";
import { createSoQuanLyChiTraTruocModel } from "../models/soQuanLyChiTraTruoc.js";
import { createPlCategoryModel } from "../models/plCategory.js";
import { createCashFlowCategoryModel } from "../models/cashFlowCategory.js";
import { createBusinessUnitModel } from "../models/businessUnit.js";
import { createLuongModel } from "../models/luong.js";
import { createSettingModel } from "../models/settings.js";
import { createSoQuanLyTaiSanModel } from "../models/soQuanLyTaiSan.js";
import { createMappingLuongModel } from "../models/mappingLuong.js";
import { createChuongTrinhModel } from "../models/chuongTrinh.js";
import { createTaiSanDauTuModel } from "../models/taiSanDauTu.js";
import { createChuSoHuuModel } from "../models/chuSoHuu.js";
import { createHoaDonModel } from "../models/hoaDon.js";
import { createKhaiBaoDauKyModel } from "../models/khaiBaoDauKy.js";
import { createCauHinhModel } from "../models/cauHinh.js";
import { createLenhSanXuatModel } from "../models/lenhSanXuat.js";
import { createDetailLenhSanXuatModel } from "../models/detailLenhSanXuat.js";
import { createCCPBModel } from "../models/ccpb.js";
import { createDinhMucSPModel } from "../models/dinhMucSP.js";
import { createDinhMucNLModel } from "../models/dinhMucNL.js";
import { createPBGV2BModel } from "../models/pbgv2B.js";
import { createPBGV3Model } from "../models/pbgv3.js";
import { createPBLSXModel } from "../models/pblsx.js";
import { createB0123Model } from "../models/b0123.js";
import { createLenhSanXuatNLModel } from "../models/lenhSanXuatNL.js";
import { createLenhSanXuatSPModel } from "../models/lenhSanXuatSP.js";
import { createCanvasContainerModel } from "../models/canvasContainer.js";
import { createKTQTSoKeToanModel } from "../models/ktqtSoKeToan.js";
import { createKTQTVasModel } from "../models/ktqtVas.js";
import { createKTQTKmfModel } from "../models/ktqtKmf.js";
import { createKTQTKmnsModel } from "../models/ktqtKmns.js";
import { createKTQTUnitModel } from "../models/ktqtUnit.js";
import { createKTQTProductModel } from "../models/ktqtProduct.js";
import { createKTQTTeamModel } from "../models/ktqtTeam.js";
import { createKTQTCoChePhanBoModel } from "../models/ktqtCoChePhanBo.js";
import { createKTQTVendorModel } from "../models/ktqtVendor.js";
import { createKTQTProjectModel } from "../models/ktqtProject.js";
import { createAuditLogModel } from "../models/auditLog.js";
import { createProgressModel } from "../models/progress.js";
import { createProgressStepModel } from "../models/progressStep.js";
import { createProgressTaskModel } from "../models/progressTask.js";
import { createKTQTNoteChartModel } from "../models/ktqtNoteChart.js";
import { createKTQTPlanModel } from "../models/ktqtPlan.js";
import { createKTQTReportManagementModel } from "../models/ktqtReportManagement.js";
import { createKTQTReportManagementListModel } from "../models/reportManagementList.js";
import { createPhieuChiModel } from "../models/phieuChi.js";
import { createPhieuThuModel } from "../models/phieuThu.js";
import { createCanvasDataModel } from "../models/CanvasData.js";
import { createCanvasBotModel } from "../models/CanvasBot.js";
import { createDonHangModel } from "../models/donHang.js";
import { createDonHangDetailModel } from "../models/donHangDetail.js";
import { createPhieuGiaoHangModel } from "../models/phieuGiaoHang.js";
import { createChiTietPhieuGiaoHangModel } from "../models/chiTietPhieuGiaoHang.js";
import { createChiTietPhieuThuModel } from "../models/chiTietPhieuThu.js";
import { createHoaDonSanPhamModel } from "../models/hoaDonSanPham.js";
import { createCanvasChatModel } from "../models/CanvasChat.js";
import { createCanvasNotepadModel } from "../models/CanvasNotepad.js";
import { createDonMuaHangModel } from "../models/donMuaHang.js";
import { createDonMuaHangDetailModel } from "../models/donMuaHangDetail.js";
import { createTamUngModel } from "../models/tamUng.js";
import { createTamUngDetailModel } from "../models/tamUngDetail.js";
import { createDeNghiThanhToanModel } from "../models/deNghiThanhToan.js";
import { createDeNghiThanhToanDetailModel } from "../models/deNghiThanhToanDetail.js";
import { createNoteChartModel } from "../models/noteChart.js";
import { createDetailPhieuChiModel } from "../models/detailPhieuChi.js";
import { createDinhKhoanMapModel } from "../models/dinhKhoanMap.js";
import { createFileNotePadModel } from "../models/fileNotePad.js";
import { createPhieuChi2Model } from "../models/phieuChi2.js";
import { createPhieuChi2DetailModel } from "../models/phieuChi2Detail.js";
import { createKTQTKenhModel } from "../models/ktqtKenh.js";
import { createKenhModel } from "../models/kenh.js";
import { createDataCRMModel } from "../models/dataCRM.js";
import { createKtqtNhanVienModel } from "../models/ktqtNhanVien.js";
import { createKtqtNhaCungCapModel } from "../models/ktqtNhaCungCap.js";
import { createKtqtHopDongModel } from "../models/ktqtHopDong.js";
import { createKTQTPhanTichNoteModel } from "../models/ktqtPhanTichNote.js";
import { createLeadManagementModel } from "../models/leadManagement.js";
import { createSettingGroupModel } from "../models/settingGroup.js";
import { createDieuChuyenKhoModel } from "../models/dieuChuyenKho.js";
import { createProgressTaskPostModel } from "../models/progressTaskPost.js";
import { createFileTabModel } from "../models/fileTab.js";
import { createDashBoardList } from "../models/dashboardList.js";
import { createCostPoolModel } from "../models/costPool.js";
import { createFileChildModel } from "../models/fileChild.js";
import { createReportCanvasModel } from "../models/reportCanvas.js";
import { createTagModel } from "../models/tag.js";
import { createCrossCheckModel } from "../models/crossCheck.js";
import { createNganhModel } from "../models/nganh.js";
import { createBusinessObjectiveModel } from "../models/businessObjective.js";
import { createMetricsModel } from "../models/metrics.js";
import { createDataMappingModel } from "../models/dataMapping.js";
import { createResultCrossCheckModel } from "../models/resultCrossCheck.js";
import { createTemplateTableModel } from "../models/templateTable.js";
import { createTemplateColumnModel } from "../models/templateColumn.js";
import { createTemplateDataModel } from "../models/templateData.js";
import { createNganhRealModel } from "../models/nganhReal.js";
import { createKpiCalculatorModel } from "../models/kpiCalculator.js";
import { createQuanLyTagModel } from "../models/quanLyTags.js";
import { createKpi2CalculatorModel } from "../models/kpi2Calculator.js";
import { createChartTemplateModel } from "../models/chartTemplate.js";
import { createPMVSettingKHModel } from "../models/pmvSettingKH.js";
import { createPMVCategoriesModel } from "../models/pmvCategories.js";
import { createPMVPlanModel } from "../models/pmvPlan.js";
import { createPMVPlanDetailModel } from "../models/pmvPlanDetail.js";
import { createPMVDeploymentModel } from "../models/pmvDeployment.js";
import { createPMVDeploymentDetailModel } from "../models/pmvDeploymentDetail.js";
import { createPMVSkuAllocationModel } from "../models/pmvSkuAllocation.js";
import { createTicketGWModel } from "../models/gateway/ticket.js";
import { createTagGWModel } from "../models/gateway/tagGw.js";
import { createCompanyGWModel } from "../models/gateway/companyGw.js";
import { createMessageGWModel } from "../models/gateway/message.js";
import { createNotificationGWModel } from "../models/gateway/notification.js";
import { createPermissionGWModel } from "../models/gateway/permisson.js";
import { createPMVChuKyModel } from "../models/pmvChuKy.js";
import { createCFConfigModel } from "../models/CFConfig.js"
import {createRuleSettingModel} from "../models/ruleSetting.js";
import {createBCanvasMappingModel} from "../models/bCanvasMapping.js";
import {createBCanvasDataOriginalRowModel} from "../models/bCanvasDataOriginalRow.js";
import {createBCanvasDataOriginalModel} from "../models/bCanvasDataOriginal.js";
import {createWebPageModel} from "../models/webPage.js";
import {createStoryWebPageModel} from "../models/storyWebPage.js";
import { createKHKDModel } from "../models/khkd.js";
import { createKHKDElementModel } from "../models/khkdElement.js";
import { createKHKDTongHopModel } from "../models/khkdTongHop.js";
import {createKpiKQKDModel} from "../models/kpiKQKD.js";
import {createDienGiaiModel} from "../models/dienGiai.js";
import {createOnboardingGuideModel} from "../models/onboardingGuideModel.js";
import { createKtqtMappingModel } from "../models/ktqtMapping.js";
import { createKtqtImportModel } from "../models/ktqtImport.js";
import { createKtqtImportHistoryModel } from "../models/ktqtImportHistory.js";
import { createAiChatHistoryModel } from "../models/aiChatHistory.js";

export const modelImports = {
  createRuleSettingModel,
  createUserModel,
  createDanhMucChungTuModel,
  createDonViTinhModel,
  createTaiKhoanModel,
  createKhachHangModel,
  createNhaCungCapModel,
  createNhanVienModel,
  createHangHoaModel,
  createKhoModel,
  createThueModel,
  createTaiKhoanNganHangModel,
  createKhoanMucDoanhThuChiPhiModel,
  createKhoanMucThuChiTienModel,
  createCardInputModel,
  createLoaiTienModel,
  createCardModel,
  createChainModel,
  createNotePadModel,
  createCheckListModel,
  createInputModel,
  createDinhKhoanModel,
  createSheetModel,
  createSheetColumnModel,
  createSheetDataModel,
  createStepModel,
  createSupStepModel,
  createTemplateModel,
  createUserClassModel,
  createConversationModel,
  createTabContentModel,
  createCategoryModel,
  createPhongBanModel,
  createKmfModel,
  createKmtcModel,
  createHopDongModel,
  createDuAnModel,
  createCompanyModel,
  createActionLogModel,
  createSoKeToanModel,
  createSoChuoiModel,
  createFileModel,
  createDinhKhoanProModel,
  createDinhKhoanProAutoModel,
  createMappingCardModel,
  createDinhKhoanProDataModel,
  createLoModel,
  createPhieuNhapModel,
  createPhieuXuatModel,
  createDetailPhieuXuatModel,
  createDetailPhieuNhapModel,
  createHangHoaLoKhoModel,
  createHangHoaLoModel,
  createVasModel,
  createSoQuanLyChiTraTruocModel,
  createPlCategoryModel,
  createCashFlowCategoryModel,
  createBusinessUnitModel,
  createLuongModel,
  createSettingModel,
  createSoQuanLyTaiSanModel,
  createMappingLuongModel,
  createChuongTrinhModel,
  createTaiSanDauTuModel,
  createChuSoHuuModel,
  createHoaDonModel,
  createKhaiBaoDauKyModel,
  createCauHinhModel,
  createLenhSanXuatModel,
  createDetailLenhSanXuatModel,
  createCCPBModel,
  createDinhMucSPModel,
  createDinhMucNLModel,
  createPBGV2BModel,
  createPBGV3Model,
  createPBLSXModel,
  createB0123Model,
  createLenhSanXuatNLModel,
  createLenhSanXuatSPModel,
  createCanvasContainerModel,
  createKTQTSoKeToanModel,
  createKTQTVasModel,
  createKTQTKmfModel,
  createKTQTKmnsModel,
  createKTQTUnitModel,
  createKTQTProductModel,
  createKTQTTeamModel,
  createKTQTCoChePhanBoModel,
  createKTQTVendorModel,
  createKTQTProjectModel,
  createAuditLogModel,
  createProgressModel,
  createProgressStepModel,
  createProgressTaskModel,
  createKTQTNoteChartModel,
  createKTQTPlanModel,
  createKTQTReportManagementModel,
  createKTQTReportManagementListModel,
  createPhieuChiModel,
  createPhieuThuModel,
  createCanvasDataModel,
  createCanvasBotModel,
  createDonHangModel,
  createDonHangDetailModel,
  createPhieuGiaoHangModel,
  createChiTietPhieuGiaoHangModel,
  createChiTietPhieuThuModel,
  createHoaDonSanPhamModel,
  createCanvasChatModel,
  createCanvasNotepadModel,
  createDonMuaHangModel,
  createDonMuaHangDetailModel,
  createTamUngModel,
  createTamUngDetailModel,
  createDeNghiThanhToanModel,
  createDeNghiThanhToanDetailModel,
  createNoteChartModel,
  createDetailPhieuChiModel,
  createDinhKhoanMapModel,
  createFileNotePadModel,
  createPhieuChi2Model,
  createPhieuChi2DetailModel,
  createKTQTKenhModel,
  createKenhModel,
  createDataCRMModel,
  createKtqtNhanVienModel,
  createKtqtNhaCungCapModel,
  createKtqtHopDongModel,
  createKTQTPhanTichNoteModel,
  createLeadManagementModel,
  createSettingGroupModel,
  createDieuChuyenKhoModel,
  createProgressTaskPostModel,
  createFileTabModel,
  createDashBoardList,
  createCostPoolModel,
  createFileChildModel,
  createReportCanvasModel,
  createTagModel,
  createCrossCheckModel,
  createNganhModel,
  createBusinessObjectiveModel,
  createMetricsModel,
  createDataMappingModel,
  createResultCrossCheckModel,
  createTemplateTableModel,
  createTemplateColumnModel,
  createTemplateDataModel,
  createNganhRealModel,
  createKpiCalculatorModel,
  createQuanLyTagModel,
  createKpi2CalculatorModel,
  createChartTemplateModel,
  createPMVSettingKHModel,
  createPMVCategoriesModel,
  createPMVPlanModel,
  createPMVPlanDetailModel,
  createPMVDeploymentModel,
  createPMVDeploymentDetailModel,
  createPMVSkuAllocationModel,
  createTicketGWModel,
  createTagGWModel,
  createCompanyGWModel,
  createMessageGWModel,
  createNotificationGWModel,
  createPermissionGWModel,
  createPMVChuKyModel,
  createCFConfigModel,
  createBCanvasMappingModel,
  createBCanvasDataOriginalRowModel,
  createBCanvasDataOriginalModel,
  createWebPageModel,
  createStoryWebPageModel,
  createKHKDModel,
  createKHKDElementModel,
  createKHKDTongHopModel,
  createKpiKQKDModel,
  createDienGiaiModel,
  createOnboardingGuideModel,
  createKtqtMappingModel,
  createKtqtImportModel,
  createKtqtImportHistoryModel,
  createAiChatHistoryModel
}