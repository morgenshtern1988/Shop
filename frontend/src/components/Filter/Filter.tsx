import React from "react";
import {useDispatch} from "react-redux";
import {sortProductThunk} from "../../reducers/product/product";
import {loadPage} from "../../helpers/pages";

export const Filter = (currentPage: any) => {

    const dispatch = useDispatch();
    const sortList = (event: any) => {
        dispatch({type: "SORT_PRODUCT_UD_DOWN", payload: {paramFilter: event.target.value}});
        let page = loadPage();
        dispatch(sortProductThunk({target: event.target.value, currentPage: page}));
    };

    const searchCurrency = ({target}: any) => {
        // let newArr = [...products];
        // if (target.value !== "DEFAULT") {
        //     newArr = newArr.filter((product: any) => product.currency === target.value);
        //     dispatch({type: "SORT_PRODUCT_UD_DOWN", payload: {newArr}})
        // } else dispatch({type: "SORT_PRODUCT_UD_DOWN", payload: {newArr: defaultProducts}})
    };

    return (
        <div className="d-flex justify-content-end w-100 mb-5 wrap-sort-currency">
            <span>Currency</span>
            <select name="currency" id="currency" onChange={searchCurrency}>
                <option value="DEFAULT">Default</option>
                <option value="USD">USD</option>
                <option value="AUD">AUD</option>
                <option value="BYN">BYN</option>
                <option value="EUR">EUR</option>
                <option value="PLN">PLN</option>
                <option value="UAN">UAN</option>
            </select>
            <span>Sort By</span>
            <select name="sort" id="sort" onChange={(event: any) => sortList(event)}>
                <option value="default">Default</option>
                <option value="down-sort">Price:Low to high</option>
                <option value="up-sort">Price:High to Low</option>
            </select>
        </div>
    )
};
