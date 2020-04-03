import React from "react";
import LoginFromRedux from "../../components/Login/Login";
import {connect} from "react-redux";
import {singInUser} from "../../reduxStore/login/action";


const Login = (props: any) => {

    const onSubmit = (formData: any) => {
        console.log(formData);
        singInUser("http://localhost:8888/auth/login", formData)

    };
    return (
        <div>
            <LoginFromRedux onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = (state: any) => ({
    user: state.loginReducer
});

const mapDispatchToProps = (dispatch: any) => ({
    // postUserFromApi: () => dispatch(postUserThunk("http://localhost:8888/auth/register"))
});
export default connect(mapStateToProps, mapDispatchToProps)(Login)
