import React, {useState} from "react";
import {
    HelpBlock,
    FormGroup,
    FormControl,
    ControlLabel
} from "react-bootstrap";
import LoaderButton from "../../components/LoaderButton/LoaderButton";
import {useFormFields} from "../../libs/hooksLib";
import {postUserAddDb} from "../../reduxStore/register/register";

export default function Signup(props: any) {
    const [fields, handleFieldChange] = useFormFields({
        firstName:"",
        lastName:"",
        email: "",
        password: "",
        confirmPassword: "",
        confirmationCode: ""
    });
    const [newUser, setNewUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    function validateForm() {
        return (
            fields.email.length > 0 &&
            fields.password.length > 0 &&
            fields.lastName.length > 0 &&
            fields.firstName.length > 0 &&
            fields.password === fields.confirmPassword
        );
    }

    function validateConfirmationForm() {
        return fields.confirmationCode.length > 0;
    }

    async function handleSubmit(event: any) {
        event.preventDefault();

        setIsLoading(true);
        const data = {
            firstName:fields.firstName,
            lastName:fields.lastName,
            email:fields.email,
            password:fields.password,
        };
        postUserAddDb("http://localhost:7227/auth/register",data);
        // setNewUser("test");

        setIsLoading(false);
    }

    async function handleConfirmationSubmit(event: any) {
        event.preventDefault();
        setIsLoading(true);
    }

    function renderConfirmationForm() {
        return (
            <form onSubmit={handleConfirmationSubmit}>
                <FormGroup controlId="confirmationCode" bsSize="large">
                    <ControlLabel>Confirmation Code</ControlLabel>
                    <FormControl
                        autoFocus
                        type="tel"
                        onChange={handleFieldChange}
                        value={fields.confirmationCode}
                    />
                    <HelpBlock>Please check your email for the code.</HelpBlock>
                </FormGroup>
                <LoaderButton
                    block
                    type="submit"
                    bsSize="large"
                    isLoading={isLoading}
                    disabled={!validateConfirmationForm()}
                >
                    Verify
                </LoaderButton>
            </form>
        );
    }

    function renderForm() {
        return (
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="firstName" bsSize="large">
                    <ControlLabel>firstName</ControlLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        value={fields.firstName}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                <FormGroup controlId="lastName" bsSize="large">
                    <ControlLabel>lastName</ControlLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        value={fields.lastName}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={fields.email}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        type="password"
                        value={fields.password}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                <FormGroup controlId="confirmPassword" bsSize="large">
                    <ControlLabel>Confirm Password</ControlLabel>
                    <FormControl
                        type="password"
                        onChange={handleFieldChange}
                        value={fields.confirmPassword}
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
            {newUser === null ? renderForm() : renderConfirmationForm()}
        </div>
    );
}
