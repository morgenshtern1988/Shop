import React from "react";
import {Route, Switch} from "react-router-dom";
import {RootState} from "../../types/inrerface";
import {useSelector} from "react-redux";
import {HeaderTop} from "../../components/Header";
import {ProductContainer} from "./ProductContainer";
import {AuthorsPage} from "./AuthorsPage";
import {UserManagement} from "./UserManagement";

const AdminPage = ({roles}: any) => {

    const selectIsOn = (state: RootState) => state.loginReducer.role;
    const role = useSelector(selectIsOn);

    const pagereducer = (state: RootState) => state.authorsReducer.pageOfItems;
    const pageOfItems = useSelector(pagereducer);

    return (
        <>
            <HeaderTop/>
            {role === roles ?
                <Switch>
                    <Route exact path="/admin/printing-editing" render={() => <ProductContainer/>}/>
                    <Route exact path="/admin/authors" render={() => <AuthorsPage pageOfItems={pageOfItems}/>}/>
                    <Route exact path="/admin/users" render={() => <UserManagement/>}/>
                </Switch>
                :
                <h1>Отказано в доступе</h1>
            }
        </>
    )
};
export default AdminPage
