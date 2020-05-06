import React from "react";
import Button from "../Button";
import {useDispatch} from "react-redux";
import {deleteProduct} from "../../services/productsApi";

const Product = ({product}: any) => {

    const dispatch = useDispatch();
    const deleteBookInDB = async (id: string) => {
        // console.log(e)
        deleteProduct(id)
            .then((data) => {
                dispatch({type: 'INIT_PRODUCT', payload: data})
            })
            .catch((err) => console.log(err))
    };
    return (
        <tr>
            <td>id</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.type}</td>
            <td>{product.author}</td>
            <td>{product.price}</td>
            <td>
                <Button onClick={() => deleteBookInDB(product._id)} innerText={"Delete"}/>
                <Button onClick={() => console.log("a")} innerText={"Edit"}/>
            </td>
        </tr>
    )
};

export default Product;
