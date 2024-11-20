import express from 'express';
import listPRsRoute from './routes/listPRsRoute.mjs';
import authRoutes from './routes/authRoutes.mjs'
import mongo from './db/connection.mjs';

const app = express();

mongo.connect();

app.use('/getPRs', listPRsRoute);
app.use('/auth', authRoutes);

export default app;
