import React from "react";
import Button from "../Button";

const Order = ({order}: any) => {
    console.log(order);
    let {amount, items, _id} = order;

    return (
        <tr>
            <td>{_id}</td>
            <td>{items.map((o: any) => {
                return <p key={o._id}>{o.printing_edition_id.name}</p>
            })}
            </td>
            <td>{items.map((o: any) => {
                return <p key={o._id}>{o.printing_edition_id.description}</p>
            })}</td>
            <td>{amount}</td>
            <td>Successful</td>
            <td>
                <Button onClick={() => console.log("a")} className="icon-pan btn-edit mr-2"/>
                <Button onClick={() => console.log("delete")} className="icon-close btn-close"/>
            </td>
        </tr>
    )
};

export default Order;
