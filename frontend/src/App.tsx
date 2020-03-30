import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import ProductContainer from "./containers/Products/ProductContainer";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/auth" component={Login}/>
                    <Route path="/printing-edition" component={ProductContainer}/>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
