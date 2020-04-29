import React from "react";
import {Table} from "react-bootstrap";

export const ModalBasket = () => {
    return (
        <Table responsive className="table-striped">
            <thead className="thead-dark ">
            <tr>
                <th>Product</th>
                <th></th>
                <th></th>
                <th>Unit price</th>
                <th>Qty</th>
                <th>Order Amount</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {/*{*/}
            {/*    basketProducts.map((product: any) => {*/}
            {/*            return <Product*/}
            {/*                product={product}*/}
            {/*                key={product._id}/>*/}
            {/*        }*/}
            {/*    )*/}
            {/*}*/}
            </tbody>
        </Table>
    )
};
