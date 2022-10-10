import { sign, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import IUser from '../interface/IUser';

dotenv.config();
const { JWT_SECRET } = process.env;

function generateToken(user: IUser) {
  const { username, classe, level } = user;
  const payload = {
    username,
    classe,
    level,
  };

  const signInOpions: SignOptions = {
    algorithm: 'HS256',
  };

  return sign(payload, String(JWT_SECRET), signInOpions);
}

export default generateToken;