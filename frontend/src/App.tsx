import React from 'react';
import "./styles/index.scss";
import {Route, Switch} from 'react-router-dom';
import Register from "./containers/Form/RegisterContainer";
import HeaderContainer from "./containers/Header/HeaderContainer";
import Login from "./containers/Form/LoginContainer";
import {PrivateRoute} from "./containers/RoutePrivate/RoutePrivate";
import {RouteMap} from "./components/Route/Route";

function App() {
    return (
        <div className="wrapper">
            <HeaderContainer/>
            <main>
                <div className="container">
                    <Switch>
                        <Route exact path="/auth/register" render={() => <Register/>}/>
                        <Route exact path="/auth/login" render={() => <Login/>}/>
                        <PrivateRoute path='/' component={RouteMap}/>
                    </Switch>
                </div>
            </main>
        </div>
    );
}

export default App;
