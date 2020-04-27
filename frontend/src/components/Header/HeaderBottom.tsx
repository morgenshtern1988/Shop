import React, {useEffect} from "react";
import {Search} from "../Search";
import {RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";

export const HeaderBottom = () => {

    const selectIsOn = (state: RootState) => state.filterReducer;
    const products = useSelector(selectIsOn);
    const dispatch = useDispatch();

    const handleSearch = (value: string) => {
        dispatch({type: "FILTER_PRODUCT", payload: value})
    };

    useEffect(() => {
        // console.log(products);
    }, [products]);

    return (
        <header className="bottom-header d-flex pt-4 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <a href="http://localhost:3000/">Home</a>
                        <a href="http://localhost:3000/printing-editing">Book Catalog</a>
                    </div>
                    <div className="col-6 text-right">
                        <Search onChange={handleSearch} placeholder={"Search"}/>
                    </div>
                </div>
            </div>
        </header>
    )
};
