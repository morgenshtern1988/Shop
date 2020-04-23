import React from "react";
import {Route, Switch} from "react-router-dom";
import {ProductHomeContainer} from "../Products";

export const HomePage = (props: any) => {
    return (
        <>
            <Switch>
                <Route exact path="/" render={() => <ProductHomeContainer/>}/>
            </Switch>
        </>
    )
};