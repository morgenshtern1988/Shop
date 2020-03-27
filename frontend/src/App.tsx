import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from "./components/Main/Main";
import ProductContainer from "./containers/Products/ProductContainer";

function App() {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/auth" component={Main}/>
                    <Route path="/printing-edition" component={ProductContainer}/>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
