/* eslint-disable no-console */
import {
  CTP_CLIENT_ID,
  CTP_CLIENT_SECRET,
  CTP_PROJECT_KEY,
} from '../constants/commerceApi';
import { authInstance } from './index';

// eslint-disable-next-line consistent-return
export const loginMeCustomer = async () => {
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
    // .then((res) => {
    //   axiosInstance.post(
    //     `/me/signup`,
    //     {},
    //     {
    //       auth: {
    //         token: `Bearer ${res.data.access_key}`,
    //         username: 'mamont87@gmail.com',
    //         password: 'Secret-123',
    //       },
    //     }
    //   );
    // });
    return response;
  } catch (error) {
    console.error(error);
  }
};
