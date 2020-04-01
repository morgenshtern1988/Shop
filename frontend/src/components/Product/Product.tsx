import React from "react";

const Product = (props:any) => {
    const {product} = props;
    return (
        <div className="col">
            <div className="product-card">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <span>{product.cover_image}</span>
                <span>{product.price + " " + product.currency}</span>
            </div>
        </div>
    )
};
export default Product;
