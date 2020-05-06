import React from "react";
import {Route, Switch} from "react-router";
import {MyProfile, MyProfileEdit} from "../../components/MyProfile";
import {RootState} from "../../types/inrerface";
import {useSelector} from "react-redux";

export const MyProfileContainer = ({roles}: any) => {

    const selectIsOn = (state: RootState) => state.loginReducer.role;
    const role = useSelector(selectIsOn);

    return (
        <>
            {role === roles ?
                <Switch>
                    <Route exact path="/user/profile" render={() => <MyProfile/>}/>
                    {/*<Route exact path="/user/profile/edit" render={() => <MyProfileEdit/>}/>*/}
                </Switch>
                :
                <h1>Отказано в доступе</h1>
            }
        </>
    )
};
