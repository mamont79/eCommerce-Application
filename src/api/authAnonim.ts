/* eslint-disable no-console */
import {
  CTP_CLIENT_ID,
  CTP_CLIENT_SECRET,
  CTP_PROJECT_KEY,
} from '../constants/commerceApi';
import { getTokenCookie, saveTokenToCookie } from './cookieToken';
import { authInstance } from './index';

export const getAnonimToken = async () => {
  const accessToken = getTokenCookie('anonim_token');

  if (!accessToken) {
    const { data } = await authInstance.post(
      `${CTP_PROJECT_KEY}/anonymous/token`,
      {},
      {
        params: {
          grant_type: 'client_credentials',
        },
        auth: {
          username: `${CTP_CLIENT_ID}`,
          password: `${CTP_CLIENT_SECRET}`,
        },
      }
    );
    saveTokenToCookie(data.access_token, data.expires_in, 'anonim_token');
    return data.access_token;
  }
  console.log(accessToken);
  return accessToken;
};
