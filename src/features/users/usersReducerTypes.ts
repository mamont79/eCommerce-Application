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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  message: any | null;
  isAuth: boolean;
}
