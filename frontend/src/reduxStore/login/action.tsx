let initialState = {
    email: "",
    password: "",
    loading: false,
    error: "",
};

export const loginReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case `@@login/DO_LOGIN`: {
            return {
                ...state,
                loading: true
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
//export const login = (state:any) => state.login;

// export const singInUser = async (url: string, data: any) => {
//     const result = await fetch(url, {
//         method: "POST",
//         mode: 'cors',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     });
//     if (result.status === 200) {
//
//     }
//
// };
//генерировать имя фамилип пользователя в шапке
