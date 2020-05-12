import {fetchGetUser} from "../../services/user";
import {TYPES} from "../../action/user";

let initialState = {
    userArr: [],
};

export const userReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case TYPES.INIT_USER:
            let {userArr} = action.payload;
            return {
                ...state,
                userArr: userArr,

            };
        default:
            return state;
    }
};

export const getUserThunk = () => {
    return async (dispatch: any) => {
        await fetchGetUser()
            .then((userArr: void) => {
                dispatch({type: "INIT_USER", payload: {userArr}})
            })
            .catch((err) => {
                console.log("ERR:", err)
            })
    }
};
