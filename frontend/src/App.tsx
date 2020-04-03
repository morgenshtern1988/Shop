import React from 'react';
import {Route} from 'react-router-dom';
import Main from "./components/Main/Main";
import Register from "./containers/Form/RegisterContainer";
import ProductContainer from "./containers/Products/ProductContainer";
import HeaderContainer from "./containers/Header/HeaderContainer";
import Login from "./containers/Form/LoginContainer";

function App() {
    return (
        <div className="wrapper">
            <HeaderContainer/>
            <div className="wrap-content">
                <Route exact path="/" component={Main}/>
                <Route path="/auth/register" render={() => <Register/>}/>
                <Route path="/auth/login" render={() => <Login/>}/>
                <Route path="/printing-edition" render={() => <ProductContainer/>}/>
            </div>
        </div>
    );
}

export default App;
