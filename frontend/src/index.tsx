import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from "./App";
import {PersistGate} from "redux-persist/integration/react"
import {BrowserRouter} from "react-router-dom";
import {store, persistor} from "./store/store";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
ReactDOM.render(

    <BrowserRouter>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
