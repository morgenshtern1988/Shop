import React from "react";
import {MyProfile} from "./MyProfile";
import Button from "../Button";

export const MyProfileEdit = ({user}: any) => {
    return (
        <div className="my-profile bg-dark mb-5 mt-5 container">
            <div className="wrap-my-profile row ">
                <MyProfile/>
                <div className="col-6 d-flex flex-column wrap-info">
                    <div className="mb-3 d-flex flex-column wrap-info">
                        <label htmlFor="">Your First Name </label><input type="text" defaultValue={user.firstName}/>
                        <label htmlFor="">Your Last Name </label><input type="text" defaultValue={user.lastName}/>
                        <label htmlFor="">E-mail</label><input type="text" defaultValue={user.email}/>
                        <label htmlFor="">Password</label><input type="password"/>
                        <label htmlFor="">Confirm password</label><input type="text"/>
                    </div>
                    <div className="text-right">
                        <Button innerText={"Cancel"} className={"cancel"}/>
                        <Button innerText={"Save"} className={""}/>
                    </div>
                </div>
            </div>
        </div>
    )
};
