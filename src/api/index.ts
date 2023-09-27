import axios from 'axios';
import {
  CTP_API_URL,
  CTP_AUTH_URL,
  CTP_PROJECT_KEY,
} from '../constants/commerceApi';

export const publicInstance = axios.create({
  baseURL: `${CTP_API_URL}/${CTP_PROJECT_KEY}`,
});

export const authInstance = axios.create({
  baseURL: `${CTP_AUTH_URL}/oauth`,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
