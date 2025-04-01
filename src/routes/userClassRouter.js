import express from 'express';
import * as userClassController from '../controllers/userClassController.js';

const router = express.Router();

router.get('/', userClassController.getAllUserClassController);
router.get('/userpermissions', userClassController.getUserClassByEmailController);
router.get('/:id', userClassController.getUserClassByIdController);
router.post('/', userClassController.createUserClassController);
router.put('/:id', userClassController.updateUserClassController);
router.delete('/:id', userClassController.deleteUserClassController);

export default router;
