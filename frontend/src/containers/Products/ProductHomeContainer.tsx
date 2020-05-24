import React, {useEffect} from "react";
import {RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";
import {getProductThunk} from "../../reducers/product/product";
import {ProductInfo, ProductsHome} from "../../components/Products";
import {Route, Switch} from "react-router-dom";
import HeaderContainer from "../Header/HeaderContainer";

export const ProductHomeContainer = () => {
    const redirectReducer = (state: RootState) => state.redirectReducer;
    const redirect = useSelector(redirectReducer);

    return (
        <>
            <HeaderContainer/>
            <Switch>
                <Route exact path={"/printing-editing"}
                       render={() => <ProductsHome/>}/>
                <Route path={"/printing-editing/" + redirect._id}
                       render={() => <ProductInfo product={redirect.product}/>}/>
            </Switch>
        </>
    )
};
