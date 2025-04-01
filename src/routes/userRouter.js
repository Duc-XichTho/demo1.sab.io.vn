import express from 'express';
import * as userController from '../controllers/userController.js';

const router = express.Router();

router.get('/', userController.getAllUserController);
router.get('/profile', userController.getUserByEmailController);
router.post('/', userController.createUserController);
router.put('/:email', userController.updateUserController);
router.delete('/', userController.deleteUserController);

export default router;