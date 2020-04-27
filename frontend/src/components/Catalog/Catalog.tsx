import React, {useState} from "react";
import Button from "../Button/Button";
import {useDispatch} from "react-redux";

export const Catalog = ({products, defaultProducts}: any) => {
    const [state, setState] = useState({low: "", high: ""});
    const dispatch = useDispatch();

    const searchPrice = () => {
        if (state.low && state.high !== "") {
            const res = products.filter((product: any) => product.price >= state.low && product.price <= state.high);
            dispatch({type: "SORT_PRODUCT", payload: res})
        } else dispatch({type: "SORT_PRODUCT", payload: products})
    };
    return (
        <>
            <h1 className="catalog">Catalog</h1>
            <div className="wrap-catalog ">
                <div className="list-printing d-flex flex-column mb-5">
                    <h4>Category</h4>
                    <label htmlFor="books"><input type="checkbox" id="books"/>Books</label>
                    <label htmlFor="newspapers"><input type="checkbox" id="newspapers"/>Newspapers</label>
                    <label htmlFor="magazines"><input type="checkbox" id="magazines"/>Magazines</label>
                </div>
                <h4 className="mb-3">Price, $</h4>
                <div className="d-flex justify-content-between wrap-price">
                    <input className=" w-25 pl-2" type="text" placeholder="От"
                           onChange={(e: any) => setState({low: e.target.value, high: state.high})}/>
                    <input className="w-25 pl-2 d-flex" type="text" placeholder="До"
                           onChange={(e: any) => setState({low: state.low, high: e.target.value})}/>
                    <Button text="OK" onClick={searchPrice}/>
                </div>
            </div>
        </>
    )
};
