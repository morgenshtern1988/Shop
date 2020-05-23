import React from "react";
import {Route} from "react-router";
import {Switch} from "react-router-dom";
import {FormRegister} from "../../components/FormRegister";
import {ModalConfirmation} from "../../components/FormRegister/ModalConfirmation";
import {HeaderTop} from "../../components/Header";
export const Register = ({}: any) => {

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    return (
        <>
            <HeaderTop/>
            <Switch>
                <Route exact path="/auth/register" component={FormRegister}/>
                <Route exact path={`/auth/register/done`} render={() => <ModalConfirmation id={id}/>}/>
            </Switch>
        </>
    )
};

