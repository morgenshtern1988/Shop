let initialState = {
    idShowModalBasket: false,
    showAddAuthor: false,
};
export const modalReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'IS_SHOW_MODAL':
            const {data} = action.payload;
            return {
                ...state,
                idShowModalBasket: data,
            };
        case 'IS_SHOW_MODAL_ADD_AUTHOR':
            const {isDisplay} = action.payload;
            return {
                ...state,
                showAddAuthor: isDisplay,
            };
        default:
            return state;
    }
};

