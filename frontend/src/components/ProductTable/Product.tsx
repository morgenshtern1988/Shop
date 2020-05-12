import React from "react";
import Button from "../Button";
import {deleteBookInDB} from "../../reducers/product/product";
import {useDispatch} from "react-redux";

const Product = ({product}: any) => {
    const dispatch = useDispatch();
    const deleteProduct = async ({id}: any) => {
        await dispatch(deleteBookInDB(id))
    };

    return (
        <tr>
            <td>id</td>
            <td>{product.name}</td>
            <td className={"description"}>{product.description}</td>
            <td>{product.type}</td>
            <td>{product.author_ids.map((a: any) => {
                return <p key={a._id}>{a.name}</p>
            })}</td>
            <td>{product.price}</td>
            <td>
                <Button onClick={() => console.log("a")} className="icon-pan btn-edit mr-2"/>
                <Button onClick={() => deleteProduct({id: product._id})} className="icon-close btn-close"/>
            </td>
        </tr>
    )
};

export default Product;
