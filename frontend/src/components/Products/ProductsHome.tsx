import React, {useEffect} from "react";
import {ProductHome} from "./ProductHome";
import {Filter} from "../Filter";
import {RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";
import {Catalog} from "../Catalog";
import {Link} from "react-router-dom";

export const ProductsHome = ({products}: any) => {
    const defaultProductReducer = (state: RootState) => state.productReducer.productArr;
    const defaultProducts = useSelector(defaultProductReducer);

    const pagereducer = (state: RootState) => state.pageReducer;
    const pageReducer = useSelector(pagereducer);
    const dispatch = useDispatch();
    useEffect(() => {
        loadPage()
    });
    const loadPage = () => {
        const params = new URLSearchParams(window.location.search);
        console.log(params);
        // const page = parseInt(params);
        // if (page !== pageReducer.pager.currentPage) {
        //     fetch(`/api/items?page=${page}`, {method: 'GET'})
        //         .then(response => response.json())
        //         .then(({pager, pageOfItems}) => {
        //             dispatch({type: "PAGER", payload: {pager, pageOfItems}});
        //         });
        // }
    };

    return (
        <div className="row container">
            <div className="col-3">
                <Catalog products={products} defaultProducts={defaultProducts}/>
            </div>
            <div className="col-9">
                <Filter products={products}
                        defaultProducts={defaultProducts}/>
                <div className="row justify-content-around">
                    {/*      {
                        products.map((product: any) => {
                                return <ProductHome
                                    product={product}
                                    key={product._id}/>
                            }
                        )
                    }*/}
                </div>
            </div>
            <div className="card-body">
                {products.map((item: any, index: string) =>
                    <div key={item.id}>{index}</div>
                )}
            </div>
            <div className="card-footer pb-0 pt-3">
                {pageReducer.pager.pages && pageReducer.pager.pages.length &&
                <ul className="pagination">
                    <li className={`page-item first-item ${pageReducer.pager.currentPage === 1 ? 'disabled' : ''}`}>
                        <Link to={{search: `?page=1`}} className="page-link">First</Link>
                    </li>
                    <li className={`page-item previous-item ${pageReducer.pager.currentPage === 1 ? 'disabled' : ''}`}>
                        <Link to={{search: `?page=${pageReducer.pager.currentPage - 1}`}}
                              className="page-link">Previous</Link>
                    </li>
                    {pageReducer.pager.pages.map((page: any) =>
                        <li key={page}
                            className={`page-item number-item ${pageReducer.pager.currentPage === page ? 'active' : ''}`}>
                            <Link to={{search: `?page=${page}`}} className="page-link">{page}</Link>
                        </li>
                    )}
                    <li className={`page-item next-item ${pageReducer.pager.currentPage === pageReducer.pager.totalPages ? 'disabled' : ''}`}>
                        <Link to={{search: `?page=${pageReducer.pager.currentPage + 1}`}}
                              className="page-link">Next</Link>
                    </li>
                    <li className={`page-item last-item ${pageReducer.pager.currentPage === pageReducer.pager.totalPages ? 'disabled' : ''}`}>
                        <Link to={{search: `?page=${pageReducer.pager.totalPages}`}} className="page-link">Last</Link>
                    </li>
                </ul>
                }
            </div>
        </div>
    )
};
