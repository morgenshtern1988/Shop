import React from "react";

export const ModalCart = ({product}:any) =>{
    return(
        <tr>
            <td>{product.img}</td>
            <td>{product.author}</td>
            <td></td>
            <td>{product.price}$</td>
            <td>
                <select name="sum" id="sum">
                    <option defaultValue="one">1</option>
                    <option defaultValue="two">2</option>
                    <option defaultValue="three">3</option>
                    <option defaultValue="four">4</option>
                    <option defaultValue="five">5</option>
                    <option defaultValue="six">6</option>
                    <option defaultValue="seven">7</option>
                </select>
            </td>
            <td>{product.totalPrice}</td>
            <td>Delete</td>
        </tr>
    )
}
