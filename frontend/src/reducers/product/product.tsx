import {fetchGetProducts} from "../../services/productsApi";

let initialState = [1];

export const productReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'INIT_PRODUCT':
            const data = action.payload;
            return [
                ...data,
            ];
        default:
            return state;
    }
};

export const filterReducer = (state: any = [], action: any) => {
    const store = JSON.parse(localStorage.getItem("persist:root" || '{}') as string);
    switch (action.type) {
        case "FILTER_PRODUCT_INIT":
            const data = action.payload;
            return [
                ...data,
            ];
        case "FILTER_PRODUCT":
            const product = JSON.parse(store.productReducer);/////////
            const value = action.payload;
            const filterProduct = product.filter((product: any) => product.name.toLowerCase().includes(value.toLowerCase()));
            return [
                ...filterProduct,
            ];
        case "SORT_PRODUCT":
            const products = action.payload;
            return [
                ...products,
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
                dispatch({type: 'FILTER_PRODUCT_INIT', payload: data});
            })
            .catch(() => {
                console.log("NE удачно");
                dispatch({type: 'INIT_PRODUCT', payload: []})
            })
    }
};
