// Libraries 50
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { createServer } from 'http';
import { Server } from 'socket.io';
import rateLimit from 'express-rate-limit';

// Middleware
import authenticateToken from "./src/middleware/authenticateToken.js";
import { connection } from "./src/postgres/postgres.js";
import { schedule } from "./src/services/schedule/schedule.js";
import { connectRedis } from "./src/services/redis/redis.service.js";

// Routes
import authRoutes from "./src/routes/authRoutes.js";
import userRouter from "./src/routes/userRouter.js";
import danhMucChungTuRouter from "./src/routes/danhMucChungTuRouter.js";
import donViTinhRouter from "./src/routes/donViTinhRouter.js";
import loaiTienRouter from "./src/routes/loaiTienRouter.js";
import taiKhoanRouter from "./src/routes/taiKhoanRouter.js";
import khachHangRouter from "./src/routes/khachHangRouter.js";
import nhaCungCapRouter from "./src/routes/nhaCungCapRouter.js";
import nhanVienRouter from "./src/routes/nhanVienRouter.js";
import hangHoaRouter from "./src/routes/hangHoaRouter.js";
import khoRouter from "./src/routes/khoRouter.js";
import thueRouter from "./src/routes/thueRouter.js";
import taiKhoanNganHangRouter from "./src/routes/taiKhoanNganHangRouter.js";
import phongBanRouter from "./src/routes/phongBanRouter.js";
import khoanMucDoanhThuChiPhiRouter from "./src/routes/khoanMucDoanhThuChiPhiRouter.js";
import khoanMucThuChiTienRouter from "./src/routes/khoanMucThuChiTienRouter.js";
import cardInputRouter from "./src/routes/cardInputRouter.js";
import cardRouter from "./src/routes/cardRouter.js";
import soKeToanRouter from "./src/routes/soKeToanRouter.js";
import soChuoiRouter from "./src/routes/soChuoiRouter.js";
import loRouter from "./src/routes/loRouter.js";
import phieuNhapRouter from "./src/routes/phieuNhapRouter.js";
import phieuXuatRouter from "./src/routes/phieuXuatRouter.js";
import detailPhieuXuatRouter from "./src/routes/detailPhieuXuatRouter.js";
import detailPhieuNhapRouter from "./src/routes/detailPhieuNhapRouter.js";
import inputRouter from "./src/routes/InputRouter.js";
import notepadRouter from "./src/routes/notepadRouter.js";
// import checklistRouter from './src/routes/checklistRouter.js';
import checklistRouter2 from "./src/routes/checkListRouter2.js";
import dinhKhoanRouter from "./src/routes/dinhKhoanRouter.js";
import dinhKhoanProRouter from "./src/routes/dinhKhoanProRouter.js";
import dinhKhoanProDataRouter from "./src/routes/dinhKhoanProDataRouter.js";
import subStepRouter from "./src/routes/subStepRouter.js";
import stepRouter from "./src/routes/stepRouter.js";
import templateRouter from "./src/routes/templateRouter.js";
import chainRouter from "./src/routes/chainRouter.js";
import userClassRouter from "./src/routes/userClassRouter.js";
import conversationRouter from "./src/routes/conversationRouter.js";
import tabContentRouter from "./src/routes/tabContentRouter.js";
import categoryRouter from "./src/routes/categoryRouter.js";
import kmfRouter from "./src/routes/kmfRouter.js";
import kmtcRouter from "./src/routes/kmtcRouter.js";
import duAnRouter from "./src/routes/duAnRouter.js";
import hopDongRouter from "./src/routes/hopDongRouter.js";
import companyRouter from "./src/routes/companyRouter.js";
import actionLogRouter from "./src/routes/actionLogRouter.js";
import soQuanLyChiTraTruocRouter from "./src/routes/soQuanLyChiTraTruocRouter.js";
import soQuanLyTaiSanRouter from "./src/routes/soQuanLyTaiSanRouter.js";
import plCategoryRouter from "./src/routes/plCategoryRouter.js";
import cashFlowCategoryRouter from "./src/routes/cashFlowCategoryRouter.js";
import businessUnitRouter from "./src/routes/businessUnitRouter.js";
import settingRouter from "./src/routes/settingRouter.js";
import dinhMucBom from "./src/routes/dinhMucBomRouter.js";
import auditLogRouter from "./src/routes/auditLogRouter.js";
import hoaDonSanPhamRouter from "./src/routes/hoaDonSanPhamRouter.js";
import dinhKhoanMapRouter from "./src/routes/dinhKhoanMapRouter.js";
import fileTabRouter from "./src/routes/fileTabRouter.js";

