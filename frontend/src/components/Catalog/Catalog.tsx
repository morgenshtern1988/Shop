import React, {useEffect, useState} from "react";
import Button from "../Button/Button";
import {useDispatch} from "react-redux";
import {filterCategory} from "../../infrastructure/FilterCategory";

export const Catalog = ({products, defaultProducts}: any) => {

    const [state, setState] = useState({low: "", high: ""});
    const [stateCategory, setStateCategory] = useState({book: "", newspapers: "", magazines: ""});

    const dispatch = useDispatch();

    useEffect(() => {
        const res = [...stateCategory.book, ...stateCategory.newspapers, ...stateCategory.magazines];
        dispatch({type: "SORT_PRODUCT", payload: res})
    }, [stateCategory]);

    const searchPriceAndCategory = ({stateCategory}: any) => {
        let res = [...stateCategory.book, ...stateCategory.newspapers, ...stateCategory.magazines];
        if (state.low && state.high !== "") {
            if (res.length) {
                res = res.filter((product: any) => product.price >= state.low && product.price <= state.high);
                dispatch({type: "SORT_PRODUCT", payload: res})
            }
        }
    };

    return (
        <>
            <h1 className="catalog">Catalog</h1>
            <div className="wrap-catalog ">
                <div className="list-printing d-flex flex-column mb-5">
                    <h4>Category</h4>
                    <label htmlFor="Book"><input type="checkbox" id="Book" className="check"
                                                 onChange={(e: any) => filterCategory({
                                                     e,
                                                     setStateCategory,
                                                     stateCategory,
                                                     defaultProducts
                                                 })}/>Books</label>
                    <label htmlFor="Newspapers"><input type="checkbox" id="Newspapers"
                                                       className="check"
                                                       onChange={(e: any) => filterCategory({
                                                           e,
                                                           setStateCategory,
                                                           stateCategory,
                                                           defaultProducts
                                                       })}/>Newspapers</label>
                    <label htmlFor="Magazines"><input type="checkbox" id="Magazines"
                                                      className="check"
                                                      onChange={(e: any) => filterCategory({
                                                          e,
                                                          setStateCategory,
                                                          stateCategory,
                                                          defaultProducts
                                                      })}/>Magazines</label>
                </div>
                <h4 className="mb-3">Price, $</h4>
                <div className="d-flex justify-content-between wrap-price">
                    <input className=" w-25 pl-2" type="text" placeholder="От"
                           onChange={(e: any) => setState({low: e.target.value, high: state.high})}/>
                    <input className="w-25 pl-2 d-flex" type="text" placeholder="До"
                           onChange={(e: any) => setState({low: state.low, high: e.target.value})}/>
                    <Button innerText="OK" onClick={() => searchPriceAndCategory({stateCategory})}/>
                </div>
            </div>
        </>
    )
};
