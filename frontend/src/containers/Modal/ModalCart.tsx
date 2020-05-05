import React from "react";
import {Table} from "react-bootstrap";
import {RootState} from "../../types/inrerface";
import {useSelector} from "react-redux";
import Button from "../../components/Button";
import {ModalCart} from "../../components/Modal/ModalCart";

export const ModalCartContainer = () => {
    const buyReducer = (state: RootState) => state.buyReducer;
    const stateCart = useSelector(buyReducer);
    // console.log(stateCart)
    return (
        <>
            <Table responsive className="">
                <thead className="bottom-modal ">
                <tr className="">
                    <th>Product</th>
                    <th></th>
                    <th></th>
                    <th>Unit price</th>
                    <th>Qty</th>
                    <th>Order Amount</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    stateCart.productArr.map((product: any) => {
                            return <ModalCart
                                key={product._id}
                                product={product}
                            />
                        }
                    )
                }
                </tbody>
            </Table>
            <span>Total Price: {stateCart.totalPrice}</span>
            <div>
                <Button innerText={"Cancel"}/>
                <Button innerText={"Buy Now"}/>
            </div>
        </>
    )
};
