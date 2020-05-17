import React, {useState} from "react";
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {sortOnCategoryAndPriceThunk} from "../../reducers/product/product";

export const Catalog = ({currentPage}: any) => {

    const [state, setState] = useState({low: 0, high: 0});
    const [stateCategory, setStateCategory] = useState({book: false, newspapers: false, magazines: false});

    const dispatch = useDispatch();
    const sortProduct = ({stateCategory, state}: any) => {
        let stateObj = {...state};
        if (stateCategory.book) {
            stateObj = {...stateObj, book: true}
        }
        if (stateCategory.newspapers) {
            stateObj = {...stateObj, newspapers: true}
        }
        if (stateCategory.magazines) {
            stateObj = {...stateObj, magazines: true}
        }
        dispatch(sortOnCategoryAndPriceThunk({stateObj, currentPage}))
    };


    const validate = () => {
        return (
            state.low > 0 &&
            state.high > 0 &&
            (stateCategory.newspapers ||
                stateCategory.book ||
                stateCategory.magazines)
        )
    };

    return (
        <>
            <h1 className="catalog">Catalog</h1>
            <div className="wrap-catalog ">
                <div className="list-printing d-flex flex-column mb-5">
                    <h4>Category</h4>
                    <label htmlFor="Book"><input type="checkbox" id="Book" className="check"
                                                 onChange={(e: any) => setStateCategory({
                                                     book: e.target.checked,
                                                     newspapers: stateCategory.newspapers,
                                                     magazines: stateCategory.magazines
                                                 })}/>Books</label>
                    <label htmlFor="Newspapers"><input type="checkbox" id="Newspapers"
                                                       className="check"
                                                       onChange={(e: any) => setStateCategory({
                                                           book: stateCategory.book,
                                                           newspapers: e.target.checked,
                                                           magazines: stateCategory.magazines
                                                       })}/>Newspapers</label>
                    <label htmlFor="Magazines"><input type="checkbox" id="Magazines"
                                                      className="check"
                                                      onChange={(e: any) => setStateCategory({
                                                          book: stateCategory.book,
                                                          newspapers: stateCategory.newspapers,
                                                          magazines: e.target.checked
                                                      })}/>Magazines</label>
                </div>
                <h4 className="mb-3">Price, $</h4>
                <div className="d-flex justify-content-between wrap-price">
                    <input className=" w-25 pl-2" type="text" placeholder="От"
                           onChange={(e: any) => setState({low: +e.target.value, high: state.high})}/>
                    <input className="w-25 pl-2 d-flex" type="text" placeholder="До"
                           onChange={(e: any) => setState({low: state.low, high: +e.target.value})}/>
                    <Button innerText="OK" disabled={!validate()}
                            onClick={() => sortProduct({stateCategory, state})}/>
                </div>
            </div>
        </>
    )
};
