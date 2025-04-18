import {config} from "dotenv";
import {Sequelize} from "sequelize";
import {modelImports} from "./modelImports.js";
import {createRuleSettingModel} from "../models/ruleSetting.js";
import {createBCanvasDataOriginalModel} from "../models/bCanvasDataOriginal.js";
import {createBCanvasDataOriginalRowModel} from "../models/bCanvasDataOriginalRow.js";
import {createBCanvasMappingModel} from "../models/bCanvasMapping.js";
import {createWebPageModel} from "../models/webPage.js";
import {createStoryWebPageModel} from "../models/storyWebPage.js";

config();

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: "postgres",
        port: 5432,
        logging: false,
        pool: {
            // Số kết nối tối đa trong pool
            max: 100,
            // Số kết nối tối thiểu trong pool
            min: 0,
            // Thời gian tối đa (tính bằng ms) để Sequelize cố gắng lấy một kết nối trước khi lỗi (ở đây là 30000 ms = 30 giây).
            acquire: 30000,
            // Thời gian tối đa (tính bằng ms) mà một kết nối không được sử dụng trước khi bị đóng (ở đây là 10000 ms = 10 giây).
            idle: 10000,
        },
        define: {
            // Nếu là false, Sequelize sẽ không tự động thêm các trường createdAt và updatedAt vào bảng.
            timestamps: false,
        },
        dialectOptions: {
            // Thời gian tối đa (tính bằng ms) để kết nối cơ sở dữ liệu trước khi timeout (ở đây là 60000 ms = 60 giây).
            connectTimeout: 60000,
        },
    }
);

