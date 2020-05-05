import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../types/inrerface";
import {Cart} from "../../infrastructure/Cart";

export const ProductInfo = ({product}: any) => {

    const redirectReducer = (state: RootState) => state.buyReducer;
    let stateBasket = useSelector(redirectReducer);
    const dispatch = useDispatch();

    const [valueOption, setValueOption] = useState(undefined);

    useEffect(() => {
        dispatch({type: "REDIRECT_NEW_LINK", payload: {_id: product._id, redirect: false, product,}});
    }, []);


    const addToCart = ({product, valueOption}: any) => {
        const newArr = Cart.addToCart({product, valueOption, stateBasket});
        dispatch({
            type: "BUY_PRODUCT",
            payload: {
                productArr: newArr.productArr,
                totalCount: newArr.totalCount,
                totalPrice: newArr.totalPrice
            }
        });
    };

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
                            <select name="sum" id="sum" onChange={(e: any) => setValueOption(e.target.value)}>
                                <option defaultValue={"default"} hidden={true}>Count..</option>
                                <option defaultValue="one">1</option>
                                <option defaultValue="two">2</option>
                                <option defaultValue="three">3</option>
                                <option defaultValue="four">4</option>
                                <option defaultValue="five">5</option>
                                <option defaultValue="six">6</option>
                                <option defaultValue="seven">7</option>
                            </select>
                            <span>{product.price} {product.currency}</span>
                        </div>
                        <button className="pr-3 pl-3 pt-2 pb-2 border-0"
                                disabled={!valueOption}
                                onClick={() => addToCart({
                                    product,
                                    valueOption,
                                    stateBasket,
                                })}>Add to cart
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {product.description}
            </div>
        </div>
    )
};
