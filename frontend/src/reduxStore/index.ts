import {combineReducers, createStore, applyMiddleware} from "redux"
import {productReducer} from "./product/product";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {composeWithDevTools} from "redux-devtools-extension";
import {loginReducer} from "./login/action";
import {registerReducer} from "./Register/register";

export const reducers = combineReducers(
    {
        productReducer,
        loginReducer,
        registerReducer,
        form: formReducer,
    }
);


export let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

declare const window: any;
window.store = store;
