import express from 'express';
import { getAllUsers, login, signup } from '../controllers/user-controller';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/sign-up', signup);
router.post('/login', login);
export default router;
