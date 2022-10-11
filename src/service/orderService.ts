import connection from '../models/connection';
import OrderModel from '../models/ordersModel';

class OrderService {
  public orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  public getAll = async () => {
    const result = await this.orderModel.getAll();

    return result;
  };
}

export default OrderService;