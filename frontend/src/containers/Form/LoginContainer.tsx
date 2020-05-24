import React from "react";
import {Redirect} from 'react-router-dom';
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import {connect, useSelector} from "react-redux";
import {singInUser} from "../../reducers/login/login";
import HeaderContainer from "../Header/HeaderContainer";
import {RootState} from "../../types/inrerface";

const Login = (props: any) => {
    let {setEmail, setPassword, email, password, postUserFromApi, auth} = props;

    const loginReducer = (state: RootState) => state.loginReducer;
    const login = useSelector(loginReducer);
    // console.log(login);

    function validateForm() {
        return (email !== undefined && password !== undefined)
    }

    function handleSubmit(event: any) {
        postUserFromApi(login);
        event.preventDefault();
    }

    return (
        <>
            <HeaderContainer/>
            {auth
                ? <Redirect to='/'/>
                : <div className="Login container">
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
