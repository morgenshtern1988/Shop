import React, {useEffect, useState} from "react";
import Button from "../Button/Button";
import {useDispatch} from "react-redux";

export const Catalog = ({products, defaultProducts}: any) => {

    const [state, setState] = useState({low: "", high: ""});
    const [stateCategory, setStateCategory] = useState({book: "", newspapers: "", magazines: ""});

    const dispatch = useDispatch();

    const searchPriceAndCategory = () => {
        const product = [...products];
        const newArr = [...stateCategory.book, ...stateCategory.newspapers, ...stateCategory.magazines];
        if (newArr.length) {
            if (state.low && state.high !== "") {
                const res = newArr.filter((product: any) => product.price >= state.low && product.price <= state.high);
                dispatch({type: "SORT_PRODUCT", payload: res})
            } else dispatch({type: "SORT_PRODUCT", payload: products})
        } else {
            const res = product.filter((product: any) => product.price >= state.low && product.price <= state.high);
            dispatch({type: "SORT_PRODUCT", payload: res})
        }
    };

    const checkBtn = (e: any) => {
        const {target} = e;
        if (target.id === "Book") {
            if (target.checked) {
                const res = defaultProducts.filter((product: any) => product.type === target.id);
                setStateCategory({book: res, newspapers: stateCategory.newspapers, magazines: stateCategory.magazines})
            } else {
                setStateCategory({book: "", newspapers: stateCategory.newspapers, magazines: stateCategory.magazines})
            }
        }
        if (target.id === "Newspapers") {
            if (target.checked) {
                const res = defaultProducts.filter((product: any) => product.type === target.id);
                setStateCategory({book: stateCategory.book, newspapers: res, magazines: stateCategory.magazines})
            } else {
                setStateCategory({book: stateCategory.book, newspapers: "", magazines: stateCategory.magazines})
            }
        }
        if (target.id === "Magazines") {
            if (target.checked) {
                const res = defaultProducts.filter((product: any) => product.type === target.id);
                setStateCategory({book: stateCategory.book, newspapers: stateCategory.newspapers, magazines: res})
            } else {
                setStateCategory({book: stateCategory.book, newspapers: stateCategory.newspapers, magazines: ""})
            }
        }
    };

    // useEffect(() => {
    //     console.log(stateCategory)
    // });


    return (
        <>
            <h1 className="catalog">Catalog</h1>
            <div className="wrap-catalog ">
                <div className="list-printing d-flex flex-column mb-5">
                    <h4>Category</h4>
                    <label htmlFor="Book"><input type="checkbox" id="Book" className="check"
                                                 onChange={checkBtn}/>Books</label>
                    <label htmlFor="Newspapers"><input type="checkbox" id="Newspapers"
                                                       className="check"
                                                       onChange={checkBtn}/>Newspapers</label>
                    <label htmlFor="Magazines"><input type="checkbox" id="Magazines"
                                                      className="check"
                                                      onChange={checkBtn}/>Magazines</label>
                </div>
                <h4 className="mb-3">Price, $</h4>
                <div className="d-flex justify-content-between wrap-price">
                    <input className=" w-25 pl-2" type="text" placeholder="От"
                           onChange={(e: any) => setState({low: e.target.value, high: state.high})}/>
                    <input className="w-25 pl-2 d-flex" type="text" placeholder="До"
                           onChange={(e: any) => setState({low: state.low, high: e.target.value})}/>
                    <Button innerText="OK" onClick={searchPriceAndCategory}/>
                </div>
            </div>
        </>
    )
};
