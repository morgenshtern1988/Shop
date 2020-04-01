import React from "react";
// import {getUser} from "../../services/user";
import {store} from "../../store";
import  {Field} from "redux-form";
import {reduxForm} from "redux-form";
// const userFromApi = async () => {
//     const product = await getUser();
//     store.dispatch({type: 'INIT_USER', payload: product});
//     console.log(store.getState())
// };
export const LoginForm = (props: any) => {
    const {handleSubmit, onChange} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field type="text" name="email" placeholder={"email"} component="input"/>
            </div>
            <div>
                <Field type="text" name="password" placeholder={"password"} className="" component="input"/>
            </div>
            <div>
                <button>Ok</button>
            </div>
        </form>
    )
};

const LoginFromRedux = reduxForm({form: "login"})(LoginForm);

const Login = () => {
    
    const onSubmit = (formData:any) => {
        console.log(formData)
    };
    return (
        <div className="modal-login">
            <h1>Login</h1>
            <LoginFromRedux onSubmit={onSubmit} />
        </div>
    )
};

export default Login;


