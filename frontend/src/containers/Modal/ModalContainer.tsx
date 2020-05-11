import React from "react";
import {ModalCartContainer} from "./ModalCartContainer";
import {RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";
import {AddNewProduct, ModalAuthor} from "../../components/Modal";

export const ModalContainer = () => {

    const redirectReducer = (state: RootState) => state.modalReducer;
    const modal = useSelector(redirectReducer);
    const dispatch = useDispatch();

    const hideModal = (e: any) => {
        if (e.target.id === 'cancel')
            dispatch({type: "IS_SHOW_MODAL", payload: {idShowModalBasket: false}})
    };
    const hideModalAuthor = (e: any) => {
        if (e.target.className === 'modal' ||
            e.target.id === "cancel" ||
            e.target.className === "icon-close" ||
            e.target.id === "btn-add")
            dispatch({type: "IS_SHOW_MODAL_ADD_AUTHOR", payload: {isDisplay: false}})
    };
    const hideModalAddProduct = (e: any) => {
        // console.log("Event:", e.target)
        // console.log("Click in className : ", e.target.className);
        if (e.target.className === 'modal' ||
            e.target.id === "cancel" ||
            e.target.className === "icon-close" ||
            e.target.id === "btn-save") {
            dispatch({type: "IS_SHOW_MODAL_ADD_PRODUCT", payload: {isDisplay: false}})
        }
    };

    return (
        <>
            {
                modal.idShowModalBasket &&
                <div className="modal">
                    <ModalCartContainer hideModal={hideModal}/>
                </div>
            }
            {
                modal.showAddAuthor &&
                <div className="modal" onClick={(e: any) => hideModalAuthor(e)}>
                    <ModalAuthor hideModalAuthor={hideModalAuthor}/>
                </div>
            }
            {
                modal.showAddProduct &&
                <div className="modal" onClick={(e: any) => hideModalAddProduct(e)}>
                    <AddNewProduct hideModalAddProduct={hideModalAddProduct}/>
                </div>
            }
        </>
    )
};
