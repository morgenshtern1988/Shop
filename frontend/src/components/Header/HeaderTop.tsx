import React from "react";
import {Role} from "../../helpers/role";
import Button from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../types/inrerface";
import {Link} from "react-router-dom";

export const HeaderTop = ({cleanLocalStorage}: any) => {
    const isActiveReducer = (state: RootState) => state.isActiveReducer;
    const isActive = useSelector(isActiveReducer);

    const isAuthenticated = (state: RootState) => state.loginReducer.isAuthenticated;
    const auth = useSelector(isAuthenticated);

    const buyReducer = (state: RootState) => state.buyReducer;
    const stateCart = useSelector(buyReducer);
    const dispatch = useDispatch();

    const selectIsOn = (state: RootState) => state.loginReducer;
    const user = useSelector(selectIsOn);
    const role = user.role;

    const showModal = () => {
        dispatch({type: "IS_SHOW_MODAL", payload: {data: true}})
    };

    const isShowListProfile = () => {
        if (isActive.listProfile) {
            dispatch({type: "VISIBLE_LIST_PROFILE", payload: {isShowProfile: false}})
        } else {
            dispatch({type: "VISIBLE_LIST_PROFILE", payload: {isShowProfile: true}})
        }
    };

    const showDashboard = () => {
        if (isActive.dashboard) {
            dispatch({type: "VISIBLE_DASHBOARD", payload: {isShowDashboard: false}})
        } else {
            dispatch({type: "VISIBLE_DASHBOARD", payload: {isShowDashboard: true}})
        }
    };
    return (
        <header className="top-header d-flex pt-4 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-6 align-self-center">
                        <a href="http://localhost:3000/">
                            <img src={require("../../img/logo.svg")} alt="logo"/>
                        </a>
                    </div>
                    <div className="col-6 text-right d-flex justify-content-end align-items-center">
                        {
                            auth ?
                                <>
                                    {
                                        Role.Admin === role ?
                                            <>
                                                <Button className={"bth-dashboard mr-3"} innerText="Admin Area"
                                                        onClick={() => showDashboard()}/>
                                                <span className="welcome-user">Admin!</span>
                                                {
                                                    isActive.dashboard ?
                                                        <div className="position-absolute list flex-column">
                                                            <Link to={"/admin/printing-editing?page=1"}>Product</Link>
                                                            <Link to={"/admin/authors?page=1"}>Author</Link>
                                                            <a href="http://localhost:3000/admin/users">Users</a>
                                                            <a href="http://localhost:3000/admin/orders">Orders</a>
                                                            <a href="http://localhost:3000/auth/login"
                                                               onClick={cleanLocalStorage}>Log Out</a>
                                                        </div> : <></>
                                                }
                                            </>
                                            :
                                            <>
                                                <Button className="welcome-user icon-user mr-3 position-relative"
                                                        onClick={() => isShowListProfile()}/>
                                                <Button className={"icon-shopping-cart cart"}
                                                        onClick={() => showModal()}/>
                                                <span
                                                    className="cart-count position-absolute">{stateCart.totalCount}</span>
                                                {
                                                    isActive.listProfile ?
                                                        <div className="position-absolute list flex-column">
                                                            <a href="http://localhost:3000/profile">My Profile</a>
                                                            <a href="http://localhost:3000/order">My Orders</a>
                                                            <a href="http://localhost:3000/auth/login"
                                                               onClick={cleanLocalStorage}>Log Out</a>
                                                        </div> : <></>
                                                }
                                            </>
                                    }
                                </>
                                :
                                <>
                                    <Link to="/auth/login">Log in</Link>
                                    <Link to="/auth/register">Sign up</Link>
                                </>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
};
