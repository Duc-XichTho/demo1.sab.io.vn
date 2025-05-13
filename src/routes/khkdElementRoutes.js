import express from "express";
import { khkdElementController } from "../controllers/khkdElementController.js";

const router = express.Router();

// KHKDElement routes
router.post("/", khkdElementController.create);
router.get("/khkd/:khkdId", khkdElementController.findByKHKDId);           // cụ thể hơn
router.get("/khoan-muc/:khoanMuc", khkdElementController.findAllByKhoanMuc); // cụ thể hơn
router.get("/:id", khkdElementController.findById);                         // để cuối cùng
router.get("/", khkdElementController.findAll);
router.put("/:id", khkdElementController.update);
router.delete("/:id", khkdElementController.delete);


export default router; 