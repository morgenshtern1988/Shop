import React from "react";
import {connect, useSelector} from "react-redux";
import {history} from "../../helpers/history"
import {RootState} from "../../types/inrerface";
import {HeaderBottom, HeaderTop} from "../../components/Header";

const HeaderContainer = ({auth}: any) => {

    const cleanLocalStorage = () => {
        localStorage.clear();
        history.push('/auth/login')
    };

    // const selectIsOn = (state: RootState) => state.loginReducer;
    // const user = useSelector(selectIsOn);
    // const name = user.firstName;
    // const role = user.role;
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
