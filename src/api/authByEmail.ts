// import axios from "axios"
import {
  CTP_CLIENT_ID,
  CTP_CLIENT_SECRET,
  CTP_PROJECT_KEY,
} from '../constants/commerceApi';
import { LoginData } from './authTypes';
import { getTokenCookie, saveTokenToCookie } from './cookieToken';
import { authInstance } from './index';

export const getAuthEmailToken = async (loginData: LoginData) => {
  const mailToken = getTokenCookie('mail_token');
  // eslint-disable-next-line no-console
  console.log(mailToken);
  if (!mailToken) {
    const response = await authInstance.post(
      `${CTP_PROJECT_KEY}/customers/token`,
      {},
      {
        params: {
          grant_type: 'password',
          username: loginData.username,
          password: loginData.password,
        },
        auth: {
          username: `${CTP_CLIENT_ID}`,
          password: `${CTP_CLIENT_SECRET}`,
        },
      }
    );
    saveTokenToCookie(
      response.data.access_token,
      response.data.expires_in,
      'mail_token'
    );
    return response.data;
  }
  return mailToken;
};
