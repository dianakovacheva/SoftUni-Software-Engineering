import { IUser } from '../interfaces/user';

export interface ITheme {
  _id: string;
  subscribers: string[];
  posts: string[];
  themeName: string;
  userId: IUser;
  created_at: string;
  updatedAt: string;
  __v: number;
}
