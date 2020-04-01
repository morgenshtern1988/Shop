import {combineReducers, createStore, applyMiddleware} from "redux";
import {productReducer} from "./product/product";
import {userReducer} from "./user/user";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {composeWithDevTools} from "redux-devtools-extension";

export const reducers = combineReducers(
    {
        productReducer,
        userReducer,
        form: formReducer,
    }
);


export let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
declare const window: any;
window.store = store;
