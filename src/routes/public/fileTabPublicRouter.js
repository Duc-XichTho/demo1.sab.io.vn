import express from "express";
import { FileTab } from "../../postgres/postgres.js";

const router = express.Router();

// GET or CREATE fileTab with position 1000
router.get("/check", async (req, res) => {
  try {
    let fileTab = await FileTab.findOne({ where: { position: 1000, type: "data", show: true } });
    if (!fileTab) {
      fileTab = await FileTab.create({
        hide: false,
        hide2: false,
        key: "Data automation-1000",
        label: "Data automation",
        alt: "Data automation",
        position: 1000,
        position2: null,
        table: "all",
        type: "data",
        show: true,
        show2: true
      });
    }
    res.json(fileTab);
  } catch (error) {
    res.status(500).json({ message: "Lỗi: " + error.message });
  }
});

export default router; 