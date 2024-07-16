import axios from "axios";
import { useCommonStore } from '@/_stores';

export const http = axios.create({
    // baseURL: `${import.meta.env.VITE_LOCAL_URL}`,
    baseURL: `${import.meta.env.VITE_API_URL}`,
    headers: {
        "Content-Type": "application/json",
    },
});

http.interceptors.request.use(
    (resp) => {
        const commonStore = useCommonStore();
        const isAuthenticated = commonStore.isAuthenticated;
        const matches = resp.url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
        const domain = matches && matches[1];
        if (isAuthenticated) {
            const token = commonStore.auth_token;
            resp.headers.Authorization = `Bearer ${token}`;
        }
        return resp;
    },
    (error) => {
        Promise.reject(error);
    }
);

http.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";


