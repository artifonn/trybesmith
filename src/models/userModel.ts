import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interface/IUser';

const databaseUser = 'Trybesmith.Users';

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (user: IUser): Promise<IUser | null> => {
    const { username, classe, level, password } = user;

    const query = `INSERT INTO ${databaseUser} ( username, classe, level, password)
      VALUES (?, ?, ?, ?)`;
    const values = [username, classe, level, password];

    const [result] = await this.connection.execute<ResultSetHeader>(query, values);
    const { insertId: id } = result;
    const newUser: IUser = { id, username, classe, level, password };
    return newUser || null;
  };
}

export default UserModel;