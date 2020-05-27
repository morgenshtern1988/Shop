import React from "react";
import {ModalCartContainer} from "./ModalCartContainer";
import {RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";
import {AddNewProduct, ModalAuthor} from "../../components/Modal";
import {ModalStripe} from "../../components/Modal/ModalStripe";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";

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
        if (e.target.className === 'modal' ||
            e.target.id === "cancel" ||
            e.target.className === "icon-close" ||
            e.target.id === "btn-save") {
            dispatch({type: "IS_SHOW_MODAL_ADD_PRODUCT", payload: {isDisplay: false}})
        }
    };
    const hideModalAddProductStripe = (e: any) => {
        // console.log(e.target)
        if (e.target.className === 'modal') {
            dispatch({type: "IS_SHOW_MODAL_STRIPE", payload: {isDisplay: false}})
        }
    };

    const stripePromise = loadStripe('pk_test_k5zfmHubfmPQvJoSvg16goIX007DVoCjJt');
    stripePromise.then((item: any) => console.log(item));

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
            {
                modal.showModalStripe &&
                <div className="modal" onClick={(e: any) => hideModalAddProductStripe(e)}>
                    <Elements stripe={stripePromise}>
                        <ModalStripe/>
                    </Elements>
                </div>
            }
        </>
    )
};
