import React from "react";
import {Table} from "react-bootstrap";
import {RootState} from "../../types/inrerface";
import {useSelector} from "react-redux";
import Button from "../../components/Button";
import {ModalCart} from "../../components/Modal/ModalCart";

export const ModalCartContainer = () => {
    const buyReducer = (state: RootState) => state.buyReducer;
    const stateCart = useSelector(buyReducer);

    const arr = stateCart.productArr.filter((product: any) => {
        if (product.totalCount !== 0) {
            return true
        }
        return false
    });
    console.log(arr);
    return (
        <>
            <Table responsive className="table-striped">
                <thead className="thead-dark ">
                <tr>
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
                    arr.map((product: any) => {
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
