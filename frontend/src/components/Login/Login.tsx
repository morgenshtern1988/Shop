import React from "react";
import {getUser} from "../../services/api";
import {store} from "../../store";

const Login = () => {

    const userFromApi = async () => {
        const product = await getUser();
        store.dispatch({type: 'INIT_USER', payload: product});
        console.log(store.getState())
    };

    return (
        <>
            <div className="wrap-modal-login">
                <div className="modal-login">
                    <input type="text" placeholder="email"/>
                    <input type="text" placeholder="password"/>
                </div>
            </div>
        </>
    )
};

export default Login;
