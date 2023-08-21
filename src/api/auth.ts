/* eslint-disable no-console */
// import axios from "axios"
import { CTP_CLIENT_ID, CTP_CLIENT_SECRET } from '../constants/commerceApi';
import { saveTokenToCookie } from './cookieToken';
import { authInstance } from './index';

// eslint-disable-next-line consistent-return
export const getAuthToken = async () => {
  try {
    const response = await authInstance.post(
      `/token?grant_type=client_credentials`,
      {},
      {
        auth: {
          username: `${CTP_CLIENT_ID}`,
          password: `${CTP_CLIENT_SECRET}`,
        },
      }
    );
    saveTokenToCookie(response.data.access_token, response.data.expires_in);
    // const responce = await axiosInstance.get('/customers');
    return response.data.access_token;
  } catch (error) {
    console.error(error);
  }
};
