import React from "react";
import {Redirect} from "react-router";

export const MyProfile = () => {
    return (
        <div>
          <h1>MyProfile</h1>
          <Redirect to="/user/profile/edit"/>
        </div>

    )
};
