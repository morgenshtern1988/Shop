// interface Action {
//     type: string,
//     payload: object,
// }
export const productReducer = (state: any = [] , action: any) => {
    switch (action.type) {
        case 'INIT_PRODUCT':
            return [ ...state, action.payload];
        case 'FILTER_PRODUCT':
            return  [...state, 222];
            // return  [...state, ...state.products.filter((product:any) =>console.log(product.name))];
        default:
            return state;
    }
};
export const getProductThunk = (url: string) => {
    return async (dispatch: any) => {
        await fetch(url)
            .then((response) => response.json())
            .then((items) => dispatch({type: 'INIT_PRODUCT', payload: items}))
    }
};
