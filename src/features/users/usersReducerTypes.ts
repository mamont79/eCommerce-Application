export enum UserStatusTypes {
  ERROR = 'ERROR',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
}

export type User = { userName?: string; email?: string; phone?: string };

export interface UsersState {
  user: User;
  status: UserStatusTypes | null;
  message: string | null;
}
