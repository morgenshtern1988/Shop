import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {persistStore} from "redux-persist";
import {persistedReducer} from "../reducers/root-reducer";

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export const persistor = persistStore(store);

// const unsubscribe = store.subscribe(() => console.log(store.getState().buyReducer));
