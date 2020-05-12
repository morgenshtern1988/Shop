import {combineReducers} from "redux";
import {productReducer} from "./product/product";
import {loginReducer} from "./login/login";
import {registerReducer} from "./register/register";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import {redirectReducer} from "./redirect";
import {buyReducer} from "./buy";
import {modalReducer} from "./modal";
import {isActiveReducer} from "./isActive"
import {authorsReducer} from "./authors";
import {userReducer} from "./user";

export const rootReducers = combineReducers(
    {
        productReducer,
        loginReducer,
        registerReducer,
        redirectReducer,
        buyReducer,
        modalReducer,
        isActiveReducer,
        authorsReducer,
        userReducer,
    }
);

const persistConfig = {
    key: "root",
    storage,
    // whitelist: ["loginReducer"]
};

export const persistedReducer = persistReducer(persistConfig, rootReducers);
