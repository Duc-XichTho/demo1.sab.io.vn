import {createHoaDonSanPham, getAllHoaDonSanPhamByHoaDonId} from "../services/hoaDonSanPhamService.js";

// GET
export const getAllHoaDonSanPhamByHoaDonIdController = async (req, res) => {
    try {
        const dataList = await getAllHoaDonSanPhamByHoaDonId(req.params.id);
        res.status(200).json(dataList);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// CREATE
export const createHoaDonSanPhamController = async (req, res) => {
    try {
        const newData = req.body;
        const data = await createHoaDonSanPham(newData);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};