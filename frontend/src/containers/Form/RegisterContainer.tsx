import React, {useState} from "react";
import {
    HelpBlock,
    FormGroup,
    FormControl,
    ControlLabel
} from "react-bootstrap";
import LoaderButton from "../../components/LoaderButton/LoaderButton";
import {postUserAddDb} from "../../reducers/register/register";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../inrerface";

export default function Signup(props: any) {

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
    const setConfirmationCode = (confirmationCode: any) => dispatch({
        type: "@@register/REGISTER_START",
        payload: {confirmationCode}
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

    function validateConfirmationForm() {
        return newUser.confirmationCode.length > 0;
    }

    async function handleSubmit(event: any) {
        event.preventDefault();
        setIsLoading(true);
        const data = {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            password: newUser.password,
            role: 0,
        };
        dispatch(postUserAddDb("http://localhost:8888/auth/register", data));
        // setNewUser("test");
        setIsLoading(false);
    }

    async function handleConfirmationSubmit(event: any) {
        event.preventDefault();
        setIsLoading(true);
    }

    // function renderConfirmationForm() {
    //     return (
    //         <form onSubmit={handleConfirmationSubmit}>
    //             <FormGroup controlId="confirmationCode" bsSize="large">
    //                 <ControlLabel>Confirmation Code</ControlLabel>
    //                 <FormControl
    //                     autoFocus
    //                     type="tel"
    //                     onChange={handleFieldChange}
    //                     value={fields.confirmationCode}
    //                 />
    //                 <HelpBlock>Please check your email for the code.</HelpBlock>
    //             </FormGroup>
    //             <LoaderButton
    //                 block
    //                 type="submit"
    //                 bsSize="large"
    //                 isLoading={isLoading}
    //                 disabled={!validateConfirmationForm()}
    //             >
    //                 Verify
    //             </LoaderButton>
    //         </form>
    //     );
    // }

    function renderForm() {
        return (
            <form onSubmit={handleSubmit}>
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
                    Signup
                </LoaderButton>
            </form>
        );
    }

    return (
        <div className="Signup">
            {renderForm()}
            {/*{newUser === null ? renderForm() : renderConfirmationForm()}*/}
        </div>
    );
}
