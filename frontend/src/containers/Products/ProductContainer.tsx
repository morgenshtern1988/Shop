import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../inrerface";
import ProductTable from "../../components/ProductTable/ProductTable";
import {getProductThunk} from "../../reduxStore/product/product"

const ProductContainer = (props: any) => {

    const selectIsOn = (state: RootState) => state.productReducer;
    const products = useSelector(selectIsOn);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductThunk())
    }, []);

    return (
        <>
            <section className="wrap-products">
                <button onClick={() => dispatch(getProductThunk())}>Update products</button>
                <ProductTable products={products}/>
            </section>
        </>
    )
};
export default ProductContainer;