// Sheet Section Routes
import sheetRouter from "./src/routes/sheetRouter.js";
import sheetColumnRouter from "./src/routes/sheetColumnRouter.js";
import sheetDataRouter from "./src/routes/sheetDataRouter.js";
import fileRouter from "./src/routes/fileRouter.js";
import uploadManyFileRouter from "./src/routes/uploadManyFileRouter.js";
import uploadFileRouter from "./src/routes/uploadFileRouter.js";
import mappingCardRouter from "./src/routes/mappingCardRouter.js";
import deleteFileRouter from "./src/routes/deleteFileRouter.js";

import hangHoaLoRouter from "./src/routes/hangHoaLoRouter.js";
import hangHoaLoKhoRouter from "./src/routes/hangHoaLoKhoRouter.js";
import vasRouter from "./src/routes/vasRouter.js";
import luongRouter from "./src/routes/luongRouter.js";
import mappingLuongRouter from "./src/routes/mappingLuongRouter.js";
import chuongTrinhRouter from "./src/routes/chuongTrinhRouter.js";
import chuSoHuuRouter from "./src/routes/chuSoHuuRouter.js";
import taiSanDauTuRouter from "./src/routes/taiSanDauTuRouter.js";
import hoaDonRouter from "./src/routes/hoaDonRouter.js";
import khaiBaoDauKyRouter from "./src/routes/khaiBaoDauKyRouter.js";
import cauHinhRouter from "./src/routes/cauHinhRouter.js";
import searchRouter from "./src/routes/searchRouter.js";
import detailLenhSanXuatRouter from "./src/routes/detailLenhSanXuatRouter.js";
import lenhSanXuatRouter from "./src/routes/lenhSanXuatRouter.js";
import ccpbRouter from "./src/routes/ccpbRouter.js";
import pbgv2bRouter from "./src/routes/pbgv2BRouter.js";
import pbgv3Router from "./src/routes/pbgv3Router.js";
import pblsxRouter from "./src/routes/pblsxRouter.js";
import b0123Router from "./src/routes/b0123Router.js";
import canvasContainerRouter from "./src/routes/canvasContainerRouter.js";

// PUBLIC
import soKeToanPublicRouter from "./src/routes/public/soKeToanPublicRouter.js";
import taiKhoanPublicRouter from "./src/routes/public/taiKhoanPublicRouter.js";

import ktqtSoKeToanRouter from "./src/routes/ktqtSoKeToanRouter.js";
import ktqtKmfRouter from "./src/routes/ktqtKmfRouter.js";
import ktqtCoChePhanBoRouter from "./src/routes/ktqtCoChePhanBoRouter.js";
import ktqtKmnsRouter from "./src/routes/ktqtKmnsRouter.js";
import ktqtProductRouter from "./src/routes/ktqtProductRouter.js";
import ktqtProjectRouter from "./src/routes/ktqtProjectRouter.js";
import ktqtTeamRouter from "./src/routes/ktqtTeamRouter.js";
import ktqtUnitRouter from "./src/routes/ktqtUnitRouter.js";
import ktqtVasRouter from "./src/routes/ktqtVasRouter.js";
import ktqtVendorRouter from "./src/routes/ktqtVendorRouter.js";
import ktqtPlanRouter from "./src/routes/ktqtPlanRouter.js";
import ktqtNoteChartRouter from "./src/routes/ktqtNoteChartRouter.js";
import ktqtReportManagementRouter from "./src/routes/ktqtReportManagementRouter.js";

import phieuChiRouter from "./src/routes/phieuChiRouter.js";
import phieuThuRouter from "./src/routes/phieuThuRouter.js";
import phieuNhapXuatRouter from "./src/routes/phieuNhapXuatRouter.js";

// CANVAS
import CanvasDataRouter from "./src/routes/CanvasDataRouter.js";
import CanvasBotRouter from "./src/routes/CanvasBotRouter.js";
import CanvasChatRouter from "./src/routes/CanvasChatRouter.js";
import CanvasNotepadRouter from "./src/routes/CanvasNotepadRouter.js";

