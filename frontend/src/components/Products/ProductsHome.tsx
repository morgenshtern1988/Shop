import React, {useEffect} from "react";
import {ProductHome} from "./ProductHome";
import {Filter} from "../Filter";
import {RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";
import {Catalog} from "../Catalog";
import {Link} from "react-router-dom";
import {getProductThunk, sortOnCategoryAndPriceThunk, sortProductThunk} from "../../reducers/product/product";
import {loadPage} from "../../helpers/pages";
import {Paginate} from "../Pagination";

export const ProductsHome = () => {

    const productReducer = (state: RootState) => state.productReducer;
    const param = useSelector(productReducer);
    const {paramFilter, paramSort} = param;

    const pagereducer = (state: RootState) => state.pageReducer;
    const pageReducer = useSelector(pagereducer);

    const {pageOfItems, pager} = pageReducer;
    const {currentPage} = pageReducer.pager;

    const dispatch = useDispatch();
    const {low, high} = paramSort;
    useEffect(() => {
        const page = loadPage();
        if (page !== currentPage) {
            if (paramFilter === "up-sort" || paramFilter === "down-sort") {
                console.log("зашел в АП ДОВН");
                dispatch(sortProductThunk({target: paramFilter, currentPage: page}));
            } else if (low > 0 && high > 0) {
                console.log("защел в СОРТ");
                dispatch(sortOnCategoryAndPriceThunk({stateObj: paramSort, currentPage}))
            } else {
                console.log("зашел в последний");
                dispatch(getProductThunk(page));
            }
        }
    });

    return (
        <div className="row container">
            <div className="col-3">
                <Catalog currentPage={currentPage}/>
            </div>
            <div className="col-9">
                <Filter currentPage={currentPage}/>
                <div className="row justify-content-around">
                    {
                        pageOfItems.map((product: any) => {
                                return <ProductHome
                                    product={product}
                                    key={product._id}/>
                            }
                        )
                    }
                </div>
            </div>
            <Paginate pager={pager}/>
        </div>
    )
};
