import React from "react";
import RegisterFromRedux from "../../components/Register/Register";
import {connect} from "react-redux";
import {postUserAddDb} from "../../reduxStore/Register/register";

const Register = (props: any) => {

    console.log("*----");
    // console.log(props);
    console.log("----");

    const onSubmit = (formData: any) => {
        postUserAddDb("http://localhost:7227/auth/register", formData)
    };

    return (
        <div className="modal-login">
            <h1>Register</h1>
            <RegisterFromRedux onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = (state: any) => ({
    user: state.registerReducer
});

const mapDispatchToProps = (dispatch: any) => ({
    // postUserFromApi: () => dispatch(postUserThunk("http://localhost:3001/auth/register"))
});
export default connect(mapStateToProps, mapDispatchToProps)(Register)
