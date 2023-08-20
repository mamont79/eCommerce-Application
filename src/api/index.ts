import axios from 'axios';
import {
  CTP_API_URL,
  CTP_AUTH_URL,
  CTP_PROJECT_KEY,
} from '../constants/commerceApi';

export const axiosInstance = axios.create({
  baseURL: `${CTP_API_URL}/${CTP_PROJECT_KEY}`,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

export const authInstance = axios.create({
  baseURL: `${CTP_AUTH_URL}/oauth`,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
