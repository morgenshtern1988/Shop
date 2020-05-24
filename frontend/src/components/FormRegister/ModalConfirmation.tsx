import React, {useEffect} from "react";
import {Modal} from "react-bootstrap";
import {RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";
import {getConfigEmail} from "../../services/user";
import {Link} from "react-router-dom";

export const ModalConfirmation = (id: any) => {
    const registerReducer = (state: RootState) => state.registerReducer;
    const register = useSelector(registerReducer);
    const dispatch = useDispatch();
    console.log(register);

    const {loading, info} = register;
    console.log("code:", info);
    useEffect(() => {
        getConfigEmail(id)
            .then(info => {
                dispatch({type: "@@register/REGISTER_START", payload: {loading: false, info: info.msg}})
            })
            .catch(err => console.log("err", err))
    }, []);
    return (
        <Modal.Dialog>
            <Modal.Body>
                {loading ? <h1>Data processing...</h1> : <>
                    <h1>{info}</h1>
                    <Link to="/auth/login">Log In.</Link>
                </>}
            </Modal.Body>
        </Modal.Dialog>
    )
};
