interface Action {
    type: string,
    payload: object,
}

const initialState = {
    products: [],
};
export const productReducer = (state: any = [], action: Action) => {
    switch (action.type) {
        case 'INIT_PRODUCT':
            return [...state, action.payload];
        case 'FILTER_PRODUCT':
            return [...state, action.payload];
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
