import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interface/IProduct';

class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (product: IProduct): Promise<IProduct | null> => {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES(?, ?)';

    const values = [name, amount];

    const [result] = await this.connection.execute<ResultSetHeader>(query, values);
    const { insertId: id } = result;

    const newProduct: IProduct = { id, name, amount };
    return newProduct || null;
  };

  public getAll = async (): Promise<IProduct[]> => {
    const query = 'SELECT * FROM Trybesmith.Products';

    const [result] = await this.connection.execute(query);

    return result as IProduct[];
  };
}

export default ProductModel;