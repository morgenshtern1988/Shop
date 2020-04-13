import React from "react";
import {Redirect, Route} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../inrerface";
import {isAlive} from "../../reduxStore/login/action";

export const PrivateRoute = (props: any) => {

    const {component: WrapRoute, store, ...rest} = props;

    const selectIsOn = (state: RootState) => state.loginReducer.isAuthenticated;
    const isAuthenticated = useSelector(selectIsOn);
    const dispatch = useDispatch();
    dispatch(isAlive());

    return (
        <Route {...rest} render={(props: any) => (
            isAuthenticated
                ? <WrapRoute {...props} />
                : <Redirect to='auth/login'/>
        )}/>
    )
};
