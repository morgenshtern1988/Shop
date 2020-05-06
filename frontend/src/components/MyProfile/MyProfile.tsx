import React from "react";
import {Redirect} from "react-router";
import {RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";

export const MyProfile = () => {

    return (
        <div>
            <h1>MyProfile</h1>
            <a href="http://localhost:3000/user/profile/edit">link</a>
        </div>

    )
};
