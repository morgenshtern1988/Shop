import React from "react";

export const MyProfile = () => {
    return (
        <div className="col-4 d-flex flex-column justify-content-center text-center">
            <h1>MyProfile</h1>
            <div className="wrap-link">
                <div className="wrap-icon-user ">
                    <a href="http://localhost:3000/profile/edit" className="icon-user"/>
                </div>
                <div className="edit-profile">
                    <a href="http://localhost:3000/profile/edit" className="">edit profile</a>
                </div>
            </div>
        </div>
    )
};
