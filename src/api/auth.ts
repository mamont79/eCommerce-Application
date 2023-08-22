// import axios from "axios"
import { CTP_CLIENT_ID, CTP_CLIENT_SECRET } from '../constants/commerceApi';
import { getTokenCookie, saveTokenToCookie } from './cookieToken';
import { authInstance } from './index';

export const getAuthToken = async () => {
  const accessToken = getTokenCookie('access_token');

  if (!accessToken) {
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
    saveTokenToCookie(
      response.data.access_token,
      response.data.expires_in,
      'access_token'
    );
    return response.data.access_token;
  }
  return accessToken;
};
