import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import ProductContainer from "../../containers/Products/ProductContainer";
import Main from "../Main/Main";

export const RouteMap = (props: any) => {
    return (
        <>
            <Switch>
                <Route exact path="/printing-edition" component={ProductContainer}/>
                {/*<Route path="/printing-edition" component={ProductContainer}/>*/}
                {/*<Route path="/admin/printing-edition" component={Main}/>*/}
                {/*<Redirect to="/"/>*/}
            </Switch>
        </>
    )
};
