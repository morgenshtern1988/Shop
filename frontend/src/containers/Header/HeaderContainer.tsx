import React from "react";
import {connect} from "react-redux";
import Search from "../../components/Search";

const HeaderContainer = (props: any) => {

    // console.log(props);

    const {products} = props;

    return (
        <>
            <p>Im Header Container</p>
            <div>
                <input type="text"/>
                <button onClick={props.onFindProduct}>click</button>
                <a href="http://localhost:3010/auth/login">Log in</a>
                <a href="http://localhost:3010/auth/register">Sign up</a>
            </div>
            {/*<Search/>*/}
        </>
    )
};
let mapStateToProps = (state: any) => {
    return {
        products: state.productReducer
    }
};
let mapDispatchToProps = (dispatch: any) => {
    return {
        onFindProduct:()=> dispatch({type:"FILTER_PRODUCT"})
        // filterProduct: dispatch({type:"FILTER_PRODUCT", payload:resultFilter})
        // filterProduct: dispatch({type:"FILTER_PRODUCT", payload:resultFilter})
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
