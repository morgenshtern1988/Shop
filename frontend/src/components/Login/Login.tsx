import React from "react";
import {Field} from "redux-form";
import {reduxForm} from "redux-form";

export const LoginForm = (props: any) => {

    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field type="text" name="email" placeholder={"email"} className="" component="input"/>
            </div>
            <div>
                <Field type="password" name="password" placeholder={"password"} className="" component="input"/>
            </div>
            <div>
                <button>sing in</button>
            </div>
        </form>
    )
};

const LoginFromRedux = reduxForm({form: "login"})(LoginForm);

export default LoginFromRedux;


