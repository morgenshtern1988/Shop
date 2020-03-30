interface Action {
    type: string,
    payload: object,
}

export const userReducer = (state: any = [], action: Action) => {
    // console.log(action);
    switch (action.type) {
        case 'INIT_USER':
            return  action.payload;
        default:
            return state;
    }
};
