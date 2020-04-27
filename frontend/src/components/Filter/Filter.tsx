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
    const searchCurrency = () => {
        
    }
    return (
        <div className="row justify-content-end">
            <div>
                <span>Currency</span>
                <select name="currency" id="currency" onChange={searchCurrency}>
                    <option value="USD">USD</option>
                    <option value="AUD">AUD</option>
                    <option value="BYN">BYN</option>
                    <option value="GPP">GPP</option>
                    <option value="PLN">PLN</option>
                    <option value="UAN">UAN</option>
                </select>
            </div>
            <div>
                <span>Sort By</span>
                <select name="sort" id="" onChange={sortList}>
                    <option value="default">Default</option>
                    <option value="down-sort">Price:Low to high</option>
                    <option value="up-sort">Price:High to Low</option>
                </select>
            </div>
        </div>
    )
};
