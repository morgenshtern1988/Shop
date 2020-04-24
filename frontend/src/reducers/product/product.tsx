import {fetchGetProducts} from "../../services/productsApi";

export const productReducer = (state: any = [], action: any) => {
    switch (action.type) {
        case 'INIT_PRODUCT':
            const items = action.payload;
            return [
                ...items
            ];
        default:
            return state;
    }
};

export const getProductThunk = () => {
    return async (dispatch: any) => {
        await fetchGetProducts()
            .then((items) => {
                console.log("удачно");
                const {data} = items;
                dispatch({type: 'INIT_PRODUCT', payload: data});
                // const user = JSON.parse(headers.infouser);
                // console.log("--user--");
                // console.log(user);
                // console.log("--user--");
                // dispatch({type: "@@login/USER_IN_DB", payload: {user}});
            })
            .catch(() => {
                console.log("NE удачно");
                dispatch({type: 'INIT_PRODUCT', payload: []})
            })
    }
};
