import React, {useEffect} from "react";
import {RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";
import {getProductThunk} from "../../reducers/product/product";
import {ProductsHome} from "../../components/ProductsHome";

export const ProductHomeContainer = () => {
    const selectIsOn = (state: RootState) => state.productReducer;
    const products = useSelector(selectIsOn);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductThunk())
    }, []);

    return (
        <>
            <ProductsHome products={products}/>
        </>
    )
}
