let initialState = {
    pager: {},
    pageOfItems: [],
};
export const pageReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'PAGER':
            const {pager, pageOfItems} = action.payload;
            return {
                ...state,
                pager: pager,
                pageOfItems: pageOfItems,
            };
        default:
            return state;
    }
};
