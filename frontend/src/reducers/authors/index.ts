import {deleteAuthorInDB, fetchGetAuthors, fetchPostAuthors, getAllAuthorThunk} from "../../services/authorsApi";
import {sortProductAdmin} from "../../services/productsApi";

let initialState = {
    pager: {},
    pageOfItems: [],
    authorsArr: [],
    newAuthor: "",
};

export const authorsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'INIT_AUTHORS':
            const {pager, pageOfItems} = action.payload;
            return {
                ...state,
                pager: pager,
                pageOfItems: pageOfItems,
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
        case 'ALL_AUTHORS':
            let authorsArr = action.payload;
            return {
                ...state,
                authorsArr: authorsArr
            };
        default:
            return state;
    }
};

export const getAuthorsThunk = (currentPage: any) => {
    return async (dispatch: any) => {
        await fetchGetAuthors(currentPage)
            .then((items) => {
                const {author, totalPages, currentPage} = items.data;
                dispatch({
                    type: 'INIT_AUTHORS',
                    payload: {
                        pager: {currentPage: currentPage, totalPages: totalPages.length, pages: totalPages},
                        pageOfItems: author
                    }
                });
            })
            .catch(() => {
                console.log("NE удачно");
                // dispatch({type: 'INIT_AUTHORS', payload: []})
            })
    }
};

export const postAuthorThunk = ({author}: any) => {
    return async (dispatch: any) => {
        await fetchPostAuthors({author})
            .then((author) => {
                dispatch({type: 'ADD_NEW_AUTHORS', payload: {author: author[0]}});
            })
            .catch(() => {
                console.log("NE удачно");
                // dispatch({type: 'INIT_AUTHORS', payload: []})
            })
    }
};

export const deleteAuthorThunk = (id: any) => {
    return async (dispatch: any) => {
        await deleteAuthorInDB(id)
            .then(items => {
                console.log("author delete")
            })
            .catch((err) => console.log(err))
    }
};


export const sortProductAdminThunk = ({value, currentPage}: any) => {
    return async (dispatch: any) => {
        sortProductAdmin({value, currentPage})
            .then((items) => {
                const {printingEditionArr, totalPages, currentPage} = items.data;
                dispatch({
                    type: 'PAGER',
                    payload: {
                        pager: {currentPage: currentPage, totalPages: totalPages.length, pages: totalPages},
                        pageOfItems: printingEditionArr
                    }
                });
            })
            .catch((i: any) => console.log(i))
    }
};

export const getAllAuthorsThunk = () => {
    return async (dispatch: any) => {
        await getAllAuthorThunk()
            .then(items => {
                dispatch({type: "ALL_AUTHORS", payload: items.data})
            })
            .catch((e) => console.log("err:", e))
    }
};