import donHangRouter from "./src/routes/donHangRouter.js";
import donHangDetailRouter from "./src/routes/donHangDetailRouter.js";
import phieuGiaoHangRouter from "./src/routes/phieuGiaoHangRouter.js";
import chiTietPhieuGiaoHangRouter from "./src/routes/chiTietPhieuGiaoHangRouter.js";
import chiTietPhieuThuRouter from "./src/routes/chiTietPhieuThuRouter.js";

import donMuaHangRouter from "./src/routes/donMuaHangRouter.js";
import donMuaHangDetailRouter from "./src/routes/donMuaHangDetailRouter.js";
import noteChartRouter from "./src/routes/noteChartRouter.js";
import tamUngDetailRouter from "./src/routes/tamUngDetailRouter.js";
import tamUngRouter from "./src/routes/tamUngRouter.js";
import deNghiThanhToanRouter from "./src/routes/deNghiThanhToanRouter.js";
import deNghiThanhToanDetailRouter from "./src/routes/deNghiThanhToanDetailRouter.js";
import detailPhieuChiRouter from "./src/routes/detailPhieuChiRouter.js";
import fileNotePadRouter from "./src/routes/fileNotePadRouter.js";
import phieuChi2Router from "./src/routes/phieuChi2Router.js";
import phieuChi2DetailRouter from "./src/routes/phieuChi2DetailRouter.js";
import ktqtKenhRouter from "./src/routes/ktqtKenhRouter.js";
import kenhRouter from "./src/routes/kenhRouter.js";
import dataCRMRouter from "./src/routes/dataCRMRouter.js";
import ktqtNhanVienRouter from "./src/routes/ktqtNhanVienRouter.js";
import ktqtNhaCungCapRouter from "./src/routes/ktqtNhaCungCapRouter.js";
import ktqtHopDongRouter from "./src/routes/ktqtHopDongRouter.js";
import updateDMFromSABRouter from "./src/routes/updateDMFromSABRouter.js";
import ktqtPhantichNoteRouter from "./src/routes/ktqtPhantichNoteRouter.js";
import leadManagementRouter from "./src/routes/leadManagementRouter.js";
import settingGroupRouter from "./src/routes/settingGroupRouter.js";

// Progress
import progressRouter from "./src/routes/progressRouter.js";
import progressStepRouter from "./src/routes/progressStepRouter.js";
import progressTaskRouter from "./src/routes/progressTaskRouter.js";
import dieuChuyenKhoRouter from "./src/routes/dieuChuyenKhoRouter.js";
import progressTaskPostRouter from "./src/routes/progressTaskPostRouter.js";
import smartWarningSABRouter from "./src/routes/smartWarningSABRouter.js";
import dashboardListRouter from "./src/routes/dashboardRouter.js";
import costPoolRouter from "./src/routes/costPoolRouter.js";
import feedbackRouter from "./src/routes/feedbackRouter.js";
import fileChildRouter from "./src/routes/fileChildRouter.js";

import tagRouter from "./src/routes/tagRouter.js";
import reportCanvasRouter from "./src/routes/reportCanvasRouter.js";
import crossCheckRouter from "./src/routes/crossCheckRouter.js";
import nganhRouter from "./src/routes/nganhRouter.js";
import metricsRouter from "./src/routes/metricsRouter.js";
import businessObjectiveRouter from "./src/routes/businessObjectiveRouter.js";
import dataMappingRouter from "./src/routes/dataMappingRouter.js";
import resultCrossCheckRouter from "./src/routes/resultCrossCheckRouter.js";
import templateSettingRouter from "./src/routes/templateSettingRouter.js";
import nganhRealRouter from "./src/routes/nganhRealRouter.js";
import kpiCalculatorRouter from "./src/routes/kpiCalculatorRouter.js";
import quanLyTagRouter from "./src/routes/quanLyTagRouter.js";
import kpi2CalculatorRouter from "./src/routes/kpi2CalculatorRouter.js";
import chartTemplateRouter from "./src/routes/chartTemplateRouter.js";
import audioPlayRouter from "./src/routes/audioPlayRouter.js";
import pmvSettingKHRouter from "./src/routes/pmvSettingKHRouter.js";
import pmvCategoriesRouter from "./src/routes/pmvCategoriesRouter.js";
import pmvPlanRouter from "./src/routes/pmvPlanRouter.js";
import pmvPlanDetailRouter from "./src/routes/pmvPlanDetailRouter.js";
import pmvDeploymentRouter from "./src/routes/pmvDeploymentRouter.js";
import pmvDeploymentDetailRouter from "./src/routes/pmvDeploymentDetailRouter.js";
import pmvSkuAllocationRouter from "./src/routes/pmvSkuAllocationRouter.js";

