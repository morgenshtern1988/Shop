import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../types/inrerface";
import ProductsTable from "../../components/ProductTable/ProductsTable";
import {getProductThunk} from "../../reducers/product/product";
import {filterCategory} from "../../infrastructure/FilterCategory";
import {getAuthorsThunk} from "../../reducers/authors";

export const ProductContainer = (props: any) => {

    const productReducer = (state: RootState) => state.productReducer.productArr;
    const products = useSelector(productReducer);

    const dispatch = useDispatch();

    const [stateCategory, setStateCategory] = useState({book: "", newspapers: "", magazines: ""});

    useEffect(() => {
        dispatch(getProductThunk());
        dispatch(getAuthorsThunk())
    }, []);

    return (
        <>
            <ProductsTable
                products={products}
                stateCategory={stateCategory}
                setStateCategory={setStateCategory}
                filterCategory={filterCategory}/>
        </>
    )
};
