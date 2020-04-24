import {combineReducers} from "redux";
import {productReducer} from "./product/product";
import {loginReducer} from "./login/login";
import {registerReducer} from "./register/register";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";

export const rootReducers = combineReducers(
    {
        productReducer,
        loginReducer,
        registerReducer,
    }
);

const persistConfig = {
    key: "root",
    storage,
    // whitelist: ["loginReducer"]
};

export const persistedReducer =  persistReducer(persistConfig, rootReducers);
