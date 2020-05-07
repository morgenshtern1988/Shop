import React from "react";
import {Route, Switch} from "react-router-dom";
import {RootState} from "../../types/inrerface";
import {useSelector} from "react-redux";
import {ProductContainer} from "../AdminPageProduct";
import {HeaderTop} from "../../components/Header";

const AdminPage = ({roles}: any) => {

    const selectIsOn = (state: RootState) => state.loginReducer.role;
    const role = useSelector(selectIsOn);

    return (
        <>
            <HeaderTop/>
            {role === roles ?
                <Switch>
                    <Route exact path="/admin" render={() => <ProductContainer/>}/>
                </Switch>
                :
                <h1>Отказано в доступе</h1>
            }
        </>
    )
};

export default AdminPage
