import express from 'express';
import {getAll, getOpen} from '../controller/PRcontroller.mjs';

const router = express.Router();

router.get('/all', getAll);
router.get('/open',getOpen);

export default router;