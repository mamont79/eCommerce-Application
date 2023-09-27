import { CTP_CLIENT_ID, CTP_CLIENT_SECRET } from '../constants/commerceApi';
import { getTokenCookie, saveTokenToCookie } from './cookieToken';
import { authInstance } from './index';

export const getAuthToken = async () => {
  const accessToken = getTokenCookie('access_token');

  if (!accessToken) {
    const { data } = await authInstance.post(
      `/token`,
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
    saveTokenToCookie(data.access_token, data.expires_in, 'access_token');
    return data.access_token;
  }
  return accessToken;
};
