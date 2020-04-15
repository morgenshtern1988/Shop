import React from "react";
import {connect} from "react-redux";

const HeaderContainer = (props: any) => {
    // console.log(props);
    const {auth} = props;
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
                        <div>
                            <a href="http://localhost:3010/auth/login" onClick={cleanLocalStorage}>Log Out</a>
                            <a href="http://localhost:3010/admin/printing-edition">Admin Aria</a>
                        </div>
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
