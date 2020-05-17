import {deleteProduct, fetchAddNewProduct, fetchGetProducts} from "../../services/productsApi";
import {IAddProduct} from "../../types/inrerface";

let initialState = {
    productArr: [],
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
            const {data: prodArr} = action.payload;
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
        case "SORT_PRODUCT":
            const {res: products} = action.payload;
            return {
                ...state,
                productArr: products,
            };
        case "SORT_PRODUCT_UD_DOWN":
            const {newArr} = action.payload;
            return {
                ...state,
                productArr: newArr,
            };
        default:
            return state;
    }
};


export const getProductThunk = () => {
    return async (dispatch: any) => {
        await fetchGetProducts()
            .then((items) => {
                const {data} = items;
                const {printingEditionArr, totalPages} = data;
                console.log("удачно", data);
                dispatch({type: 'INIT_PRODUCT', payload: {printingEditionArr}});
                dispatch({type: 'PAGER', payload: {pager: {currentPage: totalPages}}});
            })
            .catch(() => {
                console.log("unsuccessfully received data of DB");
                // dispatch({type: 'INIT_PRODUCT', payload: []})
            })
    }
};

export const deleteBookInDB = (id: string) => {
    return async (dispatch: any) => {
        await deleteProduct(id)
            .then((data) => {
                // console.log("New Arr iz DB", data);
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
