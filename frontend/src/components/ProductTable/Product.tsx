import React from "react";

const Product = (props: any) => {
    const {product} = props;
    return (
        <tr>
            <td>id</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.type}</td>
            <td>{product.author}</td>
            <td>{product.price}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    )
};

export default Product;
