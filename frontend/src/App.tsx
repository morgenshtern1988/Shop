import React from 'react';
import "./styles/index.scss";
import {Route, Switch} from 'react-router-dom';
import Register from "./containers/Form/RegisterContainer";
import HeaderContainer from "./containers/Header";
import Login from "./containers/Form/LoginContainer";
import {PrivateRoute} from "./containers/RoutePrivate";
import {HomePage} from "./containers/HomePage";
import AdminPage from "./containers/AdminPage";
import {Role} from "./helpers/role";
// import {RootState} from "./containers/inrerface";
// import {useSelector} from "react-redux";
import ProductContainer from "./containers/Products/ProductContainer";

function App() {
   /* const selectIsOn = (state: RootState) => state.loginReducer.role;
    const role = useSelector(selectIsOn);*/
    // useEffect(() => {
    //     console.log(role)
    // });
    // componentDidMount() {
    //     authenticationService.currentUser.subscribe(x => this.setState({
    //         currentUser: x,
    //         isAdmin: x && x.role === Role.Admin
    //     }));
    // }
    return (
        <div className="wrapper">
            <HeaderContainer/>
            <main>
                <div className="container">
                    <Switch>
                        <Route path="/auth/register" render={() => <Register/>}/>
                        <Route path="/auth/login" render={() => <Login/>}/>
                        <PrivateRoute exact path='/' component={ProductContainer}/>
                        <PrivateRoute path='/admin' roles={Role.Admin} component={AdminPage}/>
                    </Switch>
                </div>
            </main>
        </div>
    );
}

export default App;
