import React from "react";
import Button from "../Button";
import {Cart} from "../../infrastructure/Cart";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../types/inrerface";

export const ModalCart = ({product}: any) => {

    const redirectReducer = (state: RootState) => state.buyReducer;
    let stateBasket = useSelector(redirectReducer);
    const dispatch = useDispatch();

    const changeAmount = (valueOption: string) => {
        const newArr = Cart.amountCart({product, valueOption, stateBasket});
        dispatch({
            type: "BUY_PRODUCT",
            payload: {
                productArr: newArr.productArr,
                totalCount: newArr.totalCount,
                totalPrice: newArr.totalPrice
            }
        });
    };
    const deleteProductInCart = ({id, stateBasket}: any) => {
        const newArr = Cart.deleteProductInCart({id, stateBasket});
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
        <>
            <tr>
                <td><img src={product.cover_image} alt={"Image:" + product.name}/></td>
                <td>{product.author.map(((a: any) => {
                    return <span key={a._id}>{a.name}</span>
                }))}
                </td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
                <td>
                    <input className="w-25 pl-1" type="number" defaultValue={product.itemsCount}
                           onChange={(event) => changeAmount(event.target.value)}/>
                </td>
                {/*<td>product.totalPrice</td>*/}
                <td>{product.itemsPrice}</td>
                <td><Button innerText="Delete" onClick={() => deleteProductInCart({id: product._id, stateBasket})}/>
                </td>
            </tr>
        </>
    )
};
