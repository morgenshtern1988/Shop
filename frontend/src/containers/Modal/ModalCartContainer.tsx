import React from "react";
import {Table} from "react-bootstrap";
import {RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";
import Button from "../../components/Button";
import {ModalCart} from "../../components/Modal";

export const ModalCartContainer = ({hideModal}: any) => {

    const buyReducer = (state: RootState) => state.buyReducer;
    const stateCart = useSelector(buyReducer);
    const dispatch = useDispatch();

    const showModalStripe = () => {
        dispatch({type: "IS_SHOW_MODAL_STRIPE", payload: {isDisplay: true}})
    };


    return (
        <>
                <div className="wrap-modal-cart">
                    <Table responsive className="">
                        <thead className="">
                        <tr className="bottom-modal">
                            <th><h4>Product</h4></th>
                            <th/>
                            <th/>
                            <th>Unit price</th>
                            <th>Qty</th>
                            <th>Order Amount</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {stateCart.productArr ?
                            stateCart.productArr.map((product: any) => {
                                return <ModalCart
                                    key={product._id}
                                    product={product}
                                />
                            })
                            : <></>
                        }
                        <tr>
                            <td/>
                            <td/>
                            <td/>
                            <td/>
                            <td/>
                            <td><p>Total Price:<span>{stateCart.totalPrice}</span></p></td>
                            <td/>
                        </tr>
                        </tbody>
                    </Table>
                    <div className="mb-5 text-center">
                        <Button innerText={"Cancel"} className="button-bottom" id={"cancel"} onClick={hideModal}/>
                        <Button innerText={"Buy Now"} className="button-bottom btn-purchase" onClick={showModalStripe}/>
                    </div>
                </div>
        </>
    )
};
