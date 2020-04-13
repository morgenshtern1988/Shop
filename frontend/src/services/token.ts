export async function getValidAccessToken() {
    const tokenStorage = localStorage.getItem('token');
    let fakeAuth = {
        isAuthenticated: false,
    };
    if (tokenStorage !== null) {
        const token = JSON.parse(tokenStorage);
        const accessToken = {
            accessToken: token.accessToken,
        };
        await fetch("http://localhost:7227/auth/access-tokens", {
            method: "POST",
            // mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(accessToken)
        })
            .then((result) => {
                console.log(result);
                if (result.status !== 401) {
                    fakeAuth.isAuthenticated = true;
                    console.log("token живой");
                } else {
                    console.log("status 401");
                    getRefreshToken()
                }
            })
            .catch((e) => {
                console.log("ошибка");
            });

        async function getRefreshToken() {
            const refreshToken = {
                refreshToken: token.refreshToken
            };
            await fetch("http://localhost:7227/auth/refresh-tokens", {
                method: "POST",
                // mode: 'cors',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(refreshToken)
            })
                .then((result) => {
                    result.json().then((token: any) => localStorage.setItem('token', JSON.stringify(token)));
                    console.log("обновили пару токинов");
                    fakeAuth.isAuthenticated = true;
                })
                .catch((e) => {
                    console.log(e);
                    fakeAuth.isAuthenticated = false;
                })
        }
        return fakeAuth.isAuthenticated
    }
    return fakeAuth.isAuthenticated

}
