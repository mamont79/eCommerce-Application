import axios from 'axios';
import {
  CTP_API_URL,
  CTP_AUTH_URL,
  CTP_PROJECT_KEY,
} from '../constants/commerceApi';

// const apiUrl = import.meta.env.VITE_CTP_API_URL;
// const authUrl = import.meta.env.VITE_CTP_AUTH_URL
// const projectKey = import.meta.env.VITE_CTP_PROJECT_KEY;

export const publicInstance = axios.create({
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
