import React, {ChangeEvent, useState} from "react";
import Button from "../Button/Button";
import {useDispatch} from "react-redux";

export const Catalog = ({products, defaultProducts}: any) => {
    const [state, setState] = useState({low: "", high: ""});
    const dispatch = useDispatch();

    const searchPrice = () => {
        if (state.low && state.high !== "") {
            const res = defaultProducts.filter((product: any) => product.price >= state.low && product.price <= state.high);
            dispatch({type: "SORT_PRODUCT", payload: res})
        }
    };
    return (
        <div className="col-lg-3 col-md-3 col-sm-6 col-6 wrap-catalog">
            <div className="list-printing">
                <label htmlFor="books"><input type="checkbox" id="books"/>Books</label>
                <label htmlFor="newspapers"><input type="checkbox" id="newspapers"/>Newspapers</label>
                <label htmlFor="magazines"><input type="checkbox" id="magazines"/>Magazines</label>
            </div>
            <h1>Price, $</h1>
            <input type="text" placeholder="От"
                   onChange={(e: any) => setState({low: e.target.value, high: state.high})}/>
            <input type="text" placeholder="До"
                   onChange={(e: any) => setState({low: state.low, high: e.target.value})}/>
            <Button text="OK" onClick={searchPrice}/>
        </div>
    )
};
