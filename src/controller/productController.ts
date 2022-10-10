import { Request, Response, NextFunction } from 'express';
import IProduct from '../interface/IProduct';
import ProducService from '../service/productService';

class ProductController {
  constructor(private productService = new ProducService()) {}

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const Product = req.body as IProduct;
      const result = await this.productService.create(Product);

      return res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };

  public getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.productService.getAll();

      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}

export default ProductController;