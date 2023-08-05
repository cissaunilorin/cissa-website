import axios from 'axios';

// Creating axios client, preconfigured with base url and other fields
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BUCKET as string,
  headers: {
    Accept: '*/*',
    'content-type': 'application/json',
  },
});

export const cancelTokenSource = axios.CancelToken.source();

export default axiosInstance;
