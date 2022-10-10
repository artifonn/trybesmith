import express from 'express';
import UserRouter from './routers/userRouters';
import ProductRouter from './routers/productsRouters';

const app = express();

app.use(express.json());

app.use('/products', ProductRouter);
app.use('/users', UserRouter);
export default app;
