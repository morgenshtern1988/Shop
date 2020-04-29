let initialState = {
    idShowModalBasket: false,
};
export const modalReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'IS_SHOW_MODAL':
            const data = action.payload;
            return {
                ...state,
                ...data,
            };
        default:
            return state;
    }
};

