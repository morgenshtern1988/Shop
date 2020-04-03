import React from "react";
import {Field} from "redux-form";
import {reduxForm} from "redux-form";

export const RegisterForm = (props: any) => {

    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field type="text" name="firstName" placeholder={"firstName"} component="input"/>
            </div>
            <div>
                <Field type="text" name="lastName" placeholder={"lastName"} className="" component="input"/>
            </div>
            <div>
                <Field type="text" name="email" placeholder={"email"} className="" component="input"/>
            </div>
            <div>
                <Field type="password" name="password" placeholder={"password"} className="" component="input"/>
            </div>
            <div>
                <button>Ok</button>
            </div>
        </form>
    )
};

const RegisterFromRedux = reduxForm({form: "register"})(RegisterForm);

export default RegisterFromRedux;


