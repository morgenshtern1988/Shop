export const buyReducer = (state: any = [], action: any) => {
    switch (action.type) {
        case 'BUY_PRODUCT':
            const {data} = action.payload;
            return [
                ...state,
                data,
            ];
        default:
            return state;
    }
};

