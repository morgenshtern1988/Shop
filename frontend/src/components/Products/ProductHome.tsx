import React from "react";

export const ProductHome = (props: any) => {
    const {product} = props;
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
            <div className=" wrap-product">
                <img src={require("../../img/img1.png")} alt="logo"/>
                <h1 className="text-center text-dark">{product.name}</h1>
                <p className="author text-center text-dark">Author</p>
                <p className="price text-center font-italic  ">{product.price} {product.currency}</p>
            </div>
        </div>
    )
};
