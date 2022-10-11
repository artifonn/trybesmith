import { Pool } from 'mysql2/promise';

const database = 'Trybesmith';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async () => {
    const query = `SELECT ORD.id, ORD.userId, JSON_ARRAYAGG(PRO.id) as productsIds
      FROM ${database}.Orders as ORD
        INNER JOIN ${database}.Products as PRO ON ORD.id = PRO.orderId
        GROUP BY ORD.id ORDER BY ORD.userId ASC`;

    const [result] = await this.connection.execute(query);

    return result;
  };
}

export default OrderModel;