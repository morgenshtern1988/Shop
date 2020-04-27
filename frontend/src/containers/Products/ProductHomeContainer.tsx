import React, {useEffect, useState} from "react";
import {RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";
import {getProductThunk} from "../../reducers/product/product";
import {ProductInfo, ProductsHome} from "../../components/Products";
import {Route, Switch} from "react-router-dom";

export const ProductHomeContainer = () => {
    const redirectReducer = (state: RootState) => state.redirectReducer;
    const redirect = useSelector(redirectReducer);

    const productReducer = (state: RootState) => state.filterReducer;
    const products = useSelector(productReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductThunk())
    }, []);

    return (
        <>
            <Switch>
                <Route exact path="/printing-editing" render={() => <ProductsHome products={products}/>}/>
                <Route path={"/printing-editing/" + redirect._id}
                       render={() => <ProductInfo product={redirect.product}/>}/>
            </Switch>
        </>
    )
};
