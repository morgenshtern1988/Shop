import React, {useState} from "react";
import {MyProfile} from "./MyProfile";
import Button from "../Button";
import {Form} from "react-bootstrap";
import LoaderButton from "../LoaderButton/LoaderButton";
import {resetPassword} from "../../services/user";

export const MyProfileEdit = ({user}: any) => {
    const [stateInfoUser, setStateInfoUser] = useState({
        oldPassword: user.password,
        newPassword: "",
        confirmPassword: ""
    });


    function validateForm() {
        return (
            stateInfoUser.newPassword.length > 0 &&
            stateInfoUser.newPassword === stateInfoUser.confirmPassword
        );
    }

    const saveUpdateInfoUser = (e: any) => {
        e.preventDefault();
        let resetPass = {
            id: user._id,
            oldPassword: user.password,
            newPassword: stateInfoUser.newPassword,
        };
        resetPassword(resetPass)
            .then(result => console.log(result))
            .catch(e => console.log(e))
    };

    return (
        <div className="my-profile bg-dark mb-5 mt-5 container">
            <div className="d-flex wrap-my-profile">
                <MyProfile/>
                <Form onSubmit={saveUpdateInfoUser} className="col-6 d-flex flex-column wrap-info">
                    <div className="mb-3 d-flex flex-column wrap-info">
                        <label htmlFor="">Your First Name </label><input type="text" defaultValue={user.firstName}
                                                                         readOnly
                    />
                        <label htmlFor="">Your Last Name </label><input type="text" defaultValue={user.lastName}
                                                                        readOnly/>
                        <label htmlFor="">E-mail</label><input type="text" defaultValue={user.email}
                                                               readOnly/>
                        <label htmlFor="">Password</label><input type="password"
                                                                 onChange={(e: any) => setStateInfoUser({
                                                                     ...stateInfoUser,
                                                                     newPassword: e.target.value
                                                                 })}/>
                        <label htmlFor="">Confirm password</label><input type="password"
                                                                         onChange={(e: any) => setStateInfoUser({
                                                                             ...stateInfoUser,
                                                                             confirmPassword: e.target.value
                                                                         })}/>
                        <div className="text-right">
                            <Button innerText={"Cancel"} className={"cancel"}/>
                            <LoaderButton type="submit" disabled={!validateForm()}>Save </LoaderButton>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
};
