let initialState = {
    blockCategory: false,
    listProfile: false,
    dashboard: false,
    blockStatus:false,
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
        case "VISIBLE_STATUS":
            let {isShowStatus} = action.payload;
            return {
                ...state,
                blockStatus: isShowStatus,
            };
        default:
            return state;
    }
};
