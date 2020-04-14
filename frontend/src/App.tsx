import React from 'react';
import {Route} from 'react-router-dom';
import Main from "./components/Main/Main";
import Register from "./containers/Form/RegisterContainer";
import HeaderContainer from "./containers/Header/HeaderContainer";
import Login from "./containers/Form/LoginContainer";
import {PrivateRoute} from "./containers/RoutePrivate/RoutePrivate";
import {WrapRoute} from "./components/Route/Route";

function App() {
    return (
        <div className="wrapper">
            <HeaderContainer/>
            <div className="wrap-content">
                <Route exact path="/" component={Main}/>
                <Route path="/auth/register" render={() => <Register/>}/>
                <Route path="/auth/login" render={() => <Login/>}/>
                <PrivateRoute path='/printing-edition' component={WrapRoute}/>
            </div>
        </div>
    );
}

export default App;
