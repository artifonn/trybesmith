import { Router } from 'express';
import ProductController from '../controller/productController';

const router = Router();

const productController = new ProductController();

router.post('/', productController.create);
router.get('/', productController.getAll);

export default router;