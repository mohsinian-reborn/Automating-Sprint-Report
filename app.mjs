import express from 'express';
import listPRsRoute from './routes/listPRsRoute.mjs'

const app = express();

app.use('/getPRs', listPRsRoute);

export default app;