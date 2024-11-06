import express from 'express';
import listPRsRoute from './routes/listPRsRoute.mjs';
import mongo from './db/connection.mjs';

const app = express();

mongo.connect();

app.use('/getPRs', listPRsRoute);

export default app;
