import express from 'express';
import ProductRouter from './routers/productsRouters';

const app = express();

app.use(express.json());

app.use('/products', ProductRouter);

export default app;
