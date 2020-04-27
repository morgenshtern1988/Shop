import React from "react";
import {useDispatch} from "react-redux";

export const Filter = ({products, defaultProducts}: any) => {

    const dispatch = useDispatch();
    const sortList = (event: any) => {
        const {target} = event;
        let newArr = [...products];
        newArr.sort((a, b): any => {
            if (target.value === 'default') return newArr = defaultProducts;
            if (a.price < b.price) return target.value === 'up-sort' ? -1 : 1;
            if (a.price > b.price) return target.value === 'up-sort' ? 1 : -1;
            if (a.price === b.price) return 0;
        });
        dispatch({type: "SORT_PRODUCT", payload: newArr});
    };
    const searchCurrency = ({target}: any) => {
        if (target.value !== "DEFAULT") {
            const sortArr = defaultProducts.filter((product: any) => product.currency === target.value);
            dispatch({type: "SORT_PRODUCT", payload: sortArr})
        } else dispatch({type: "SORT_PRODUCT", payload: defaultProducts})
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
                <select name="sort" id="sort" onChange={sortList}>
                    <option value="default">Default</option>
                    <option value="down-sort">Price:Low to high</option>
                    <option value="up-sort">Price:High to Low</option>
                </select>
        </div>
    )
};
