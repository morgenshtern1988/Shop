import {combineReducers} from "redux";
import {productReducer} from "./product/product";
import {loginReducer} from "./login/login";
import {registerReducer} from "./register/register";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import {redirectReducer} from "./redirect";

export const rootReducers = combineReducers(
    {
        productReducer,
        loginReducer,
        registerReducer,
        redirectReducer,
    }
);

const persistConfig = {
    key: "root",
    storage,
    // whitelist: ["loginReducer"]
};

export const persistedReducer =  persistReducer(persistConfig, rootReducers);
