import React from "react";
import {connect} from "react-redux";
import {history} from "../../helpers/history"
import {HeaderBottom, HeaderTop} from "../../components/Header";

const HeaderContainer = ({auth}: any) => {

    const cleanLocalStorage = () => {
        localStorage.clear();
        history.push('/auth/login')
    };

    return (
        <>
            <HeaderTop cleanLocalStorage={cleanLocalStorage}/>
            <HeaderBottom/>
        </>
    )
};

let mapStateToProps = (state: any) => {
    return {
        products: state.productReducer,
        auth: state.loginReducer.isAuthenticated,
    }
};

export default connect(mapStateToProps)(HeaderContainer)
