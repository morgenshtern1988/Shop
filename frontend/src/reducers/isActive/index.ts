let initialState = {
    blockCategory: false,
    listProfile: false,
};

export const isActiveReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'VISIBLE_BLOCK':
            let {isShow} = action.payload;
            return {
                ...state,
                blockCategory: isShow,
            };
        case "VISIBLE_LIST_PROFILE":
            let {isShowProfile} = action.payload;
            return {
                ...state,
                listProfile: isShowProfile,
            };
        default:
            return state;
    }
};
