import { Request, Response, NextFunction } from 'express';
import OrderService from '../service/orderService';

class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.orderService.getAll();
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
}

export default OrderController;