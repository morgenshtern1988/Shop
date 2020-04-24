import React from "react";
import {connect, useSelector} from "react-redux";
import {history} from "../../helpers/history"
import {RootState} from "../../types/inrerface";
import {Role} from "../../helpers/role";
// import {Link, Route} from "react-router-dom";

const HeaderContainer = (props: any) => {

    const {auth} = props;
    const cleanLocalStorage = () => {
        localStorage.clear();
        history.push('/auth/login')
    };
    const selectIsOn = (state: RootState) => state.loginReducer;
    const user = useSelector(selectIsOn);
    const name = user.firstName;
    const role = user.role;
    return (
        <>
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
            <header className="bottom-header d-flex pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <a href="http://localhost:3000/">Home</a>
                            <a href="http://localhost:3000/printing-editing">Book Catalog</a>
                        </div>
                        <div className="col-6 text-right">
                            <input type="text" placeholder="Search"/>
                            <button onClick={props.onFindProduct}>click</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
};

let mapStateToProps = (state: any) => {
    return {
        products: state.productReducer,
        auth: state.loginReducer.isAuthenticated,
    }
};
let mapDispatchToProps = (dispatch: any) => {
    return {
        onFindProduct: () => dispatch({type: "FILTER_PRODUCT"})
        // filterProduct: dispatch({type:"FILTER_PRODUCT", payload:resultFilter})
        // filterProduct: dispatch({type:"FILTER_PRODUCT", payload:resultFilter})
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
