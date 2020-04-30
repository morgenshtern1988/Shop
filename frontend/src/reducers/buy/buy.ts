let initialState = {
    productArr: [],
    totalPrice: 0,
    totalCount: 0,
};

export const buyReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'BUY_PRODUCT':
            let {productArr, totalCount, totalPrice} = action.payload;
            return {
                ...state,
                productArr: productArr,
                totalPrice: totalPrice,
                totalCount: totalCount

            };
        default:
            return state;
    }
};

