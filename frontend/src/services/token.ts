import axios from 'axios';

axios.interceptors.response.use(response => {
    return response;
}, err => {
    return new Promise((resolve, reject) => {
        const originalReq = err.config;
        if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
            originalReq._retry = true;
            const authToken = JSON.parse(localStorage.getItem('token') || '{}');
            const refreshToken = authToken.refreshToken;
            const accessToken = authToken.refreshToken;
            let res = fetch("http://localhost:7227/auth/access-tokens", {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'Device': 'device',
                    'Token': accessToken
                },
                redirect: 'follow',
                referrer: 'no-referrer',
                body: JSON.stringify({
                    token: accessToken,
                    refresh_token: refreshToken
                }),
            }).then(res => res.json()).then(res => {
                console.log(res);
                // localStorage.setItem('token', JSON.stringify(token));
                // setSession({token: res.token, refresh_token: res.refresh});
                originalReq.headers['Token'] = res.token;
                originalReq.headers['Device'] = "device";
                return axios(originalReq);
            });
            resolve(res);
        }
        return Promise.reject(err);
    });
});
