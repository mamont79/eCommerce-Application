/* eslint-disable no-console */
// import axios from "axios"
import {
  CTP_CLIENT_ID,
  CTP_CLIENT_SECRET,
  CTP_PROJECT_KEY,
} from '../constants/commerceApi';
import { authInstance } from './index';

// eslint-disable-next-line consistent-return
export const getAuthEmailToken = async () => {
  try {
    const response = await authInstance.post(
      `${CTP_PROJECT_KEY}/customers/token`,
      {},
      {
        params: {
          grant_type: 'password',
          username: 'mamont87@gmail.com',
          password: 'Secret-123',
        },
        auth: {
          username: `${CTP_CLIENT_ID}`,
          password: `${CTP_CLIENT_SECRET}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
