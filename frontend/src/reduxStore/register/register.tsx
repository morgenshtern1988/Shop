let initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
};

export const registerReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case '@@register/ADD_NEW_USER':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export const postUserAddDb = async (url: string, data: any) => {
    console.log(data);
    await fetch(url, {
        method: "POST",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response=>console.log(response.json()))

};

/*
export const postUserThunk = (url: string) => {
    return async (dispatch: any) => {
        await fetch(url,{
            method:"POST",
            body:JSON.stringify(dispatch.payload),
        })
            .then((response) => response.json())
            .then((items) => dispatch({type: 'ADD_NEW_USER', payload: items}))
    }
};
*/

