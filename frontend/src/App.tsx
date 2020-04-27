import React, {useEffect} from 'react';
import "./styles/style.scss";
import {Route, Switch} from 'react-router-dom';
import Register from "./containers/Form/RegisterContainer";
import HeaderContainer from "./containers/Header";
import Login from "./containers/Form/LoginContainer";
import {PrivateRoute} from "./containers/RoutePrivate";
import {HomePage} from "./containers/HomePage";
import AdminPage from "./containers/AdminPage";
import {Role} from "./helpers/role";
import {ProductHomeContainer} from "./containers/Products";

function App() {

    return (
        <div className="wrapper">
            <HeaderContainer/>
            <main>
                <div className="container">
                    <Switch>
                        <Route path="/auth/register" render={() => <Register/>}/>
                        <Route path="/auth/login" render={() => <Login/>}/>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/printing-editing' component={ProductHomeContainer}/>
                        <PrivateRoute path='/admin' roles={Role.Admin} component={AdminPage}/>
                    </Switch>
                </div>
            </main>
        </div>
    );
}

export default App;
