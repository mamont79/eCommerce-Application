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

  // const getEnvVariable = import.meta.env.VITE_REACT_APP_CTP_PROJECT_KEY;

  if (!mailToken) {
    const { data } = await authInstance.post(
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
    // console.log(data);
    saveTokenToCookie(data.access_token, data.expires_in, 'mail_token');
    saveTokenToCookie(data.refresh_token, data.expires_in, 'refresh_token');
    return data;
  }
  return mailToken;
};
