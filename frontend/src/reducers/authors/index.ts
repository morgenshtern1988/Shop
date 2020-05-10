import {deleteAuthorInDB, fetchGetAuthors, fetchPostAuthors} from "../../services/authorsApi";
import {deleteProduct} from "../../services/productsApi";

let initialState = {
    authorsArr: [],
    newAuthor: "",
};

export const authorsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'INIT_AUTHORS':
            const {authorsArr} = action.payload;
            return {
                ...state,
                authorsArr,
            };
        case 'SET_STATE_NEW_AUTHORS':
            let {author} = action.payload;
            return {
                ...state,
                newAuthor: author,

            };
        case 'ADD_NEW_AUTHORS':
            let {author: a} = action.payload;
            return {
                ...state,
                authorsArr: [...state.authorsArr, a]
            };
        default:
            return state;
    }
};

export const getAuthorsThunk = () => {
    return async (dispatch: any) => {
        await fetchGetAuthors()
            .then((items) => {
                const {data: authorsArr} = items;
                dispatch({type: 'INIT_AUTHORS', payload: {authorsArr}});
                // dispatch({type: 'INIT_AUTHORS', payload: data});
            })
            .catch(() => {
                console.log("NE удачно");
                dispatch({type: 'INIT_AUTHORS', payload: []})
            })
    }
};

export const postAuthorThunk = ({author}: any) => {
    return async (dispatch: any) => {
        await fetchPostAuthors({author})
            .then((author) => {
                // console.log((authorsArr[0]))
                dispatch({type: 'ADD_NEW_AUTHORS', payload: {author: author[0]}});
            })
            .catch(() => {
                console.log("NE удачно");
                // dispatch({type: 'INIT_AUTHORS', payload: []})
            })
    }
};

export const deleteAuthorThunk = (id: string) => {
    return async (dispatch: any) => {
        await deleteAuthorInDB(id)
            .then((authorsArr) => {
                dispatch({type: 'INIT_AUTHORS', payload: {authorsArr}})
            })
            .catch((err) => console.log(err))
    }
};