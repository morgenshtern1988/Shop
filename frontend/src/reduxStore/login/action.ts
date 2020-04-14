export let initialState = {
    email: "",
    password: "",
    loading: false,
    token: "",
    error: "",
    isAuthenticated: false,
};

export const loginReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case `@@login/AUTH_VALUE`: {
            return {
                ...state,
                isAuthenticated: action.payload,
            }
        }
        case `@@login/DO_LOGIN`: {
            return {
                ...state,
                loading: true
            };
        }
        case `@@login/LOGIN_START`: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case `@@login/LOGIN_FAILED`: {
            const {data} = action.payload;
            return {
                ...state,
                data,
                loading: false,
                error: "error"
            };
        }
        case `@@login/LOGIN_SUCCESS`: {
            // const {data} = action.payload;
            return {
                ...state,
                token: action.payload,
                loading: false
            };
        }
        default:
            return state;
    }
};

export const singInUser = (data: any) => {
    return async (dispatch: any) => {
        await fetch("http://localhost:7227/auth/login", {
            method: "POST",
            // mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((result) => {
                if (result.status !== 200) {
                    throw Error
                } else {
                    return result.json().then((token: any) => token)
                }
            })
            .then((token) => {
                localStorage.setItem('token', JSON.stringify(token));
                dispatch({type: "@@login/LOGIN_SUCCESS", payload: token});
                dispatch({type: "@@login/AUTH_VALUE", payload: true})
            })
            .catch((err) => dispatch({type: "@@login/LOGIN_FAILED", payload: {}}))
    }
};

export const isAlive = () => {
    const authToken = JSON.parse(localStorage.getItem('token') || '{}');
    return async (dispatch: any) => {
        await fetch("http://localhost:7227/auth/access-tokens", {
            mode: 'cors',
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": authToken.accessToken,
            },
        })
            .then((result) => {
                if (result.status !== 401) {
                    console.log("token живой");
                } else {
                    dispatch(getRefreshedToken())
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }
};

const getRefreshedToken = () => {
    const authToken = JSON.parse(localStorage.getItem('token') || '{}');
    return async (dispatch: any) => {
        await fetch("http://localhost:7227/auth/refresh-tokens", {
            mode: 'cors',
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": authToken.refreshToken,
            }
        })
            .then((result) => {
                if (result.status !== 200) {
                    throw Error
                } else {
                    return result.json().then((token: any) => token)
                }
            })
            .then((token) => {
                localStorage.setItem('token', JSON.stringify(token));
                dispatch({type: "@@login/LOGIN_SUCCESS", payload: token});
            })
            .catch((e) => {
                // console.log(e);
            })
    }
};


