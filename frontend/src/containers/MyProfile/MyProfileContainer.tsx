import React from "react";
import {Route, Switch} from "react-router";
import {MyProfileInfo, MyProfileEdit} from "../../components/MyProfile";
import {RootState} from "../../types/inrerface";
import {useSelector} from "react-redux";
import {HeaderTop} from "../../components/Header";

export const MyProfileContainer = ({roles}: any) => {

    const selectIsOn = (state: RootState) => state.loginReducer;
    const user = useSelector(selectIsOn);
    const role = user.role;
    return (
        <>
            <HeaderTop/>
            {role === roles ?
                <Switch>
                    <Route exact path="/profile" render={() => <MyProfileInfo user={user}/>}/>
                    <Route exact path="/profile/edit" render={() => <MyProfileEdit user={user}/>}/>
                </Switch>
                :
                <h1>Отказано в доступе</h1>
            }
        </>
    )
};
