import React, {useEffect} from "react";
import {ProductHome} from "./ProductHome";
import {Filter} from "../Filter";
import {RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";
import {Catalog} from "../Catalog";
import {Cart} from "../../infrastructure/Cart";

export const ProductsHome = ({products}: any) => {

    const defaultProductReducer = (state: RootState) => state.productReducer;
    const defaultProducts = useSelector(defaultProductReducer);

    return (
        <div className="row">
            <div className="col-3">
                <Catalog products={products} defaultProducts={defaultProducts}/>
            </div>
            <div className="col-9">
                <Filter products={products}
                        defaultProducts={defaultProducts}/>
                <div className="row justify-content-around">
                    {
                        products.map((product: any) => {
                                return <ProductHome
                                    product={product}
                                    key={product._id}/>
                            }
                        )
                    }
                </div>
            </div>
        </div>
    )
};
