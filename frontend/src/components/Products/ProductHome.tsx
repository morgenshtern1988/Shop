import React from "react";
import {Redirect} from "react-router";
import {IModelProduct, RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";
import {history} from "../../helpers/history";

export const ProductHome = ({product}: any) => {
    // console.log(product)
    const selectIsOn = (state: RootState) => state.redirectReducer;
    const redirect = useSelector(selectIsOn);
    const dispatch = useDispatch();

    const redirectInfo = (product: IModelProduct) => {
        history.push('/printing-editing');
        dispatch({type: "REDIRECT_NEW_LINK", payload: {_id: product._id, redirect: true, product,}})
    };

    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
            <div className=" wrap-product">
                <img onClick={() => redirectInfo(product)} src={product.cover_image} alt="logo"/>
                <h1 className="text-center text-dark">{product.name}</h1>
                <div className="author text-center text-dark">{product.author_ids.map((a: any) => {
                    return <p key={a._id}>{a.name}</p>
                })}</div>
                <p className="price text-center font-italic">{product.price} {product.currency}</p>
            </div>
            {redirect.redirect ?
                <Redirect to={"/printing-editing/" + redirect._id}/>
                :
                <></>
            }
        </div>
    )
};
