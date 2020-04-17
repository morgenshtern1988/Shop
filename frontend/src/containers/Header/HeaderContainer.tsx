import React from "react";
import {connect} from "react-redux";
import "./style.scss";

const HeaderContainer = (props: any) => {
    const {auth} = props;
    const cleanLocalStorage = () => {
        localStorage.clear()
    };
    return (
        <>
            <header className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-6 align-self-center">
                            {/*<img src="../../img/img1.png" alt="logo"/>*/}
                            <img src={require("../../img/logo.svg")}/>
                        </div>
                        <div className="col-6 align-self-center">
                            {
                                auth ?
                                    <div>
                                        <a href="http://localhost:3000/auth/login" onClick={cleanLocalStorage}>Log
                                            Out</a>
                                        <a href="http://localhost:3000/admin/printing-edition">Admin Aria</a>
                                    </div>
                                    :
                                    <>
                                        <a href="http://localhost:3000/auth/login">Log in</a>
                                        <a href="http://localhost:3000/auth/register">Sign up</a>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </header>
            <header className="bottom-header">
                <span>home</span><span>Book Catalog</span>
                <input type="text"/>
                <button onClick={props.onFindProduct}>click</button>
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
