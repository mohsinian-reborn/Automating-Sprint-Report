import express from 'express';
import { getAccess, getCallBack } from '../controller/authController.mjs';

const router = express.Router();

router.get("/", getAccess);
router.get("/callback", getCallBack);

export default router;