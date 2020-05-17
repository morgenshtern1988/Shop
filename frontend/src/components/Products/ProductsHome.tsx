import React, {useEffect} from "react";
import {ProductHome} from "./ProductHome";
import {Filter} from "../Filter";
import {RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";
import {Catalog} from "../Catalog";
import {Link} from "react-router-dom";
import {getProductThunk} from "../../reducers/product/product";
import {loadPage} from "../../helpers/pages";

export const ProductsHome = () => {

    const pagereducer = (state: RootState) => state.pageReducer;
    const pageReducer = useSelector(pagereducer);
    const {pageOfItems, pager} = pageReducer;
    const {currentPage} = pageReducer.pager;

    const dispatch = useDispatch();

    useEffect(() => {
        const page = loadPage();
        if (page !== currentPage) {
            dispatch(getProductThunk(page));
        }
    });

    return (
        <div className="row container">
            <div className="col-3">
                {/*<Catalog products={products} defaultProducts={defaultProducts}/>*/}
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
            {/*<div className="card-body">
                {pageOfItems.map((item: any, index: string) =>
                    <div key={item._id}>{index + 1}</div>
                )}
            </div>*/}
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
