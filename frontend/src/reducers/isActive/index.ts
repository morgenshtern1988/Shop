let initialState = {
    blockCategory: false,
    listProfile: false,
    dashboard: false,
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
        case "VISIBLE_DASHBOARD":
            let {isShowDashboard} = action.payload;
            return {
                ...state,
                dashboard: isShowDashboard,
            };
        default:
            return state;
    }
};
