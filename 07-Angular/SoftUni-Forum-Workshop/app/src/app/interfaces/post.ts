import { IUser } from '../interfaces/user';
import { ITheme } from '../interfaces/theme';

export interface IPost {
  _id: string;
  likes: string[];
  text: string;
  userId: IUser;
  themeId: ITheme;
  created_at: string;
  updatedAt: string;
  __v: number;
}
