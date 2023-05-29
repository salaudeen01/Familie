import { notification } from "antd"
import axios from "axios"
// import { MessageSquare } from "lucide"

let headers = {}

// const baseURL = '/'http://52.86.132.19:3001
const baseURL = 'http://52.86.132.19:3001/admin'
// const baseURL = 'http://52.86.132.19:3001/'

const axiosInstance = (history: any) =>{
  const axiosInstance = axios.create({
    baseURL, headers
  })
  axiosInstance.interceptors.request.use(
    async config => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
        // config.headers.AccessToken = accessToken;
      }
      config.headers.Accept = 'application/json';
      config.headers['Content-Type'] = 'application/json';
  
      return config;
    },
    error => {
      Promise.reject(error);
    },
  );
          
  axiosInstance.interceptors.response.use(
      response =>
        new Promise((resolve, reject) => {
          resolve(response);
        }),
      error => {
        if (!error.response) {
          //error not from server
          return new Promise((resolve, reject) => {
            reject(error);
          });
        }
        if (error.response?.status === 401 || error.response?.status === 403) {
          localStorage.removeItem('accessToken');
          history ? history('/login') : window.location.href = '/login';
          notification.error({
            message: 'Token has expired, please re-login to continue.',
            duration: 1,
            key: 'updatable',
          })
          return new Promise((resolve, reject) => {
            reject(error);
          });
        } else {
          return new Promise((resolve, reject) => {
            reject(error);
          });
        }
      },
  );
  return axiosInstance;
}


export const formatCurrency = (num: string | undefined) => {
  if (num !== undefined) {
    return parseFloat(num)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  return 0
}

export default axiosInstance;