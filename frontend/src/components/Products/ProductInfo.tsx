import React, {useEffect} from "react";
import {useDispatch} from "react-redux";

export const ProductInfo = (props: any) => {
    const {product} = props;
    console.log(product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: "REDIRECT_NEW_LINK", payload: {_id: product._id, redirect: false, product,}})
    }, []);
    return (
        <div>
            <div className="row product-info pt-xl-5 pt-lg-3 pt-sm-2 mb-5">
                <div className="col-img col-6 text-center">
                    <img src={require("../../img/img1.png")} alt={"Image:" + product.name}/>
                </div>
                <div className="row col-6 pl-5">
                    <div className="col-6 d-flex align-self-center flex-column">
                        <h1>{product.name}</h1>
                        <p>spaces designer for the senses</p>
                        <p className="mb-4">Author</p>
                        <div className="d-flex justify-content-between select-sum mb-4">
                            <span>Qty:</span>
                            <select name="sum" id="sum">
                                <option value="one">1</option>
                                <option value="two">2</option>
                                <option value="tree">3</option>
                            </select>
                            <span>{product.price} {product.currency}</span>
                        </div>
                        <button className="pr-3 pl-3 pt-2 pb-2 border-0">Add to cart</button>
                    </div>
                </div>
            </div>
            <div>
                {product.description}
            </div>
        </div>
    )
};
