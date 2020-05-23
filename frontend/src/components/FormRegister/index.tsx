import React, {useState} from "react";
import {RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";
import {postUserAddDb} from "../../reducers/register/register";
import {ControlLabel, FormControl, FormGroup, Modal} from "react-bootstrap";
import HeaderContainer from "../../containers/Header/HeaderContainer";
import LoaderButton from "../LoaderButton/LoaderButton";

export const FormRegister = () => {
    const selectIsOn = (state: RootState) => state.registerReducer;
    const newUser = useSelector(selectIsOn);
    const dispatch = useDispatch();
    const setFirstName = (firstName: any) => dispatch({type: "@@register/REGISTER_START", payload: {firstName}});
    const setLastName = (lastName: any) => dispatch({type: "@@register/REGISTER_START", payload: {lastName}});
    const setPassword = (password: any) => dispatch({type: "@@register/REGISTER_START", payload: {password}});
    const setEmail = (email: any) => dispatch({type: "@@register/REGISTER_START", payload: {email}});
    const setConfirmPassword = (confirmPassword: any) => dispatch({
        type: "@@register/REGISTER_START",
        payload: {confirmPassword}
    });
    const setLoading = () => dispatch({
        type: "@@register/REGISTER_START",
        payload: {loading: true}
    });

    const [isLoading, setIsLoading] = useState(false);

    function validateForm() {
        return (
            newUser.email.length > 0 &&
            newUser.password.length > 0 &&
            newUser.lastName.length > 0 &&
            newUser.firstName.length > 0 &&
            newUser.password === newUser.confirmPassword
        );
    }

    async function handleSubmit(event: any) {
        event.preventDefault();
        const data = {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            password: newUser.password,
            role: 0,
        };
        dispatch(postUserAddDb("http://localhost:8888/auth/email", data));
        setLoading();
        setIsLoading(true);
        dispatch({
            type: "@@register/REGISTER_START",
            payload: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
                loading: true,
            }
        });
    }

    /*
        async function handleConfirmationSubmit(event: any) {
            event.preventDefault();
            setIsLoading(true);
        }*/

    function renderConfirmationForm() {
        return (
            <Modal.Dialog>
                <Modal.Header/>
                <Modal.Body>
                    <h1 className="text-center">Confirm your email address!</h1>
                    <p>We have sent an e-mail with a confirmation link to your email address. In order to complete
                        the
                        sign-up process, please click the confirmation link.
                        If you do not receive a confirmation e-mail, please check your spam folder. Also, please verify
                        that
                        you entered a valid email address in our sign-up form.</p></Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal.Dialog>
        );
    }

    function renderForm() {
        return (
            <>
                <form onSubmit={handleSubmit} className="container">
                    <FormGroup controlId="firstName" bsSize="large">
                        <ControlLabel>firstName</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={newUser.firstName}
                            // onChange={handleFieldChange}
                            onChange={(e: any) => setFirstName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup controlId="lastName" bsSize="large">
                        <ControlLabel>lastName</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={newUser.lastName}
                            onChange={(e: any) => setLastName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={newUser.email}
                            onChange={(e: any) => setEmail(e.target.value)}
                            // onChange={handleFieldChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="password"
                            value={newUser.password}
                            onChange={(e: any) => setPassword(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup controlId="confirmPassword" bsSize="large">
                        <ControlLabel>Confirm Password</ControlLabel>
                        <FormControl
                            type="password"
                            value={newUser.confirmPassword}
                            onChange={(e: any) => setConfirmPassword(e.target.value)}
                        />
                    </FormGroup>
                    <LoaderButton
                        block
                        type="submit"
                        bsSize="large"
                        isLoading={isLoading}
                        disabled={!validateForm()}
                    >
                        Sign Up Your Account
                    </LoaderButton>
                </form>
            </>
        );
    }

    return (
        <div className="Signup">
            {!isLoading ? renderForm() : renderConfirmationForm()}
        </div>
    );
};
