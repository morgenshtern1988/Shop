import React from "react";
import {Table} from "react-bootstrap";
import {RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";
import Button from "../Button";
import {ModalCartTable} from "./index";
import StripeCheckout from "react-stripe-checkout";
import {Orders} from "../../../shared/models/order";
import {asyncCreateOrder} from "../../services/order";

export const ModalCart = ({hideModal}: any) => {

    const buyReducer = (state: RootState) => state.buyReducer;
    const idReducer = (state: RootState) => state.loginReducer._id;
    const stateCart = useSelector(buyReducer);
    const _id = useSelector(idReducer);
    const dispatch = useDispatch();

    const disableModalStripe = () => {
        dispatch({type: "IS_SHOW_MODAL", payload: {idShowModalBasket: false}})
    };
//5375414105003817
    const buyNow = async (token: any) => {
        let productArr = stateCart.productArr.map((product: any) => {
            return {
                printing_edition_id: product._id,
                count: product.itemsCount,
                price: product.itemsPrice,
                currency: "USA",
            }
        });
        const order: Orders = {
            user_id: _id,
            items: productArr,
            amount: stateCart.totalPrice,
            transaction_id: token.id,
        };
        const result = await asyncCreateOrder(order);
        if (result) {
            disableModalStripe()
        }
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
                            return <ModalCartTable
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
                    <StripeCheckout
                        token={(token) => {
                            buyNow(token);
                        }}
                        stripeKey="pk_test_k5zfmHubfmPQvJoSvg16goIX007DVoCjJt"
                    />
                </div>
            </div>
        </>
    )
};
