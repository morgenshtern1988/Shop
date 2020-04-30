import React, {useEffect} from "react";
import {RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";
import {getProductThunk} from "../../reducers/product/product";
import {ProductInfo, ProductsHome} from "../../components/Products";
import {Route, Switch} from "react-router-dom";
import {Cart, ProductHelper} from "../../infrastructure/Cart";

export const ProductHomeContainer = () => {
    const redirectReducer = (state: RootState) => state.redirectReducer;
    const redirect = useSelector(redirectReducer);

    const productReducer = (state: RootState) => state.productReducer;
    const defaultProduct = useSelector(productReducer);

    const filterReducer = (state: RootState) => state.filterReducer;
    const products = useSelector(filterReducer);

    const buyReducer = (state: RootState) => state.buyReducer;
    const stateCart = useSelector(buyReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductThunk());
    }, []);

    useEffect(() => {
        console.log("UseEffect on ProductHomeContainer");
        const productArr = ProductHelper.getAllProducts(defaultProduct);
        dispatch({
            type: "BUY_PRODUCT",
            payload: {productArr, totalPrice: stateCart.totalPrice, totalCount: stateCart.totalCount}
        });
    }, [stateCart.totalCount]);

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
