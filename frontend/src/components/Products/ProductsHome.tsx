import React, {useEffect} from "react";
import {ProductHome} from "./ProductHome";
import {Filter} from "../Filter";
import {RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";
import {Catalog} from "../Catalog";
import {Link} from "react-router-dom";
import {getProductThunk, sortOnCategoryAndPriceThunk, sortProductThunk} from "../../reducers/product/product";
import {loadPage} from "../../helpers/pages";

export const ProductsHome = () => {

    const productReducer = (state: RootState) => state.productReducer;
    const param = useSelector(productReducer);
    const {paramFilter, paramSort} = param;
    // console.log("PARAM:", paramSort);

    const pagereducer = (state: RootState) => state.pageReducer;
    const pageReducer = useSelector(pagereducer);


    const {pageOfItems, pager} = pageReducer;
    const {currentPage} = pageReducer.pager;

    const dispatch = useDispatch();
    const {low, high} = paramSort;
    useEffect(() => {
        console.log("low:", paramSort.low);
        console.log("high:", paramSort.high);
        console.log("type:", paramSort.type);
        console.log("-----");
        console.log("paramFilter:", paramFilter);
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

    // useEffect(() => {
    //     console.log("YA OTRABOTAL")
    //     const page = loadPage();
    //     if (paramSort.low > 0 && paramSort.high > 0 || paramSort.type.length !== 0) {
    //         dispatch(sortOnCategoryAndPriceThunk({stateObj: paramSort, currentPage}))
    //     } else dispatch(getProductThunk(page));
    // }, [paramSort.click]);


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
            <div className="card-footer pb-0 pt-3">
                {pager.pages && pager.pages.length &&
                <ul className="pagination">
                    <li className={`page-item first-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                        <Link to={{search: `?page=1`}} className="page-link">First</Link>
                    </li>
                    <li className={`page-item previous-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                        <Link to={{search: `?page=${pager.currentPage - 1}`}} className="page-link">Previous</Link>
                    </li>
                    {pager.pages.map((page: any) =>
                        <li key={page}
                            className={`page-item number-item ${pager.currentPage === page ? 'active' : ''}`}>
                            <Link to={{search: `?page=${page}`}} className="page-link">{page}</Link>
                        </li>
                    )}
                    <li className={`page-item next-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                        <Link to={{search: `?page=${pager.currentPage + 1}`}} className="page-link">Next</Link>
                    </li>
                    <li className={`page-item last-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                        <Link to={{search: `?page=${pager.totalPages}`}} className="page-link">Last</Link>
                    </li>
                </ul>
                }
            </div>
        </div>
    )
};
