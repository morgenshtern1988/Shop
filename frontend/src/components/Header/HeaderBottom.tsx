import React from "react";
import {Search} from "../Search";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../types/inrerface";
import {Link} from "react-router-dom";

export const HeaderBottom = () => {

    const filterReducer = (state: RootState) => state.productReducer.productArr;
    const products = useSelector(filterReducer);

    const pagereducer = (state: RootState) => state.pageReducer;
    const pageReducer = useSelector(pagereducer);
    console.log(pageReducer);
    const {currentPage} = pageReducer.pager;

    const dispatch = useDispatch();

    const handleSearch = ({products, value}: any) => {
        dispatch({type: "FILTER_PRODUCT_SEARCH", payload: {products, value}})
    };

    return (
        <header className="bottom-header d-flex pt-4 pb-4 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Link to="/">Home</Link>
                        <Link to={"/printing-editing?page=1"}>Book Catalog</Link>
                    </div>
                    <div className="col-6 text-right">
                        <Search onChange={(e: any) => handleSearch({products, value: e.target.value})}
                                placeholder={"Search"}/>
                    </div>
                </div>
            </div>
        </header>
    )
};