// Gateway
import GW_CompanyRouter from "./src/routes/gateway/companyRoute.js"
import GW_MessageRouter from "./src/routes/gateway/messageRoute.js"
import GW_TicketRouter from "./src/routes/gateway/ticketRoute.js"
import GW_TagRouter from "./src/routes/gateway/tagRoute.js"
import GW_NotificationRouter from "./src/routes/gateway/notificationRoute.js"
import GW_PermissionRouter from "./src/routes/gateway/permissionRoute.js";
import GW_EmailRouter from "./src/routes/gateway/emailRoute.js";
import pmvChuKyRouter from "./src/routes/pmvChuKyRouter.js";
import CFConfigRouter from "./src/routes/CFConfig.router.js";
import RuleSettingRouter from "./src/routes/ruleSettingRouter.js";
import githubWebhook from "./src/middleware/githubWebhook.js";
import fileNotePadRouterPublic from "./src/routes/public/fileNotePadRouterPublic.js";
import bCanvasDataOriginalRouter from "./src/routes/bCanvasDataOriginalRouter.js";
import bCanvasDataOriginalRowRouter from "./src/routes/bCanvasDataOriginalRowRouter.js";
import bCanvasMappingRouter from "./src/routes/bCanvasMappingRouter.js";
import webPageRouter from "./src/routes/webPageRouter.js";
import storyWebPageRouter from "./src/routes/storyWebPageRouter.js";

dotenv.config();

const app = express();
app.set('trust proxy', 1);

const PORT = process.env.PORT;
schedule();

const apiRateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 5000,
  message: 'Quá nhiều yêu cầu, hãy thử lại sau!',
  standardHeaders: true,
  legacyHeaders: false,
  trustProxy: 1,
});

const whitelist = [process.env.URL_CLIENT];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "50mb", }));
app.use(express.urlencoded({ extended: true, limit: "50mb", }));
app.use(cookieParser());
app.post("/git/update", githubWebhook, (req, res) => {
  return res.status(200).send("Webhook received");
});

app.use("/api/template-setting", apiRateLimiter, templateSettingRouter);
// app.use("/api/template-setting", templateSettingRouter);
app.use("/api/file-note-pad", fileNotePadRouter);

app.use(authRoutes);

app.use("/so-ke-toan", soKeToanPublicRouter);
app.use("/tai-khoan", taiKhoanPublicRouter);
app.use("/file-note-pad", fileNotePadRouterPublic);

