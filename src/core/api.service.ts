import axios, { AxiosError } from 'axios';
import { useAuthStore } from '../store/auth/auth.store';
import authSrvice from '../services/auth/auth.srvice';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });


api.interceptors.request.use((request) => {
    const token = authSrvice.getAccessToken()
    
    if(token) {
        request.headers['Authorization'] = `Bearer ${token}`;
    }

    return request;
},
error => {
    return Promise.reject(error);
});

api.interceptors.response.use((response) => response,
async (error : AxiosError) => {
    const authStore = useAuthStore();

    if(error.response?.status === 401 && !authStore.wasRefresh && error.config){
        authStore.wasRefresh = true;

        try{
            await authSrvice.refreshTokens()
            const newResult = await api(error.config);
            return newResult;
        }
        catch(error){
            location.assign("/auth/login")
        }
        finally{
            authStore.wasRefresh = false;
        }
    }

    return Promise.reject(error);
});

export default api;