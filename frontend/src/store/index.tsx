import {combineReducers, createStore} from "redux";
import {productReducer} from "./product/product";
import {userReducer} from "./user/user";

export const reducers = combineReducers(
    {
        productReducer,
        userReducer,
    }
);

export const store = createStore(reducers);
