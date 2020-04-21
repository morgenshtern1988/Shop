import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

const api = () => {

    const instance = axios;
    instance.defaults.baseURL = 'http://localhost:8888';

    /// requset interceptor
    instance.interceptors.request.use(
        (config: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
            const token = JSON.parse(localStorage.getItem("token") as string);
            config.headers = {
                Authorization: token && token.accessToken ? token.accessToken : ''
            };
            // console.log('Request: ', config);
            return config;
        });

    instance.interceptors.response.use(
        (response: AxiosResponse): AxiosResponse | Promise<AxiosResponse> => response,
        async (error: AxiosError) => {
            const originalRequest: AxiosRequestConfig = error.config;
            // console.log(originalRequest);
            if (
                error.response &&
                error.response.status === 401 &&
                localStorage.getItem('token') !== null &&
                window.location.pathname !== '/auth/login' &&
                window.location.pathname !== '/auth/register'
            ) {
                const authToken = JSON.parse(localStorage.getItem('token') || '{}');
                const refreshedToken = await fetch("http://localhost:8888/auth/refresh-tokens", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": authToken.refreshToken,
                    }
                }).then(res => res.json().then((token: any) => token));
                localStorage.setItem('token', JSON.stringify(refreshedToken));
                // console.log(refreshedToken);
                instance.defaults.headers.Authorization = refreshedToken.refreshToken;
                return instance(originalRequest);
            }
            return error;
        });
    return instance;
};

export default api();
