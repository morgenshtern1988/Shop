import React from "react";
import {Redirect} from "react-router";
import {IProduct, RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";
import {history} from "../../helpers/history";

export const ProductHome = (props: any) => {

    const {product} = props;

    const selectIsOn = (state: RootState) => state.redirectReducer;
    const redirect = useSelector(selectIsOn);
    const dispatch = useDispatch();

    const redirectInfo = (product: IProduct) => {
        history.push('/printing-editing');
        dispatch({type: "REDIRECT_NEW_LINK", payload: {_id: product._id, redirect: true, product,}})
    };
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
            <div className=" wrap-product">
                <img onClick={() => redirectInfo(product)} src={require("../../img/img1.png")} alt="logo"/>
                <h1 className="text-center text-dark">{product.name}</h1>
                <p className="author text-center text-dark">Author</p>
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