let User;
let DanhMucChungTu;
let DonViTinh;
let LoaiTien;
let TaiKhoan;
let KhachHang;
let NhaCungCap;
let NhanVien;
let HangHoa;
let Kho;
let Thue;
let TaiKhoanNganHang;
let PhongBan;
let KhoanMucDoanhThuChiPhi;
let KhoanMucThuChiTien;
let Card;
let CardInput;
let Chain;
let Input;
let NotePad;
let CheckList;
let DinhKhoan;
let Step;
let SubStep;
let Template;
let UserClass;
let Conversation;
let TabContent;
let Category;
let Kmf;
let Kmtc;
let HopDong;
let DuAn;
let Sheet;
let SheetColumn;
let SheetData;
let Company;
let ActionLog;
let SoKeToan;
let SoChuoi;
let DinhKhoanPro;
let FileALL;
let MappingCard;
let DinhKhoanProData;
let DinhKhoanProAuto;
let Lo;
let DetailPhieuNhap;
let DetailPhieuXuat;
let PhieuXuat;
let PhieuNhap;
let HangHoaLoKho;
let HangHoaLo;
let Vas;
let SoQuanLyChiTraTruoc;
let SoQuanLyTaiSan;
let PlCategory;
let CashFlowCategory;
let BusinessUnit;
let Luong;
let Setting;
let MappingLuong;
let ChuongTrinh;
let TaiSanDauTu;
let ChuSoHuu;
let HoaDon;
let KhaiBaoDauKy;
let CauHinh;
let LenhSanXuat;
let DetailLenhSanXuat;
let CCPB;
let PBGV2B;
let PBGV3;
let PBLSX;
let DinhMucSP;
let DinhMucNL;
let B0123;
let LenhSanXuatNL;
let LenhSanXuatSP;
let CanvasContainer;
let AuditLog;
let KTQTSoKeToan;
let KTQTVas;
let KTQTKmf;
let KTQTKmns;
let KTQTUnit;
let KTQTProduct;
let KTQTTeam;
let KTQTCoChePhanBo;
let KTQTVendor;
let KTQTProject;
let KTQTNoteChart;
let KTQTPlan;
let KTQTReportManagement;
let KTQTReportManagementList;
let PhieuChi;
let PhieuThu;
let Progress;
let ProgressStep;
let ProgressTask;
let ProgressTaskPost;
let CanvasData;
let CanvasBot;
let DonHang;
let DonHangDetail;
let ChiTietPhieuGiaoHang;
let PhieuGiaoHang;
let ChiTietPhieuThu;
let HoaDonSanPham;
let CanvasChat;
let CanvasNotepad;
let DonMuaHang;
let DonMuaHangDetail;
let TamUng;
let TamUngDetail;
let DeNghiThanhToan;
let DeNghiThanhToanDetail;
let NoteChart;
let DinhKhoanMap;
let DetailPhieuChi;
let FileNotePad;
let PhieuChi2;
let PhieuChi2Detail;
let Kenh;
let KTQTKenh;
let DataCRM;
let KtqtNhanVien;
let KtqtNhaCungCap;
let KtqtHopDong;
let MAPPING_TABLE_SAB_KTQT;
let KTQTPhanTichNote;
let LeadManagement;
let SettingGroup;
let DieuChuyenKho;
let FileTab;
let DashBoardList;
let CostPool;
let FileChild;
let ReportCanvas;
let Tag;
let CrossCheck;
let Nganh;
let NganhReal;
let BusinessObjective;
let Metrics;
let DataMapping;
let ResultCrossCheck;
let TemplateTable;
let TemplateData;
let TemplateColumn;
let KpiCalculator;
let QuanLyTag;
let Kpi2Calculator;
let ChartTemplate;
let PMVSettingKH;
let PMVCategories;
let PMVPlan;
let PMVPlanDetail;
let PMVDeployment;
let PMVDeploymentDetail;
let PMVSkuAllocation;
let TicketGw;
let TagGw;
let CompanyGw;
let MessageGw;
let NotificationGw;
let PermissionGw;
let PMVChuKy;
let CFConfig;
let RuleSetting;
let BCanvasMapping;
let BCanvasDataOriginalRow;
let BCanvasDataOriginal;
let WebPage;
let StoryWebPage;

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection DB successfully");

        WebPage = await modelImports.createWebPageModel(sequelize);
        StoryWebPage = await modelImports.createStoryWebPageModel(sequelize);
        RuleSetting = await modelImports.createRuleSettingModel(sequelize);
        User = await modelImports.createUserModel(sequelize);
        KTQTReportManagement = await modelImports.createKTQTReportManagementModel(sequelize);
        PhieuGiaoHang = await modelImports.createPhieuGiaoHangModel(sequelize);
        ChiTietPhieuGiaoHang = await modelImports.createChiTietPhieuGiaoHangModel(sequelize);
        ChiTietPhieuThu = await modelImports.createChiTietPhieuThuModel(sequelize);
        KTQTReportManagementList = await modelImports.createKTQTReportManagementListModel(sequelize);
        DanhMucChungTu = await modelImports.createDanhMucChungTuModel(sequelize);
        DonViTinh = await modelImports.createDonViTinhModel(sequelize);
        LoaiTien = await modelImports.createLoaiTienModel(sequelize);
        TaiKhoan = await modelImports.createTaiKhoanModel(sequelize);
        KhachHang = await modelImports.createKhachHangModel(sequelize);
        NhaCungCap = await modelImports.createNhaCungCapModel(sequelize);
        NhanVien = await modelImports.createNhanVienModel(sequelize);
        HangHoa = await modelImports.createHangHoaModel(sequelize);
        Kho = await modelImports.createKhoModel(sequelize);
        Thue = await modelImports.createThueModel(sequelize);
        TaiKhoanNganHang = await modelImports.createTaiKhoanNganHangModel(sequelize);
        PhongBan = await modelImports.createPhongBanModel(sequelize);
        KhoanMucDoanhThuChiPhi = await modelImports.createKhoanMucDoanhThuChiPhiModel(sequelize);
        KhoanMucThuChiTien = await modelImports.createKhoanMucThuChiTienModel(sequelize);
        CardInput = await modelImports.createCardInputModel(sequelize);
        Card = await modelImports.createCardModel(sequelize);
        Chain = await modelImports.createChainModel(sequelize);
        Input = await modelImports.createInputModel(sequelize);
        NotePad = await modelImports.createNotePadModel(sequelize);
        CheckList = await modelImports.createCheckListModel(sequelize);
        DinhKhoan = await modelImports.createDinhKhoanModel(sequelize);
        Step = await modelImports.createStepModel(sequelize);
        SubStep = await modelImports.createSupStepModel(sequelize);
        Template = await modelImports.createTemplateModel(sequelize);
        UserClass = await modelImports.createUserClassModel(sequelize);
        Conversation = await modelImports.createConversationModel(sequelize);
        Kmf = await modelImports.createKmfModel(sequelize);
        Kmtc = await modelImports.createKmtcModel(sequelize);
        HopDong = await modelImports.createHopDongModel(sequelize);
        DuAn = await modelImports.createDuAnModel(sequelize);
        TabContent = await modelImports.createTabContentModel(sequelize);
        Category = await modelImports.createCategoryModel(sequelize);
        Company = await modelImports.createCompanyModel(sequelize);
        ActionLog = await modelImports.createActionLogModel(sequelize);
        Sheet = await modelImports.createSheetModel(sequelize);
        SheetColumn = await modelImports.createSheetColumnModel(sequelize);
        SoKeToan = await modelImports.createSoKeToanModel(sequelize);
        SoChuoi = await modelImports.createSoChuoiModel(sequelize);
        SheetData = await modelImports.createSheetDataModel(sequelize);
        DinhKhoanPro = await modelImports.createDinhKhoanProModel(sequelize);
        DinhKhoanProData = await modelImports.createDinhKhoanProDataModel(sequelize);
        DinhKhoanProAuto = await modelImports.createDinhKhoanProAutoModel(sequelize);
        FileALL = await modelImports.createFileModel(sequelize);
        MappingCard = await modelImports.createMappingCardModel(sequelize);
        SoQuanLyChiTraTruoc = await modelImports.createSoQuanLyChiTraTruocModel(sequelize);
        SoQuanLyTaiSan = await modelImports.createSoQuanLyTaiSanModel(sequelize);
        Setting = await modelImports.createSettingModel(sequelize);
        Lo = await modelImports.createLoModel(sequelize);
        DetailPhieuNhap = await modelImports.createDetailPhieuNhapModel(sequelize);
        DetailPhieuXuat = await modelImports.createDetailPhieuXuatModel(sequelize);
        PhieuNhap = await modelImports.createPhieuNhapModel(sequelize);
        PhieuXuat = await modelImports.createPhieuXuatModel(sequelize);
        HangHoaLoKho = await modelImports.createHangHoaLoKhoModel(sequelize);
        HangHoaLo = await modelImports.createHangHoaLoModel(sequelize);
        Vas = await modelImports.createVasModel(sequelize);
        PlCategory = await modelImports.createPlCategoryModel(sequelize);
        CashFlowCategory = await modelImports.createCashFlowCategoryModel(sequelize);
        BusinessUnit = await modelImports.createBusinessUnitModel(sequelize);
        Luong = await modelImports.createLuongModel(sequelize);
        MappingLuong = await modelImports.createMappingLuongModel(sequelize);
        ChuongTrinh = await modelImports.createChuongTrinhModel(sequelize);
        TaiSanDauTu = await modelImports.createTaiSanDauTuModel(sequelize);
        ChuSoHuu = await modelImports.createChuSoHuuModel(sequelize);
        HoaDon = await modelImports.createHoaDonModel(sequelize);
        KhaiBaoDauKy = await modelImports.createKhaiBaoDauKyModel(sequelize);
        CauHinh = await modelImports.createCauHinhModel(sequelize);
        LenhSanXuat = await modelImports.createLenhSanXuatModel(sequelize);
        DetailLenhSanXuat = await modelImports.createDetailLenhSanXuatModel(sequelize);
        CCPB = await modelImports.createCCPBModel(sequelize);
        PBGV2B = await modelImports.createPBGV2BModel(sequelize);
        PBGV3 = await modelImports.createPBGV3Model(sequelize);
        PBLSX = await modelImports.createPBLSXModel(sequelize);
        DinhMucSP = await modelImports.createDinhMucSPModel(sequelize);
        DinhMucNL = await modelImports.createDinhMucNLModel(sequelize);
        B0123 = await modelImports.createB0123Model(sequelize);
        LenhSanXuatNL = await modelImports.createLenhSanXuatNLModel(sequelize);
        LenhSanXuatSP = await modelImports.createLenhSanXuatSPModel(sequelize);
        CanvasContainer = await modelImports.createCanvasContainerModel(sequelize);
        AuditLog = await modelImports.createAuditLogModel(sequelize);
        KTQTSoKeToan = await modelImports.createKTQTSoKeToanModel(sequelize);
        KTQTVas = await modelImports.createKTQTVasModel(sequelize);
        KTQTKmf = await modelImports.createKTQTKmfModel(sequelize);
        KTQTKmns = await modelImports.createKTQTKmnsModel(sequelize);
        KTQTUnit = await modelImports.createKTQTUnitModel(sequelize);
        KTQTProduct = await modelImports.createKTQTProductModel(sequelize);
        KTQTTeam = await modelImports.createKTQTTeamModel(sequelize);
        KTQTCoChePhanBo = await modelImports.createKTQTCoChePhanBoModel(sequelize);
        KTQTVendor = await modelImports.createKTQTVendorModel(sequelize);
        KTQTProject = await modelImports.createKTQTProjectModel(sequelize);
        KTQTNoteChart = await modelImports.createKTQTNoteChartModel(sequelize);
        KTQTPlan = await modelImports.createKTQTPlanModel(sequelize);
        PhieuChi = await modelImports.createPhieuChiModel(sequelize);
        PhieuThu = await modelImports.createPhieuThuModel(sequelize);
        Progress = await modelImports.createProgressModel(sequelize);
        ProgressStep = await modelImports.createProgressStepModel(sequelize);
        ProgressTask = await modelImports.createProgressTaskModel(sequelize);
        ProgressTaskPost = await modelImports.createProgressTaskPostModel(sequelize);
        CanvasData = await modelImports.createCanvasDataModel(sequelize);
        CanvasBot = await modelImports.createCanvasBotModel(sequelize);
        HoaDonSanPham = await modelImports.createHoaDonSanPhamModel(sequelize);
        DonHang = await modelImports.createDonHangModel(sequelize);
        DonHangDetail = await modelImports.createDonHangDetailModel(sequelize);
        CanvasChat = await modelImports.createCanvasChatModel(sequelize);
        CanvasNotepad = await modelImports.createCanvasNotepadModel(sequelize);
        DonMuaHang = await modelImports.createDonMuaHangModel(sequelize);
        DonMuaHangDetail = await modelImports.createDonMuaHangDetailModel(sequelize);
        TamUng = await modelImports.createTamUngModel(sequelize);
        TamUngDetail = await modelImports.createTamUngDetailModel(sequelize);
        DeNghiThanhToan = await modelImports.createDeNghiThanhToanModel(sequelize);
        DeNghiThanhToanDetail = await modelImports.createDeNghiThanhToanDetailModel(sequelize);
        NoteChart = await modelImports.createNoteChartModel(sequelize);
        DinhKhoanMap = await modelImports.createDinhKhoanMapModel(sequelize);
        DetailPhieuChi = await modelImports.createDetailPhieuChiModel(sequelize);
        FileNotePad = await modelImports.createFileNotePadModel(sequelize);
        PhieuChi2 = await modelImports.createPhieuChi2Model(sequelize);
        PhieuChi2Detail = await modelImports.createPhieuChi2DetailModel(sequelize);
        KTQTKenh = await modelImports.createKTQTKenhModel(sequelize);
        Kenh = await modelImports.createKenhModel(sequelize);
        DataCRM = await modelImports.createDataCRMModel(sequelize);
        KtqtNhanVien = await modelImports.createKtqtNhanVienModel(sequelize);
        KtqtNhaCungCap = await modelImports.createKtqtNhaCungCapModel(sequelize);
        KtqtHopDong = await modelImports.createKtqtHopDongModel(sequelize);
        KTQTPhanTichNote = await modelImports.createKTQTPhanTichNoteModel(sequelize);
        LeadManagement = await modelImports.createLeadManagementModel(sequelize);
        SettingGroup = await modelImports.createSettingGroupModel(sequelize);
        DieuChuyenKho = await modelImports.createDieuChuyenKhoModel(sequelize);
        FileTab = await modelImports.createFileTabModel(sequelize);
        DashBoardList = await modelImports.createDashBoardList(sequelize);
        CostPool = await modelImports.createCostPoolModel(sequelize);
        FileChild = await modelImports.createFileChildModel(sequelize);
        ReportCanvas = await modelImports.createReportCanvasModel(sequelize);
        Tag = await modelImports.createTagModel(sequelize);
        CrossCheck = await modelImports.createCrossCheckModel(sequelize);
        Nganh = await modelImports.createNganhModel(sequelize);
        NganhReal = await modelImports.createNganhRealModel(sequelize);
        BusinessObjective = await modelImports.createBusinessObjectiveModel(sequelize);
        Metrics = await modelImports.createMetricsModel(sequelize);
        DataMapping = await modelImports.createDataMappingModel(sequelize);
        ResultCrossCheck = await modelImports.createResultCrossCheckModel(sequelize);
        TemplateTable = await modelImports.createTemplateTableModel(sequelize);
        TemplateData = await modelImports.createTemplateDataModel(sequelize);
        TemplateColumn = await modelImports.createTemplateColumnModel(sequelize);
        KpiCalculator = await modelImports.createKpiCalculatorModel(sequelize);
        Kpi2Calculator = await modelImports.createKpi2CalculatorModel(sequelize);
        QuanLyTag = await modelImports.createQuanLyTagModel(sequelize);
        ChartTemplate = await modelImports.createChartTemplateModel(sequelize);
        PMVSettingKH = await modelImports.createPMVSettingKHModel(sequelize);
        PMVCategories = await modelImports.createPMVCategoriesModel(sequelize);
        PMVPlan = await modelImports.createPMVPlanModel(sequelize);
        PMVPlanDetail = await modelImports.createPMVPlanDetailModel(sequelize);
        PMVDeployment = await modelImports.createPMVDeploymentModel(sequelize);
        PMVDeploymentDetail = await modelImports.createPMVDeploymentDetailModel(sequelize);
        PMVSkuAllocation = await modelImports.createPMVSkuAllocationModel(sequelize);
        TicketGw = await modelImports.createTicketGWModel(sequelize);
        TagGw = await modelImports.createTagGWModel(sequelize);
        CompanyGw = await modelImports.createCompanyGWModel(sequelize);
        MessageGw = await modelImports.createMessageGWModel(sequelize);
        NotificationGw = await modelImports.createNotificationGWModel(sequelize);
        PermissionGw = await modelImports.createPermissionGWModel(sequelize);
        PMVChuKy = await modelImports.createPMVChuKyModel(sequelize);
        CFConfig = await modelImports.createCFConfigModel(sequelize);

        BCanvasMapping = await modelImports.createBCanvasMappingModel(sequelize);
        BCanvasDataOriginalRow = await modelImports.createBCanvasDataOriginalRowModel(sequelize);
        BCanvasDataOriginal = await modelImports.createBCanvasDataOriginalModel(sequelize);

        const modelsToAudit = [
            {
                model: User,
                name: "User",
            },
            {
                model: DanhMucChungTu,
                name: "DanhMucChungTu",
            },
            {
                model: DonViTinh,
                name: "DonViTinh",
            },
            {
                model: LoaiTien,
                name: "LoaiTien",
            },
            {
                model: TaiKhoan,
                name: "TaiKhoan",
            },
            {
                model: KhachHang,
                name: "KhachHang",
            },
            {
                model: NhaCungCap,
                name: "NhaCungCap",
            },
            {
                model: NhanVien,
                name: "NhanVien",
            },
            {
                model: HangHoa,
                name: "HangHoa",
            },
            {
                model: Kho,
                name: "Kho",
            },
            {
                model: Thue,
                name: "Thue",
            },
            {
                model: TaiKhoanNganHang,
                name: "TaiKhoanNganHang",
            },
            {
                model: PhongBan,
                name: "PhongBan",
            },
            {
                model: KhoanMucDoanhThuChiPhi,
                name: "KhoanMucDoanhThuChiPhi",
            },
            {
                model: KhoanMucThuChiTien,
                name: "KhoanMucThuChiTien",
            },
            {
                model: Card,
                name: "Card",
            },
            {
                model: CardInput,
                name: "CardInput",
            },
            {
                model: Chain,
                name: "Chain",
            },
            {
                model: Input,
                name: "Input",
            },
            {
                model: NotePad,
                name: "NotePad",
            },
            {
                model: CheckList,
                name: "CheckList",
            },
            {
                model: DinhKhoan,
                name: "DinhKhoan",
            },
            {
                model: Step,
                name: "Step",
            },
            {
                model: SubStep,
                name: "SubStep",
            },
            {
                model: Template,
                name: "Template",
            },
            {
                model: UserClass,
                name: "UserClass",
            },
            {
                model: Conversation,
                name: "Conversation",
            },
            {
                model: Kmf,
                name: "Kmf",
            },
            {
                model: Kmtc,
                name: "Kmtc",
            },
            {
                model: HopDong,
                name: "HopDong",
            },
            {
                model: DuAn,
                name: "DuAn",
            },
            {
                model: TabContent,
                name: "TabContent",
            },
            {
                model: Category,
                name: "Category",
            },
            {
                model: Company,
                name: "Company",
            },
            {
                model: Sheet,
                name: "Sheet",
            },
            {
                model: SheetColumn,
                name: "SheetColumn",
            },
            {
                model: SoKeToan,
                name: "SoKeToan",
            },
            {
                model: SoChuoi,
                name: "SoChuoi",
            },
            {
                model: SheetData,
                name: "SheetData",
            },
            {
                model: DinhKhoanPro,
                name: "DinhKhoanPro",
            },
            {
                model: DinhKhoanProData,
                name: "DinhKhoanProData",
            },
            {
                model: DinhKhoanProAuto,
                name: "DinhKhoanProAuto",
            },
            {
                model: FileALL,
                name: "FileALL",
            },
            {
                model: MappingCard,
                name: "MappingCard",
            },
            {
                model: SoQuanLyChiTraTruoc,
                name: "SoQuanLyChiTraTruoc",
            },
            {
                model: SoQuanLyTaiSan,
                name: "SoQuanLyTaiSan",
            },
            {
                model: Setting,
                name: "Setting",
            },
            {
                model: Lo,
                name: "Lo",
            },
            {
                model: HangHoaLoKho,
                name: "HangHoaLoKho",
            },
            {
                model: HangHoaLo,
                name: "HangHoaLo",
            },
            {
                model: Vas,
                name: "Vas",
            },
            {
                model: PlCategory,
                name: "PlCategory",
            },
            {
                model: CashFlowCategory,
                name: "CashFlowCategory",
            },
            {
                model: BusinessUnit,
                name: "BusinessUnit",
            },
            {
                model: Luong,
                name: "Luong",
            },
            {
                model: MappingLuong,
                name: "MappingLuong",
            },
            {
                model: ChuongTrinh,
                name: "ChuongTrinh",
            },
            {
                model: TaiSanDauTu,
                name: "TaiSanDauTu",
            },
            {
                model: ChuSoHuu,
                name: "ChuSoHuu",
            },
            {
                model: HoaDon,
                name: "HoaDon",
            },
            {
                model: KhaiBaoDauKy,
                name: "KhaiBaoDauKy",
            },
            {
                model: CauHinh,
                name: "CauHinh",
            },
            {
                model: CCPB,
                name: "CCPB",
            },
            {
                model: PBGV2B,
                name: "PBGV2B",
            },
            {
                model: PBGV3,
                name: "PBGV3",
            },
            {
                model: PBLSX,
                name: "PBLSX",
            },
            {
                model: B0123,
                name: "B0123",
            },
            {
                model: DinhMucSP,
                name: "DinhMucSP",
            },
            {
                model: CanvasContainer,
                name: "CanvasContainer",
            },
            {
                model: LenhSanXuatNL,
                name: "LenhSanXuatNL",
            },
            {
                model: LenhSanXuatSP,
                name: "LenhSanXuatSP",
            },
            {
                model: DetailLenhSanXuat,
                name: "DetailLenhSanXuat",
            },
            {
                model: PhieuNhap,
                name: "PhieuNhap",
            },
            {
                model: PhieuXuat,
                name: "PhieuXuat",
            },
            {
                model: DetailPhieuNhap,
                name: "DetailPhieuNhap",
            },
            {
                model: DetailPhieuXuat,
                name: "DetailPhieuXuat",
            },
            {
                model: DinhMucSP,
                name: "DinhMucSP",
            },
            {
                model: DinhMucNL,
                name: "DinhMucNL",
            },
            {
                model: Progress,
                name: "Progress",
            },
            {
                model: ProgressStep,
                name: "ProgressStep",
            },
            {
                model: CanvasData,
                name: "CanvasData",
            },
            {
                model: CanvasBot,
                name: "CanvasBot",
            },
            {
                model: HoaDonSanPham,
                name: "HoaDonSanPham",
            },
            {
                model: CanvasChat,
                name: "CanvasChat",
            },
            {
                model: CanvasNotepad,
                name: "CanvasNotepad",
            },
            {
                model: NoteChart,
                name: "NoteChart",
            },
            {
                model: Kenh,
                name: "Kenh",
            },
            {
                model: KTQTKenh,
                name: "KTQTKenh",
            },
            {
                model: FileNotePad,
                name: "FileNotePad",
            },
            {
                model: KTQTPhanTichNote,
                name: "KTQTPhanTichNote",
            },
            {
                model: CostPool,
                name: "CostPool",
            },
            {
                model: NganhReal,
                name: "NganhReal",
            },
            {
                model: QuanLyTag,
                name: "QuanLyTag",
            },
            {
                model: KTQTCoChePhanBo,
                name: "KTQTCoChePhanBo",
            },
            {
                model: KtqtHopDong,
                name: "KtqtHopDong",
            },
            {
                model: KTQTKenh,
                name: "KTQTKenh",
            },
            {
                model: KTQTKmf,
                name: "KTQTKmf",
            },
            {
                model: KTQTKmns,
                name: "KTQTKmns",
            },
            {
                model: KtqtNhaCungCap,
                name: "KtqtNhaCungCap",
            },
            {
                model: KtqtNhanVien,
                name: "KtqtNhanVien",
            },
            {
                model: KTQTNoteChart,
                name: "KTQTNoteChart",
            },
            {
                model: KTQTPhanTichNote,
                name: "KTQTPhanTichNote",
            },
            {
                model: KTQTPlan,
                name: "KTQTPlan",
            },
            {
                model: KTQTProduct,
                name: "KTQTProduct",
            },
            {
                model: KTQTProject,
                name: "KTQTProject",
            },
            {
                model: KTQTReportManagement,
                name: "KTQTReportManagement",
            },
            {
                model: KTQTSoKeToan,
                name: "KTQTSoKeToan",
            },
            {
                model: KTQTTeam,
                name: "KTQTTeam",
            },
            {
                model: KTQTUnit,
                name: "KTQTUnit",
            },
            {
                model: KTQTVas,
                name: "KTQTVas",
            },
            {
                model: KTQTVendor,
                name: "KTQTVendor",
            },
            {
                model: ChartTemplate,
                name: "ChartTemplate",
            },
        ];

        modelsToAudit.forEach(({model, name}) => {
            model.addHook("afterCreate", async (instance, options) => {
                try {
                    await AuditLog.create({
                        tableName: name,
                        recordId: instance.id,
                        operation: "CREATE",
                        newValues: instance.toJSON(),
                        email: instance.user_create || null,
                        changed_at: new Date(),
                    });
                } catch (error) {
                    console.error(`Audit log error for ${name}:`, error);
                }
            });

            model.addHook("afterUpdate", async (instance, options) => {
                try {
                    if (Object.keys(instance.changed()).length > 0) {
                        await AuditLog.create({
                            tableName: name,
                            recordId: instance.id,
                            operation: "UPDATE",
                            oldValues: instance._previousDataValues,
                            newValues: instance.toJSON(),
                            email: instance.user_update || null,
                            changed_at: new Date(),
                        });
                    }
                } catch (error) {
                    console.error(`Audit log error for ${name}:`, error);
                }
            });

            model.addHook("beforeUpdate", async (instance, options) => {
                if (instance.changed("show") && instance.show === false) {
                    try {
                        await AuditLog.create({
                            tableName: name,
                            recordId: instance.id,
                            operation: "DELETE",
                            oldValues: instance._previousDataValues,
                            email: instance.user_update || null,
                            changed_at: new Date(),
                        });
                    } catch (error) {
                        console.error(`Audit log error for ${name}:`, error);
                    }
                }
            });
        });

        MAPPING_TABLE_SAB_KTQT = [
            {
                sab: NhaCungCap,
                ktqt: KtqtNhaCungCap,
            },
            // { sab: Kmf, ktqt: KTQTKmf },
            {
                sab: Kmtc,
                ktqt: KTQTKmns,
            },
            {
                sab: NhanVien,
                ktqt: KtqtNhanVien,
            },
            {
                sab: HopDong,
                ktqt: KtqtHopDong,
            },
            {
                sab: HangHoa,
                ktqt: KTQTProduct,
            },
            {
                sab: DuAn,
                ktqt: KTQTProject,
            },
            {
                sab: KhachHang,
                ktqt: KTQTVendor,
            },
        ];

        // await sequelize.sync({ alter: true });
        await sequelize.sync();
        console.log("Database Synced");
    } catch (error) {
        console.error("Unable to connect to the database", error);
    }
};