app.use(authenticateToken);
app.use('/api/web-page', webPageRouter);
app.use('/api/story-web-page', storyWebPageRouter);
app.use('/api/tts', audioPlayRouter);
app.use('/api/rule-setting', RuleSettingRouter);
app.use("/api/tag", tagRouter);
app.use("/api/chart-template", chartTemplateRouter);
app.use("/api/result-cross-check", resultCrossCheckRouter);
app.use("/api/report-canvas", reportCanvasRouter);
app.use("/api/cross-check", crossCheckRouter);
app.use("/api/ktqt-kenh", ktqtKenhRouter);
app.use("/api/kenh", kenhRouter);
app.use("/api/danh-muc-chung-tu", danhMucChungTuRouter);
app.use("/api/don-vi-tinh", donViTinhRouter);
app.use("/api/loai-tien", loaiTienRouter);
app.use("/api/tai-khoan", taiKhoanRouter);
app.use("/api/khach-hang", khachHangRouter);
app.use("/api/nha-cung-cap", nhaCungCapRouter);
app.use("/api/nhan-vien", nhanVienRouter);
app.use("/api/hang-hoa", hangHoaRouter);
app.use("/api/thue", thueRouter);
app.use("/api/kho", khoRouter);
app.use("/api/tai-khoan-ngan-hang", taiKhoanNganHangRouter);
app.use("/api/phong-ban", phongBanRouter);
app.use("/api/khoan-muc-doanh-thu-chi-phi", khoanMucDoanhThuChiPhiRouter);
app.use("/api/khoan-muc-thu-chi-tien", khoanMucThuChiTienRouter);
app.use("/api/chain", chainRouter);
app.use("/api/template", templateRouter);
app.use("/api/step", stepRouter);
app.use("/api/sub-step", subStepRouter);
app.use("/api/input", inputRouter);
app.use("/api/notepad", notepadRouter);
app.use("/api/checklist", checklistRouter2);
app.use("/api/dinh-khoan", dinhKhoanRouter);
app.use("/api/dinh-khoan-pro", dinhKhoanProRouter);
app.use("/api/dinh-khoan-pro-data", dinhKhoanProDataRouter);
app.use("/api/card", cardRouter);
app.use("/api/card-input", cardInputRouter);
app.use("/api/user", userRouter);
app.use("/api/userclass", userClassRouter);
app.use("/api/conversation", conversationRouter);
app.use("/api/tab-content", tabContentRouter);
app.use("/api/category", categoryRouter);
app.use("/api/hop-dong", hopDongRouter);
app.use("/api/du-an", duAnRouter);
app.use("/api/kmf", kmfRouter);
app.use("/api/kmtc", kmtcRouter);
app.use("/api/company", companyRouter);
app.use("/api/action-log", actionLogRouter);
app.use("/api/so-ke-toan", soKeToanRouter);
app.use("/api/so-chuoi", soChuoiRouter);
app.use("/api/uploadFile", uploadFileRouter);
app.use("/api/upload-many-file", uploadManyFileRouter);
app.use("/api/delete", deleteFileRouter);
app.use("/api/file", fileRouter);
app.use("/api/mapping-card", mappingCardRouter);
app.use("/api/lo", loRouter);
app.use("/api/phieu-xuat", phieuXuatRouter);
app.use("/api/phieu-nhap", phieuNhapRouter);
app.use("/api/detail-phieu-nhap", detailPhieuNhapRouter);
app.use("/api/detail-phieu-xuat", detailPhieuXuatRouter);
app.use("/api/so-quan-ly-chi-tra-truoc", soQuanLyChiTraTruocRouter);
app.use("/api/so-quan-ly-tai-san", soQuanLyTaiSanRouter);
app.use("/api/luong", luongRouter);
app.use("/api/mapping-luong", mappingLuongRouter);
app.use("/api/setting", settingRouter);
app.use("/api/cau-hinh", cauHinhRouter);
app.use("/api/dinh-muc", dinhMucBom);
app.use("/api/audit-log", auditLogRouter);
app.use("/api/canvas-data", CanvasDataRouter);
app.use("/api/canvas-bot", CanvasBotRouter);
app.use("/api/canvas-notepad", CanvasNotepadRouter);
app.use("/api/hoa-don-san-pham", hoaDonSanPhamRouter);
app.use("/api/dinh-khoan-map", dinhKhoanMapRouter);
app.use("/api/sheet", sheetRouter);
app.use("/api/sheet-column", sheetColumnRouter);
app.use("/api/sheet-data", sheetDataRouter);
app.use("/api/hang-hoa-lo", hangHoaLoRouter);
app.use("/api/hang-hoa-lo-kho", hangHoaLoKhoRouter);
app.use("/api/vas", vasRouter);
app.use("/api/business-unit", businessUnitRouter);
app.use("/api/cash-flow-category", cashFlowCategoryRouter);
app.use("/api/pl-category", plCategoryRouter);
app.use("/api/hoa-don", hoaDonRouter);
app.use("/api/tai-san-dau-tu", taiSanDauTuRouter);
app.use("/api/chuong-trinh", chuongTrinhRouter);
app.use("/api/chu-so-huu", chuSoHuuRouter);
app.use("/api/khai-bao-dau-ky", khaiBaoDauKyRouter);
app.use("/api/search-model", searchRouter);
app.use("/api/lenh-sx", lenhSanXuatRouter);
app.use("/api/detail-lenh-sx", detailLenhSanXuatRouter);
app.use("/api/ccpb", ccpbRouter);
app.use("/api/pbgv2b", pbgv2bRouter);
app.use("/api/pbgv3", pbgv3Router);
app.use("/api/pblsx", pblsxRouter);
app.use("/api/b0123", b0123Router);
app.use("/api/canvas-container", canvasContainerRouter);
app.use("/api/canvas-chat", CanvasChatRouter);
app.use("/api/ktqt-skt", ktqtSoKeToanRouter);
app.use("/api/ktqt-vendor", ktqtVendorRouter);
app.use("/api/ktqt-kmf", ktqtKmfRouter);
app.use("/api/ktqt-kmns", ktqtKmnsRouter);
app.use("/api/ktqt-team", ktqtTeamRouter);
app.use("/api/ktqt-unit", ktqtUnitRouter);
app.use("/api/ktqt-co-che-phan-bo", ktqtCoChePhanBoRouter);
app.use("/api/ktqt-vas", ktqtVasRouter);
app.use("/api/ktqt-project", ktqtProjectRouter);
app.use("/api/ktqt-product", ktqtProductRouter);
app.use("/api/ktqt-note-chart", ktqtNoteChartRouter);
app.use("/api/ktqt-plan", ktqtPlanRouter);
app.use("/api/ktqt-report-management", ktqtReportManagementRouter);
app.use("/api/phieu-chi", phieuChiRouter);
app.use("/api/phieu-chi-detail", detailPhieuChiRouter);
app.use("/api/phieu-chi2", phieuChi2Router);
app.use("/api/phieu-chi2-detail", phieuChi2DetailRouter);
app.use("/api/phieu-thu", phieuThuRouter);
app.use("/api/chi-tiet-phieu-thu", chiTietPhieuThuRouter);
app.use("/api/phieu-nhap-xuat", phieuNhapXuatRouter);
app.use("/api/don-hang", donHangRouter);
app.use("/api/don-hang-detail", donHangDetailRouter);
app.use("/api/phieu-giao-hang", phieuGiaoHangRouter);
app.use("/api/chi-tiet-phieu-giao-hang", chiTietPhieuGiaoHangRouter);
app.use("/api/don-mua-hang", donMuaHangRouter);
app.use("/api/don-mua-hang-detail", donMuaHangDetailRouter);
app.use("/api/note-chart", noteChartRouter);
app.use("/api/tam-ung-detail", tamUngDetailRouter);
app.use("/api/tam-ung", tamUngRouter);
app.use("/api/de-nghi-thanh-toan-detail", deNghiThanhToanDetailRouter);
app.use("/api/de-nghi-thanh-toan", deNghiThanhToanRouter);
app.use("/api/data-crm", dataCRMRouter);
app.use("/api/ktqt-nhan-vien", ktqtNhanVienRouter);
app.use("/api/ktqt-nha-cung-cap", ktqtNhaCungCapRouter);
app.use("/api/ktqt-hop-dong", ktqtHopDongRouter);
app.use("/api/sab-update-dm-ktqt", updateDMFromSABRouter);
app.use("/api/ktqt-phan-tich-note", ktqtPhantichNoteRouter);
app.use("/api/lead-management", leadManagementRouter);
app.use("/api/setting-group", settingGroupRouter);
app.use("/api/progress", progressRouter);
app.use("/api/progress-step", progressStepRouter);
app.use("/api/progress-task", progressTaskRouter);
app.use("/api/dieu-chuyen-kho", dieuChuyenKhoRouter);
app.use("/api/progress-task-post", progressTaskPostRouter);
app.use("/api/file-tab", fileTabRouter);
app.use("/api/dashboard-list", dashboardListRouter);
app.use("/api/smart-warning-sab", smartWarningSABRouter);
app.use("/api/cost-pool", costPoolRouter);
app.use("/api/feedback", feedbackRouter);
app.use("/api/file-child", fileChildRouter);

