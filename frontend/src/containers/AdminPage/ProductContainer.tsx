import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../types/inrerface";
import ProductsTable from "../../components/ProductTable/ProductsTable";
import {getProductThunk} from "../../reducers/product/product";
import {filterCategory} from "../../infrastructure/FilterCategory";

export const ProductContainer = (props: any) => {

    const defaultProductReducer = (state: RootState) => state.productReducer.productArr;
    const defaultProducts = useSelector(defaultProductReducer);

    const selectIsOn = (state: RootState) => state.productReducer.filterProduct;
    const products = useSelector(selectIsOn);

    const dispatch = useDispatch();

    const [stateCategory, setStateCategory] = useState({book: "", newspapers: "", magazines: ""});

    useEffect(() => {
        dispatch(getProductThunk())
    }, []);

    return (
        <>
            <ProductsTable
                products={products}
                defaultProducts={defaultProducts}
                stateCategory={stateCategory}
                setStateCategory={setStateCategory}
                filterCategory={filterCategory}/>
        </>
    )
};
