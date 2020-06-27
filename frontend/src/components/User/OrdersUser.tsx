import React, {useEffect} from "react";
import {HeaderTop} from "../Header";
import ReactTable from 'react-table'
import {thunkGetOrders} from "../../reducers/buy/buy";
import {RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";
import {Table} from "react-bootstrap";
import Order from "./Order";
import {IOrder} from "../../../shared/models/order";

export const OrdersUser = () => {
    const storeUserID = (state: RootState) => state.loginReducer._id;
    const storeOrders = (state: RootState) => state.buyReducer.orders;
    const id = useSelector(storeUserID);
    const orders = useSelector(storeOrders);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(thunkGetOrders({user_id: id}))
    }, []);
    return (
        <>
            <div className="container">
                <h1>Orders</h1>
                <Table>
                    <thead className="thead-dark">
                    <tr>
                        <th>OrderID</th>
                        <th>Order Time</th>
                        <th>Product</th>
                        <th>Title</th>
                        <th>Qty</th>
                        <th>Order amount</th>
                        <th>Order Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map((ord: IOrder) => {
                            return <Order order={ord} key={ord.transaction_id}/>
                        })
                    }
                    </tbody>
                </Table>
            </div>
        </>
    )
};
