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

    const selectIsOn = (state: RootState) => state.loginReducer;
    const user = useSelector(selectIsOn);
    const name = user.firstName;
    const role = user.role;
    return (
        <>
            <HeaderTop auth={auth} cleanLocalStorage={cleanLocalStorage} role={role} name={name}/>
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
/*let mapDispatchToProps = (dispatch: any) => {
    return {
        onFindProduct: () => dispatch({type: "FILTER_PRODUCT"})
        // filterProduct: dispatch({type:"FILTER_PRODUCT", payload:resultFilter})
        // filterProduct: dispatch({type:"FILTER_PRODUCT", payload:resultFilter})
    }
};*/
export default connect(mapStateToProps)(HeaderContainer)
