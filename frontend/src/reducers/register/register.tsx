import {TYPES} from "../../action/register";

let initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: "",
};

export const registerReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case TYPES.REGISTER_ADD_NEW_USER:
            const {newUser} = action.payload;
            return {
                ...state,
                ...newUser
            };
        case TYPES.REGISTER_REGISTER_START:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export const postUserAddDb = (url: string, data: any) => {
    return async (dispatch: any) => {
        await fetch(url, {
            method: "POST",
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((result) => {
                console.log(result);
                return result.json().then((newUser: any) => newUser)
            })
            .then((newUser) => {
                dispatch({type: "@@register/ADD_NEW_USER", payload: newUser});
            })
            .catch((e) => {
                console.log(e);
            })
    }
};