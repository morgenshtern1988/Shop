interface Action {
    type: string,
    payload: object,
}

export const productReducer = (state: any = [], action: Action) => {
    // console.log(action);
    switch (action.type) {
        case 'INIT_PRODUCT':
            return  action.payload;
        case 'FILTER_PRODUCT':
            return [...state, action.payload];
        default:
            return state;
    }
};
