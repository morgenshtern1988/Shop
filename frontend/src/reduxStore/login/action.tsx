import {store} from "../index";

export let initialState = {
    email: "",
    password: "",
    loading: false,
    error: "",
};

export const loginReducer = (state: any = {}, action: any) => {

    switch (action.type) {
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
            const {data} = action.payload;
            return {
                ...state,
                token: data,
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
                if (result.status === 200) {
                    const data = result.text().then(token => token);
                    dispatch({type: "@@login/LOGIN_SUCCESS", payload: {data}})
                } else dispatch({type: "@@login/LOGIN_FAILED", payload: {}})
            })
    }
};


// .then((result) => {
// if (result.status === 200) {
//     const data = result.text().then((token) => token);
//     console.log("success");
//     return {type: "@@login/LOGIN_SUCCESS", payload: {data:data}}
// };
