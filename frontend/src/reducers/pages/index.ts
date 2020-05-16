let initialState = {
    pager: {},
    pageOfItems: [],
};
export const pageReducer = (state: any = initialState, action: any) => {
        switch (action.type) {
            case 'PAGER':
                const {pager} = action.payload;
                return {
                    ...state,
                    pager: pager,
                };
            default:
                return state;
        }
    };
