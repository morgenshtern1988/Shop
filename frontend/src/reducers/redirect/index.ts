export const redirectReducer = (state: any = {}, action: any) => {
    switch (action.type) {
        case 'REDIRECT_NEW_LINK':
            const items = action.payload;
            return {
                // ...state,
                ...items
            };
        default:
            return state;
    }
};
