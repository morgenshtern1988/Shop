import {combineReducers, createStore, applyMiddleware} from "redux"
import {loginReducer} from "./login/action";
import {productReducer} from "./product/product";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {registerReducer} from "./register/register";

export const reducers = combineReducers(
    {
        productReducer,
        loginReducer,
        registerReducer,
    }
);


export let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
const unsubscribe  = store.subscribe(() =>console.log(store.getState().loginReducer));

declare const window: any;
window.store = store;
