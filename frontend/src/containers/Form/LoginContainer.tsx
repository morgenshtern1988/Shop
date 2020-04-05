import React from "react";
import LoginFromRedux from "../../components/Login/Login";
import {connect} from "react-redux";
// import {singInUser} from "../../reduxStore/login/action";

const Login = (props: any) => {

    const {postUserFromApi, user} = props;
console.log(user)
    const onSubmit = (formData: any) => {
        const singInUser = async (url: string, data: any) => {
            const result = await fetch(url, {
                method: "POST",
                // mode: 'cors',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (result.status === 200) {
                const data = await result.text().then((token) => token);
                console.log("success");
                postUserFromApi({type: "@@login/LOGIN_SUCCESS", payload: data})
            }
        };
        // console.log(data);
        singInUser("http://localhost:7227/auth/login", formData);
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
    postUserFromApi: () => dispatch(({type: "@@login/LOGIN_SUCCESS", payload: {}}))
});
export default connect(mapStateToProps, mapDispatchToProps)(Login)
