import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom"
import Search from "../../components/Search";

const HeaderContainer = (props: any) => {
    // console.log(props);
    const {products, auth} = props;
    const cleanLocalStorage = () => {
        localStorage.clear()
    };
    return (
        <>
            <p>Im Header Container</p>
            <div>
                <input type="text"/>
                <button onClick={props.onFindProduct}>click</button>
                {
                    auth ?
                        <a href="http://localhost:3010/auth/login" onClick={cleanLocalStorage}>Log Out</a>
                        :
                        <>
                            <a href="http://localhost:3010/auth/login">Log in</a>
                            <a href="http://localhost:3010/auth/register">Sign up</a>
                        </>
                }
            </div>
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
