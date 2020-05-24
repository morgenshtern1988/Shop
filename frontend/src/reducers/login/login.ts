import {TYPES} from "../../action/login";
import {fetchLPostLogin, fetchGetInfoUser} from "../../services/login";

export let initialState = {
    firstName: "",
    lastName: "",
    role: "",
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
        /*  case TYPES.LOGIN_LOGIN_FAILED: {
              const {data} = action.payload;
              return {
                  ...state,
                  token: {...data},
                  loading: false,
                  error: "error"
              };
          }*/
        case TYPES.LOGIN_USER_IN_DB: {
            const {user} = action.payload;
            return {
                ...state,
                ...user,
            }
        }
        case TYPES.LOGIN_LOGIN_SUCCESS: {
            const {data} = action.payload;
            return {
                ...state,
                token: {...data},
                loading: false
            };
        }
        case TYPES.LOGIN_ERROR: {
            const err = action.payload;
            return {
                ...state,
                error: err,
            };
        }
        default:
            return state;
    }
};

export const singInUser = (data: any) => {
    return async (dispatch: any) => {
        await fetchLPostLogin(data)
            .then(data => {
                if (data.msg) {
                    throw new Error(data.msg)
                } else {
                    localStorage.setItem('token', JSON.stringify(data));
                    dispatch({type: "@@login/LOGIN_SUCCESS", payload: {data}});
                    dispatch({type: "@@login/ERROR", payload: ""})
                    dispatch({type: "@@login/AUTH_VALUE", payload: true});
                }
            })
            .catch((err) => {
                    console.log("словила ошибку:", err.message);
                    dispatch({type: "@@login/ERROR", payload: err.message})
                }
            );
        await fetchGetInfoUser()
            .then((user) => dispatch({type: "@@login/USER_IN_DB", payload: {user}}))
    }
};
