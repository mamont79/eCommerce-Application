import { ICustomer } from '../../types/customerTypes';

export enum UserStatusTypes {
  ERROR = 'ERROR',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
}

export type User = { userName?: string; email?: string; phone?: string };

export interface UsersState {
  user: ICustomer | null;
  status: UserStatusTypes | null;
  message: string | null;
  isAuth: boolean;
}
