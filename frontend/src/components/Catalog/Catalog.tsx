import React, {useState} from "react";
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {sortOnCategoryAndPriceThunk} from "../../reducers/product/product";
import {RootState} from "../../types/inrerface";

export const Catalog = ({currentPage}: any) => {

    const productReducer = (state: RootState) => state.productReducer.paramSort;
    const paramSort = useSelector(productReducer);

    const dispatch = useDispatch();
    const sortProduct = (paramSort: any) => {
        dispatch(sortOnCategoryAndPriceThunk({stateObj: paramSort, currentPage}))
    };


    const validate = () => {
        return (
            paramSort.low > 0 &&
            paramSort.high > 0 &&
            (paramSort.newspapers ||
                paramSort.book ||
                paramSort.magazines)
        )
    };

    return (
        <>
            <h1 className="catalog">Catalog</h1>
            <div className="wrap-catalog ">
                <div className="list-printing d-flex flex-column mb-5">
                    <h4>Category</h4>
                    <label htmlFor="Book"><input type="checkbox" id="Book" className="check"
                                                 onChange={(e: any) => dispatch({
                                                     type: "SORT_PRODUCT",
                                                     payload: {book: e.target.checked}
                                                 })
                                                 }/>Books</label>
                    <label htmlFor="Newspapers"><input type="checkbox" id="Newspapers"
                                                       className="check"
                                                       onChange={(e: any) => dispatch({
                                                           type: "SORT_PRODUCT",
                                                           payload: {newspapers: e.target.checked}
                                                       })}/>Newspapers</label>
                    <label htmlFor="Magazines"><input type="checkbox" id="Magazines"
                                                      className="check"
                                                      onChange={(e: any) => dispatch({
                                                          type: "SORT_PRODUCT",
                                                          payload: {magazines: e.target.checked}
                                                      })}/>Magazines</label>
                </div>
                <h4 className="mb-3">Price, $</h4>
                <div className="d-flex justify-content-between wrap-price">
                    <input className=" w-25 pl-2" type="text" placeholder="От"
                           onChange={(e: any) => dispatch({
                               type: "SORT_PRODUCT",
                               payload: {low: +e.target.value}
                           })}/>
                    <input className="w-25 pl-2 d-flex" type="text" placeholder="До"
                           onChange={(e: any) => dispatch({
                               type: "SORT_PRODUCT",
                               payload: {high: +e.target.value}
                           })}/>
                    <Button innerText="OK" disabled={!validate()}
                            onClick={() => {
                                sortProduct(paramSort);
                                dispatch({
                                    type: "SORT_PRODUCT",
                                    payload: {low: 0, high: 0, book: false, newspapers: false, magazines: false},
                                })
                            }}/>
                </div>
            </div>
        </>
    )
};