export {
    RuleSetting,
    ChartTemplate,
    MAPPING_TABLE_SAB_KTQT,
    sequelize,
    connection,
    User,
    DanhMucChungTu,
    KTQTPhanTichNote,
    B0123,
    DonViTinh,
    LoaiTien,
    TaiKhoan,
    KhachHang,
    NhaCungCap,
    NhanVien,
    HangHoa,
    Kho,
    Thue,
    TaiKhoanNganHang,
    PhongBan,
    KhoanMucDoanhThuChiPhi,
    KhoanMucThuChiTien,
    Card,
    CardInput,
    Chain,
    Input,
    CheckList,
    NotePad,
    DinhKhoan,
    Sheet,
    SheetColumn,
    SheetData,
    Step,
    SubStep,
    Template,
    UserClass,
    Conversation,
    TabContent,
    Category,
    Kmf,
    Kmtc,
    HopDong,
    DuAn,
    Company,
    ActionLog,
    SoKeToan,
    SoChuoi,
    DinhKhoanPro,
    DinhKhoanProData,
    DinhKhoanProAuto,
    FileALL,
    MappingCard,
    Lo,
    DetailPhieuXuat,
    DetailPhieuNhap,
    PhieuNhap,
    PhieuXuat,
    HangHoaLoKho,
    HangHoaLo,
    Vas,
    SoQuanLyChiTraTruoc,
    SoQuanLyTaiSan,
    Setting,
    PlCategory,
    BusinessUnit,
    CashFlowCategory,
    Luong,
    MappingLuong,
    ChuongTrinh,
    ChuSoHuu,
    HoaDon,
    TaiSanDauTu,
    KhaiBaoDauKy,
    CauHinh,
    DetailLenhSanXuat,
    LenhSanXuat,
    CCPB,
    DinhMucSP,
    DinhMucNL,
    PBGV2B,
    PBGV3,
    PBLSX,
    LenhSanXuatNL,
    LenhSanXuatSP,
    CanvasContainer,
    AuditLog,
    KTQTTeam,
    KTQTProduct,
    KTQTProject,
    KTQTVendor,
    KTQTCoChePhanBo,
    KTQTKmf,
    KTQTUnit,
    KTQTVas,
    KTQTKmns,
    KTQTSoKeToan,
    KTQTNoteChart,
    KTQTPlan,
    KTQTReportManagement,
    KTQTReportManagementList,
    PhieuChi,
    PhieuThu,
    Progress,
    ProgressStep,
    ProgressTask,
    ProgressTaskPost,
    DonHang,
    DonHangDetail,
    ChiTietPhieuGiaoHang,
    PhieuGiaoHang,
    ChiTietPhieuThu,
    CanvasData,
    CanvasBot,
    CanvasChat,
    CanvasNotepad,
    HoaDonSanPham,
    DonMuaHang,
    DonMuaHangDetail,
    TamUng,
    TamUngDetail,
    DeNghiThanhToan,
    DeNghiThanhToanDetail,
    NoteChart,
    DinhKhoanMap,
    DetailPhieuChi,
    FileNotePad,
    PhieuChi2,
    PhieuChi2Detail,
    Kenh,
    KTQTKenh,
    DataCRM,
    KtqtNhanVien,
    KtqtNhaCungCap,
    KtqtHopDong,
    LeadManagement,
    SettingGroup,
    DieuChuyenKho,
    FileTab,
    DashBoardList,
    CostPool,
    FileChild,
    Tag,
    ReportCanvas,
    CrossCheck,
    Nganh,
    BusinessObjective,
    Metrics,
    DataMapping,
    ResultCrossCheck,
    TemplateData,
    TemplateTable,
    TemplateColumn,
    KpiCalculator,
    NganhReal,
    QuanLyTag,
    Kpi2Calculator,
    PMVSettingKH,
    PMVCategories,
    PMVPlan,
    PMVPlanDetail,
    PMVDeployment,
    PMVDeploymentDetail,
    PMVSkuAllocation,
    TicketGw,
    TagGw,
    CompanyGw,
    MessageGw,
    NotificationGw,
    PermissionGw,
    PMVChuKy,
    CFConfig,
    BCanvasMapping,
    BCanvasDataOriginalRow,
    BCanvasDataOriginal,
    WebPage,
    StoryWebPage,
};
