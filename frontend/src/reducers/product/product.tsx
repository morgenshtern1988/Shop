import {fetchGetProducts} from "../../services/productsApi";

export const productReducer = (state: any = [], action: any) => {
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
    const store = JSON.parse(localStorage.getItem("persist:root") as string);
    const product = JSON.parse(store.productReducer);
    switch (action.type) {
        case "FILTER_PRODUCT_INIT":
            const data = action.payload;
            return [
                ...data,
            ];
        case "FILTER_PRODUCT":
            const value = action.payload;
            const filterProduct = product.filter((product: any) => product.name.toLowerCase().includes(value));
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
