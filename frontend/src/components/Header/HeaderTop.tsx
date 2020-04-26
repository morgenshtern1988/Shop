import React from "react";
import {Role} from "../../helpers/role";

export const HeaderTop = ({auth, cleanLocalStorage, role, name}: any) => {
    return (
        <header className="top-header d-flex pt-4 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-6 align-self-center">
                        <a href="http://localhost:3000/">
                            <img src={require("../../img/logo.svg")} alt="logo"/>
                        </a>
                    </div>
                    <div className="col-6 align-self-center text-right">
                        {
                            auth ?
                                <div>
                                    {
                                        Role.Admin === role ?
                                            <>
                                                <a href="http://localhost:3000/auth/login"
                                                   onClick={cleanLocalStorage}>Log Out</a>
                                                <a href="http://localhost:3000/admin">Admin Area</a>
                                                <p className="welcome-user">Admin!</p>
                                            </>
                                            :
                                            <>
                                                <p className="welcome-user">Hello, {name}</p>
                                                <a href="http://localhost:3000/auth/login"
                                                   onClick={cleanLocalStorage}>Log Out</a>
                                            </>
                                    }
                                </div>
                                :
                                <div>
                                    <a href="http://localhost:3000/auth/login">Log in</a>
                                    <a href="http://localhost:3000/auth/register">Sign up</a>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
};
