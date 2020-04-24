import React, {useEffect} from "react";
import {useDispatch} from "react-redux";

export const ProductInfo = (props: any) => {
    console.log(props);
    const {product} = props;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: "REDIRECT_NEW_LINK", payload: {_id: product._id, redirect: false, product,}})

    },[]);
    return (
        <div>
            <h1>{product.name}</h1>
            <p>aaaaaaaaaaaa</p>
        </div>
    )
};
