import React from "react";

export const ProductHome = (props: any) => {
    const {product} = props;

    return (
        <div className="col-3">
            <img src="" alt="img"/>
            <span>{product.name}</span>
            <span>{product.price}</span>
        </div>
    )
};
