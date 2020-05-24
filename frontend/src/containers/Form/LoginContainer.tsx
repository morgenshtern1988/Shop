import React from "react";
import {Redirect} from 'react-router-dom';
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import {connect, useDispatch, useSelector} from "react-redux";
import {singInUser} from "../../reducers/login/login";
import HeaderContainer from "../Header/HeaderContainer";
import {RootState} from "../../types/inrerface";

const Login = ({setEmail, setPassword, email, password, auth}: any) => {

    const loginReducer = (state: RootState) => state.loginReducer;
    const login = useSelector(loginReducer);
    const dispatch = useDispatch();
    // console.log(login.error);

    function validateForm() {
        return (email !== undefined && password !== undefined)
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        dispatch(singInUser(login));
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
                        {
                            login.error.length > 0 ?
                                <span className="msg-err">{login.error}!</span>
                                : <></>
                        }
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
