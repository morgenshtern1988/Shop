import React from 'react';
import {Route} from 'react-router-dom';
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import ProductContainer from "./containers/Products/ProductContainer";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="wrap-content">
                <Route exact path="/" component={Main}/>
                <Route path="/auth" render={() => <Login/>}/>
                <Route path="/printing-edition" render={() => <ProductContainer/>}/>
            </div>
        </div>
    );
}

export default App;
