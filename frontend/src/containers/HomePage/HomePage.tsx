import React from "react";
import {Route, Switch} from "react-router-dom";
// import ProductContainer from "../../containers/Products/ProductContainer";
// import AdminPage from "../AdminPage/AdminPage";
// import {useSelector} from "react-redux";
// import {RootState} from "../../containers/inrerface";
// import {history} from "../../helpers/history";

export const HomePage = (props: any) => {
/*    const selectIsOn = (state: RootState) => state.loginReducer;
    const user = useSelector(selectIsOn);
    const role = user.role;*/
    return (
        <>
            <Switch>
                <Route exact path="/" render={()=><h1>Home Page</h1>}/>
                {/*<HomePage exact path="/admin" component={AdminPage}/>*/}
              {/*  <HomePage exact path="/printing-edition" component={ProductContainer}/>
                {
                    role === 1 ?
                        <HomePage exact path="/admin/printing-edition" component={AdminPage}/>
                        :
                        <Redirect to="/auth/login"/>
                }
                <HomePage path="/printing-edition" component={ProductContainer}/>
                <Redirect to="/"/>*/}
            </Switch>
        </>
    )
};
