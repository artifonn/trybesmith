import { Request, Response, NextFunction } from 'express';

import IUser from '../interface/IUser';
import UserService from '../service/userService';
import generateToken from '../AuthJWT/jwt';

class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req:Request, res: Response, next: NextFunction) => {
    try {
      const user = req.body as IUser;

      const result = await this.userService.create(user);
      const token = generateToken(user);

      if (!result) throw new Error('Algo deu errado');

      return res.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;