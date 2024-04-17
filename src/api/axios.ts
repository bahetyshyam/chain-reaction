import axios from 'axios';
import { backendURL } from '../constants';

export const axiosInstance = axios.create({
  baseURL: backendURL,
});
