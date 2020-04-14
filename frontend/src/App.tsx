import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from "./components/Main/Main";
import Register from "./containers/Form/RegisterContainer";
import HeaderContainer from "./containers/Header/HeaderContainer";
import Login from "./containers/Form/LoginContainer";
import {PrivateRoute} from "./containers/RoutePrivate/RoutePrivate";
import {RouteMap} from "./components/Route/Route";

function App() {
    return (
        <div className="wrapper">
            <HeaderContainer/>
            <div className="wrap-content">
                <Switch>
                    <Route exact path="/auth/register" render={() => <Register/>}/>
                    <Route exact path="/auth/login" render={() => <Login/>}/>
                    <PrivateRoute path='/' component={RouteMap}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
