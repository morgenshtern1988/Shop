import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../types/inrerface";
import ProductsTable from "../ProductTable/ProductsTable";
// import {getProductThunk} from "../../reducers/product/product"

const ProductContainer = (props: any) => {

    // const selectIsOn = (state: RootState) => state.productReducer;
    // const products = useSelector(selectIsOn);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getProductThunk())
    // },[]);

    return (
        <>
            {/*<ProductsTable products={products}/>*/}
        </>
    )
};
export default ProductContainer;
