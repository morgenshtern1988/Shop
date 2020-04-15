import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import ProductContainer from "../../containers/Products/ProductContainer";
import Dashboard from "../Dashboard/Dashboard";

export const RouteMap = (props: any) => {
    return (
        <>
            <Switch>
                <Route exact path="/printing-edition" component={ProductContainer}/>
                {/*<Route path="/printing-edition" component={ProductContainer}/>*/}
                <Route exact path="/admin/printing-edition" component={Dashboard}/>
                <Redirect to="/"/>
            </Switch>
        </>
    )
};
