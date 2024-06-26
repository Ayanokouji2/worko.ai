import { Router } from 'express';
import * as userController from '../controller/user.controller';
import authenticate from '../middleware/auth.middleware';

const router = Router();

router.use(authenticate);
router.get('/', userController.getUsers);
router.get('/:userId', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:userId', userController.updateUser);
router.patch('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);

export default router;
