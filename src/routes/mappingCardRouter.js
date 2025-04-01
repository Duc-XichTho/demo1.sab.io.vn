import express from 'express';
import {
    createMappingCardController, deleteMappingCardController,
    getAllMappingCardController,
    getMappingCardByIdController, updateMappingCardController
} from "../controllers/mappingCardController.js";

const router = express.Router();

router.post('/', createMappingCardController);

router.get('/', getAllMappingCardController);

router.put('/', updateMappingCardController);

router.delete('/:id', deleteMappingCardController);

router.get('/:id', getMappingCardByIdController);

export default router;
