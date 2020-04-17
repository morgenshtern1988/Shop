import {TYPES} from "../../action/login";

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
        case TYPES.LOGIN_AUTH_VALUE: {
            return {
                ...state,
                isAuthenticated: action.payload,
            }
        }
        case TYPES.LOGIN_DO_LOGIN: {
            return {
                ...state,
                loading: true
            };
        }
        case TYPES.LOGIN_LOGIN_START: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case TYPES.LOGIN_LOGIN_FAILED: {
            const {data} = action.payload;
            return {
                ...state,
                data,
                loading: false,
                error: "error"
            };
        }
        case TYPES.LOGIN_LOGIN_SUCCESS: {
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
        await fetch("http://localhost:8888/auth/login", {
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
