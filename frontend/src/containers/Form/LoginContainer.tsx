import React from "react";
import {Redirect} from 'react-router-dom';
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import {connect} from "react-redux";
import {singInUser} from "../../reduxStore/login/action";
import {store} from "../../reduxStore/store";

const Login = (props: any) => {
    let {setEmail, setPassword, email, password, postUserFromApi, auth} = props;
    function validateForm() {
        return (email !== undefined && password !== undefined)
    }
    function handleSubmit(event: any) {
        const data = store.getState().loginReducer;
        postUserFromApi(data);
        event.preventDefault();
    }
    return (
        <>
            {auth
                ? <Redirect exact from="/auth/login" to='/printing-edition'/>
                : <div className="Login">
                    <form onSubmit={handleSubmit}>
                        <FormGroup controlId="email" bsSize="large">
                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                                autoFocus
                                type="email"
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                value={password}
                                onChange={(e: any) => setPassword(e.target.value)}
                                type="password"
                            />
                        </FormGroup>
                        <Button block bsSize="large" disabled={!validateForm()} type="submit">
                            Login
                        </Button>
                    </form>
                </div>
            }
        </>
    );
};


const mapStateToProps = (state: any) => ({
    email: state.loginReducer.email,
    password: state.loginReducer.password,
    auth: state.loginReducer.isAuthenticated,
});

const mapDispatchToProps = (dispatch: any) => ({
    setEmail: (email: any) => dispatch({type: "@@login/LOGIN_START", payload: {email}}),
    setPassword: (password: any) => dispatch({type: "@@login/LOGIN_START", payload: {password}}),
    postUserFromApi: (data: any) => dispatch(singInUser(data)),
    // isAuthenticated: (bool: boolean) => dispatch({type: "@@login/AUTH_VALUE", payload: {bool}})
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
