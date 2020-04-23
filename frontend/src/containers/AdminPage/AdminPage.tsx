import React from "react";
// import ProductContainer from "../../containers/Products/ProductContainer";
import {Route, Switch} from "react-router-dom";
import {RootState} from "../../types/inrerface";
import {useSelector} from "react-redux";
import ProductContainer from "../../components/AdminPage/ProductContainer";

const AdminPage = (props: any) => {
    const {roles} = props;
    const selectIsOn = (state: RootState) => state.loginReducer.role;
    const role = useSelector(selectIsOn);

    return (
        <>
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
