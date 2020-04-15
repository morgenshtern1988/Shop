import {fetchGetProducts} from "../../services/productsApi";

export const productReducer = (state: any = [], action: any) => {
    switch (action.type) {
        case 'INIT_PRODUCT':
            const items = action.payload;
            return [
                ...items
            ];
        // case 'FILTER_PRODUCT':
        //     return [...state, 222];
        // return  [...state, ...state.products.filter((product:any) =>console.log(product.name))];
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
