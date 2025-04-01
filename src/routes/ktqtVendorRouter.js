import express from 'express';
import {
    createKTQTVendorController, deleteKTQTVendorController,
    getAllKTQTVendorController,
    getKTQTVendorByIdController, updateKTQTVendorController
} from "../controllers/ktqtVendorController.js";

const router = express.Router();

router.post('/', createKTQTVendorController);

router.get('/', getAllKTQTVendorController);

router.put('/', updateKTQTVendorController);

router.delete('/:id', deleteKTQTVendorController);

router.get('/:id', getKTQTVendorByIdController);

export default router;
