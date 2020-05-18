import {
    deleteProduct,
    fetchAddNewProduct,
    fetchGetProducts,
    sortOnCategoryAndPrice,
    sortProduct
} from "../../services/productsApi";
import {IAddProduct} from "../../types/inrerface";

let initialState = {
    productArr: [],
    paramSort: {
        low: 0,
        high: 0,
        type: {book: false, newspapers: false, magazines: false}
    },
    paramFilter: "",
    stateProduct: {
        name: "",
        description: "",
        type: "",
        author_ids: [],
        authorSelect: "",
        price: Number,
        currency: "",
        cover_image: "",
        countName: 0,
        countDescription: 0,
    },
};

export const productReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'INIT_PRODUCT':
            const {printingEditionArr: prodArr} = action.payload;
            return {
                ...state,
                productArr: prodArr
            };
        case 'STATE_NEW_PRODUCT':
            const data = action.payload;
            // console.log("State:", data);
            return {
                ...state,
                stateProduct: {...state.stateProduct, ...data}
            };
        case 'ADD_NEW_PRODUCT':
            const {data: product} = action.payload;
            return {
                ...state,
                productArr: [...state.productArr, product]
            };
        case "FILTER_PRODUCT_SEARCH":
            const {value, products: p} = action.payload;
            const filterProduct = p.filter((product: any) => product.name.toLowerCase().includes(value.toLowerCase()));
            return {
                ...state,
                productArr: filterProduct,
            };
        case "SORT_PRODUCT_UD_DOWN":
            const {paramFilter} = action.payload;
            return {
                ...state,
                paramFilter: paramFilter,
            };
        case "SORT_PRODUCT":
            const paramSort = action.payload;
            return {
                ...state,
                paramSort: {...state.paramSort, ...paramSort},
            };
        default:
            return state;
    }
};


export const getProductThunk = (currentPage: number) => {
    return async (dispatch: any) => {
        await fetchGetProducts(currentPage)
            .then((items) => {
                const {printingEditionArr, totalPages, currentPage} = items.data;
                console.log("get thunk product");
                // console.log("DATA:", items.data);
                dispatch({
                    type: 'PAGER',
                    payload: {
                        pager: {currentPage: currentPage, totalPages: totalPages.length, pages: totalPages},
                        pageOfItems: printingEditionArr
                    }
                });
            })
            .catch(() => {
                console.log("unsuccessfully received data of DB");
                // dispatch({type: 'INIT_PRODUCT', payload: []})
            })
    }
};

export const sortProductThunk = ({target, currentPage}: any) => {
    return async (dispatch: any) => {
        sortProduct({target, currentPage})
            .then((items) => {
                const {printingEditionArr, totalPages, currentPage} = items.data;
                // console.log("DATA:", items.data);
                console.log("sort product ");
                dispatch({
                    type: 'PAGER',
                    payload: {
                        pager: {currentPage: currentPage, totalPages: totalPages.length, pages: totalPages},
                        pageOfItems: printingEditionArr
                    }
                });
            })
            .catch((err) => console.log(err))
    }
};

export const sortOnCategoryAndPriceThunk = ({stateObj, currentPage}: any) => {
    return async (dispatch: any) => {
        await sortOnCategoryAndPrice({stateObj, currentPage})
            .then((items) => {
                const {printingEditionArr, totalPages, currentPage} = items.data;
                console.log("DATA SORT CATEGOTY:", items);
                dispatch({
                    type: 'PAGER',
                    payload: {
                        pager: {currentPage: currentPage, totalPages: totalPages.length, pages: totalPages},
                        pageOfItems: printingEditionArr
                    }
                });
            })
            .catch((err) => console.log(err))
    }
};


export const deleteBookInDB = (id: string) => {
    return async (dispatch: any) => {
        await deleteProduct(id)
            .then((data) => {
                dispatch({type: 'INIT_PRODUCT', payload: {data}});
                dispatch({type: 'FILTER_PRODUCT_INIT', payload: {data}});
            })
            .catch((err) => console.log(err))
    }
};


export const postAddNewProductThunk = (product: IAddProduct) => {
    return async (dispatch: any) => {
        await fetchAddNewProduct(product)
            .then((data) => {
                console.log("successful received data about new Product of DB ");
                console.log(data);
                dispatch({type: "ADD_NEW_PRODUCT", payload: {data}})
            })
            .catch((e: any) => console.log(e))
    }
};
