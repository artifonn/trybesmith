import connection from '../models/connection';
import IUser from '../interface/IUser';
import UserModel from '../models/userModel';

class UserService {
  public userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  public create = async (user: IUser) => {
    const result = await this.userModel.create(user);

    return result;
  };
}

export default UserService;