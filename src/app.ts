import express from 'express';
import UserRouter from './routers/userRouters';
import ProductRouter from './routers/productsRouters';
import OrderRouter from './routers/orderRouters';

const app = express();

app.use(express.json());

app.use('/products', ProductRouter);
app.use('/users', UserRouter);
app.use('/orders', OrderRouter);

export default app;
