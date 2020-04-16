import React from 'react';
import "./index.scss";
import {Route, Switch} from 'react-router-dom';
import Register from "./containers/Form/RegisterContainer";
import HeaderContainer from "./containers/Header/HeaderContainer";
import Login from "./containers/Form/LoginContainer";
import {PrivateRoute} from "./containers/RoutePrivate/RoutePrivate";
import {RouteMap} from "./components/Route/Route";

function App() {
    return (
        <div className="wrapper">
            <div className="container">
                <HeaderContainer/>
                <div className="wrap-content">
                    <Switch>
                        <Route exact path="/auth/register" render={() => <Register/>}/>
                        <Route exact path="/auth/login" render={() => <Login/>}/>
                        <PrivateRoute path='/' component={RouteMap}/>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;
