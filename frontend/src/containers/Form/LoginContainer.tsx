import React from "react";
import {Redirect} from 'react-router-dom';
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import {connect} from "react-redux";
import {singInUser} from "../../reducers/login/login";
import {store} from "../../store/store";

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
                ? <Redirect to='/'/>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
