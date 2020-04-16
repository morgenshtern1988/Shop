import React from "react";
import {Redirect, Route} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../inrerface";

export const PrivateRoute = (props: any) => {

    const {component: Component, store, ...rest} = props;

    const selectIsOn = (state: RootState) => state.loginReducer.isAuthenticated;
    const isAuthenticated = useSelector(selectIsOn);
    const dispatch = useDispatch();
    // dispatch(isAlive());

    return (
        <Route {...rest} render={(props: any) => (
            isAuthenticated
                ? <Component {...props} />
                : <Redirect  exact to="auth/login"/>
        )}/>
    )
};
