let initialState = {
    blockCategory: false,
};

export const isActiveReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'VISIBLE_BLOCK':
            let {isShow} = action.payload;
            return {
                ...state,
                blockCategory: isShow,
            };
        default:
            return state;
    }
};