app.use("/api/nganh", nganhRouter);
app.use("/api/nganh-real", nganhRealRouter);
app.use("/api/metrics", metricsRouter);
app.use("/api/business-objective", businessObjectiveRouter);
app.use("/api/data-mapping", dataMappingRouter);

app.use("/api/kpi-calculator", kpiCalculatorRouter);
app.use("/api/quan-ly-tag", quanLyTagRouter);
app.use("/api/kpi2-calculator", kpi2CalculatorRouter);

app.use("/api/pmv-setting-kh", pmvSettingKHRouter);
app.use("/api/pmv-categories", pmvCategoriesRouter);
app.use("/api/pmv-plan", pmvPlanRouter);
app.use("/api/pmv-chu-ky", pmvChuKyRouter);
app.use("/api/pmv-plan-detail", pmvPlanDetailRouter);
app.use("/api/pmv-deployment", pmvDeploymentRouter);
app.use("/api/pmv-deployment-detail", pmvDeploymentDetailRouter);
app.use("/api/pmv-sku-allocation", pmvSkuAllocationRouter);

// Gateway
app.use("/api/gw-company", GW_CompanyRouter);
app.use("/api/gw-message", GW_MessageRouter);
app.use("/api/gw-ticket", GW_TicketRouter);
app.use("/api/gw-tag", GW_TagRouter);
app.use("/api/gw-notification", GW_NotificationRouter);
app.use("/api/gw-permission", GW_PermissionRouter);
app.use("/api/gw-email", GW_EmailRouter);

