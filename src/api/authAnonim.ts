import {
  CTP_CLIENT_ID,
  CTP_CLIENT_SECRET,
  CTP_PROJECT_KEY,
} from '../constants/commerceApi';
import { getTokenCookie, saveTokenToCookie } from './cookieToken';
import { authInstance } from './index';

export const getAnonimToken = async () => {
  const anonimToken = getTokenCookie('anonim_token');

  if (!anonimToken) {
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
    saveTokenToCookie(
      data.refresh_token,
      data.expires_in,
      'refresh_token_anonim'
    );
    return data.access_token;
  }
  return anonimToken;
};
