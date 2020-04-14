let initialState = {
    name: "",
    description: "",
    currency: "",
    cover_image: "",
    type: "",
    price: "",
    removes_at: "",
};

export const productReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'INIT_PRODUCT':
            // const items = action.payload;
            return {
                ...state, ...action.payload
            };
        // case 'FILTER_PRODUCT':
        //     return [...state, 222];
        // return  [...state, ...state.products.filter((product:any) =>console.log(product.name))];
        default:
            return state;
    }
};
export const getProductThunk = () => {
    return async (dispatch: any) => {
        await fetch("http://localhost:7227/admin/printing-edition")
            .then((response) => response.json())
            .then((items) => {
                dispatch({type: 'INIT_PRODUCT', payload: items})
            })
    }
};