app.use("/api/cf-config", CFConfigRouter);

app.use("/api/b-canvas-data-original", bCanvasDataOriginalRouter);
app.use("/api/b-canvas-data-original-row", bCanvasDataOriginalRowRouter);
app.use("/api/b-canvas-mapping", bCanvasMappingRouter);

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: whitelist,
    methods: ["GET", "POST"],
    credentials: true
  }
});

// WebSocket connection handling
io.on('connection', (socket) => {
  console.log('A user connected', socket.id);

  // Join a specific ticket chat room - accept multiple formats for flexibility
  socket.on('join_ticket', (data) => {
    const ticketId = typeof data === 'object' ? data.ticketId || data.ticket_Id : data;
    const roomId = `ticket_${ticketId}`;
    socket.join(roomId);
    console.log(`User ${socket.id} joined ${roomId}`);

    // Send confirmation
    socket.emit('joined', { room: roomId, success: true });
  });

  // Also support other join event names
  ['join-ticket', 'join-room', 'join'].forEach(eventName => {
    socket.on(eventName, (data) => {
      const ticketId = typeof data === 'object' ? data.ticketId || data.ticket_Id : data;
      const roomId = `ticket_${ticketId}`;
      socket.join(roomId);
      console.log(`User ${socket.id} joined ${roomId} via ${eventName}`);

      // Send confirmation
      socket.emit('joined', { room: roomId, success: true });
    });
  });

  // Handle message events
  socket.on('message', (data) => {
    const ticketId = data.ticket_Id || data.ticketId;
    if (!ticketId) {
      console.error('Message missing ticket ID:', data);
      return;
    }

    // Broadcast to all clients in the same ticket room INCLUDING sender
    const roomId = `ticket_${ticketId}`;
    console.log(`Broadcasting to room ${roomId}`);
    io.to(roomId).emit('message', data);
  });

  // Handle alternative message event names
  ['send-message', 'chat-message', 'new-message', 'send_message'].forEach(eventName => {
    socket.on(eventName, (data) => {
      console.log(`Received ${eventName}:`, data);
      const ticketId = data.ticket_Id || data.ticketId;
      if (!ticketId) {
        console.error(`${eventName} missing ticket ID:`, data);
        return;
      }

      const roomId = `ticket_${ticketId}`;
      console.log(`Broadcasting to room ${roomId} from ${eventName}`);
      io.to(roomId).emit('message', data);
    });
  });

  socket.on('delete-message', (data) => {
    console.log('Message deleted:', data);
    const ticketId = data.ticket_Id || data.ticketId;
    if (!ticketId) {
      console.error('Delete event missing ticket ID:', data);
      return;
    }

    io.to(`ticket_${ticketId}`).emit('delete-message', data);
  });

  // Handle notification events
  socket.on('notification', (data) => {
    const ticketId = data.ticket_id;
    if (!ticketId) {
      console.error('Notification missing ticket ID:', data);
      return;
    }

    // Save to database
    try {
      const notificationData = {
        ticket_id: ticketId,
        userNoti: data.userNoti,
        content: data.content,
      };

      // We're not awaiting this to avoid blocking the socket
      createNotification(notificationData);
    } catch (error) {
      console.error('Error saving notification:', error);
    }

    // Broadcast to relevant users
    const roomId = `ticket_${ticketId}`;
    io.to(roomId).emit('notification', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected', socket.id);
  });
});

httpServer.listen(PORT, async () => {
  try {
    await connection();
    await connectRedis();

    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
});
