import express from 'express';
import {getAll} from '../controller/PRcontroller.mjs';

const router = express.Router();

router.get('/all', getAll);

export default router;