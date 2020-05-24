import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../types/inrerface";
import ProductsTable from "../../components/ProductTable/ProductsTable";

export const ProductContainer = () => {

    const productReducer = (state: RootState) => state.pageReducer.pageOfItems;
    const products = useSelector(productReducer);

    return (
        <>
            <ProductsTable
                products={products}/>
        </>
    )
};
