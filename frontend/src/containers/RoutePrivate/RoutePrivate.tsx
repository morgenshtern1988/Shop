import React from "react";
import {Redirect, Route} from "react-router-dom"
import {useSelector} from "react-redux";
import {RootState} from "../../types/inrerface";

export const PrivateRoute = (props: any) => {

    const {component: Component, ...rest} = props;

    const selectIsOn = (state: RootState) => state.loginReducer.isAuthenticated;
    const isAuthenticated = useSelector(selectIsOn);

    return (
        <Route {...rest} render={() => {
            if (isAuthenticated) {
                return <Component {...props} />
            } else {
                return <Redirect exact to="auth/login"/>
            }
        }}/>
    )
};
