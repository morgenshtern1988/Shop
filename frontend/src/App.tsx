import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from "./components/Main/Main";
import Product from "./components/Product/Product"


function App() {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/auth" component={Main} />
                    <Route path="/printing-edition" component={Product} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
