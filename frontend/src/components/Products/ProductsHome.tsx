import React from "react";
import {ProductHome} from "./ProductHome";
import {Filter} from "../Filter";
import {RootState} from "../../types/inrerface";
import { useSelector} from "react-redux";
import {Catalog} from "../Catalog";

export const ProductsHome = ({products}: any) => {

    const defaultProductReducer = (state: RootState) => state.productReducer;
    const defaultProducts = useSelector(defaultProductReducer);

    return (
        <div className="row container">
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
