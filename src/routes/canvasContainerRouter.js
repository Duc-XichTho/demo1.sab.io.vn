import express from 'express';
import * as canvasContainerController from '../controllers/canvasContainerController.js';

const router = express.Router();

router.get('/', canvasContainerController.getAllCanvasContainerController);

router.post('/', canvasContainerController.createCanvasContainerController);

router.put('/:id', canvasContainerController.updateCanvasContainerController);

router.delete('/:id', canvasContainerController.deleteCanvasContainerController);


export default router;