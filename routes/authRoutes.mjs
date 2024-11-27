import express from 'express';
import { getAccess, getCallBack, findUser } from '../controller/authController.mjs';

const router = express.Router();

router.get("/", getAccess);
router.get("/callback", getCallBack);
router.get("/whoIsThis", findUser);

export default router;