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
                dispatch({type: 'INIT_PRODUCT', payload: items})
            })
            .catch(()=>{
                dispatch({type: 'INIT_PRODUCT', payload: []})
            })
    }
};
