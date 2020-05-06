import React from "react";
import {ModalCartContainer} from "./ModalCart";
import {RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";

export const ModalContainer = () => {

    const redirectReducer = (state: RootState) => state.modalReducer;
    const modal = useSelector(redirectReducer);
    const dispatch = useDispatch();

    const hideModal = (e: any) => {
        if (e.target.id === 'cancel')
            dispatch({type: "IS_SHOW_MODAL", payload: {idShowModalBasket: false}})
    };
    return (
        <>
            {modal.idShowModalBasket &&
            <div className="modal" onClick={hideModal}>
                <ModalCartContainer hideModal={hideModal}/>
            </div>}
        </>
    )
};
