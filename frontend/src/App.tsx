import React from 'react';
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
import {ModalContainer} from "./containers/Modal/ModalContainer";
import {MyProfileContainer} from "./containers/MyProfile"

function App() {
    return (
        <div className="wrapper position-relative">
            <HeaderContainer/>
            <ModalContainer/>
            <main>
                {/*<div className="">*/}
                    <Switch>
                        <Route path="/auth/register" render={() => <Register/>}/>
                        <Route path="/auth/login" render={() => <Login/>}/>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/printing-editing' component={ProductHomeContainer}/>
                        <PrivateRoute path='/admin' roles={Role.Admin} component={AdminPage}/>
                        <PrivateRoute path='/' roles={Role.User} component={MyProfileContainer}/>
                    </Switch>
                {/*</div>*/}
            </main>
        </div>
    );
}

export default App;
