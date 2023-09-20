import axios from 'axios';
import {
  CTP_API_URL,
  CTP_AUTH_URL,
  CTP_PROJECT_KEY,
} from '../constants/commerceApi';

export const publicInstance = axios.create({
  baseURL: `${CTP_API_URL}/${CTP_PROJECT_KEY}`,
  // timeout: 5000,
  // headers: { 'Content-Type': 'application/json' },
});

export const authInstance = axios.create({
  baseURL: `${CTP_AUTH_URL}/oauth`,
  // timeout: 5000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
