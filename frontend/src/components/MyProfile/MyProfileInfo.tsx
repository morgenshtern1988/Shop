import React from "react";
import {MyProfile} from "./MyProfile";

export const MyProfileInfo = ({user}: any) => {
    return (
        <div className="my-profile bg-dark mb-5">
            <div className="container">
                <div className="wrap-my-profile row ">
                <MyProfile/>
                    <div className="col-6 d-flex flex-column wrap-info">
                    <label htmlFor="">Your First Name </label><input type="text" defaultValue={user.firstName}/>
                    <label htmlFor="">Your Last Name </label><input type="text" defaultValue={user.lastName}/>
                    <label htmlFor="">E-mail</label><input type="text" defaultValue={user.email}/>
                </div>
                </div>
            </div>
        </div>

    )
};
