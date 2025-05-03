import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BUCKET || 'http://localhost:5000';
console.log('Axios baseURL:', baseURL); // Debug log

// Creating axios client, preconfigured with base url and other fields
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: '*/*',
    'content-type': 'application/json',
  },
});

// Add request interceptor for debugging
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Making request to:', config.baseURL + config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const cancelTokenSource = axios.CancelToken.source();

export default axiosInstance;
