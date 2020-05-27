import React from "react";
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
            (paramSort.type.Newspapers ||
                paramSort.type.Book ||
                paramSort.type.Magazines)
        )
    };

    return (
        <>
            <h1 className="catalog">Catalog</h1>
            <div className="wrap-catalog ">
                <div className="list-printing d-flex flex-column mb-5">
                    <h4>Category</h4>
                    <label className="item"><input name="item" type="checkbox" id="Book" className="check"
                                                   checked={paramSort.type.Book || false}
                                                   onChange={(e: any) => dispatch({
                                                       type: "SORT_PRODUCT",
                                                       payload: {type: {Book: e.target.checked}}
                                                   })
                                                   }/>Books</label>
                    <label className="item"><input name="item" type="checkbox" id="Newspapers"
                                                   className="check"
                                                   checked={paramSort.type.Newspapers || false}
                                                   onChange={(e: any) => dispatch({
                                                       type: "SORT_PRODUCT",
                                                       payload: {type: {Newspapers: e.target.checked}}
                                                   })}/>Newspapers</label>
                    <label className="item"><input name="item" type="checkbox" id="Magazines"
                                                   className="check"
                                                   checked={paramSort.type.Magazines || false}
                                                   onChange={(e: any) => dispatch({
                                                       type: "SORT_PRODUCT",
                                                       payload: {type: {Magazines: e.target.checked}}
                                                   })}/>Magazines</label>
                </div>
                <h4 className="mb-3">Price, $</h4>
                <div className="d-flex justify-content-between wrap-price">
                    <input className=" w-25 pl-2" type="text" placeholder="От"
                           value={paramSort.low}
                           onChange={(e: any) => dispatch({
                               type: "SORT_PRODUCT",
                               payload: {low: +e.target.value}
                           })}/>
                    <input className="w-25 pl-2 d-flex" type="text" placeholder="До"
                           value={paramSort.high}
                           onChange={(e: any) => dispatch({
                               type: "SORT_PRODUCT",
                               payload: {high: +e.target.value}
                           })}/>
                    <Button innerText="OK" disabled={!validate()}
                            onClick={() => {
                                sortProduct(paramSort);
                                // dispatch({
                                //     type: "SORT_PRODUCT",
                                //     payload: {low: 0, high: 0, click: true},
                                // })
                            }}/>
                </div>
            </div>
        </>
    )
};
