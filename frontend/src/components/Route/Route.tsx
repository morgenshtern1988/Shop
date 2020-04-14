import React from "react";
import {Route} from "react-router-dom";
import ProductContainer from "../../containers/Products/ProductContainer";

export const WrapRoute = (props: any) => {
    return (
        <>
            <h1>Im Route</h1>
            <Route path="/" component={ProductContainer}/>
        </>
    )
};
