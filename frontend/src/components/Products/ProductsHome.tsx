import React from "react";
import {ProductHome} from "./ProductHome";
import {Filter} from "../Filter";
import {RootState} from "../../types/inrerface";
import {useSelector} from "react-redux";

export const ProductsHome = (props: any) => {
    const {products} = props;

    const defaultProductReducer = (state: RootState) => state.productReducer;
    const defaultProducts = useSelector(defaultProductReducer);

    return (
        <>
            <Filter products={products}
                    defaultProducts={defaultProducts}/>
            <div className="row">
                {
                    products.map((product: any) => {
                            return <ProductHome
                                product={product}
                                key={product._id}/>
                        }
                    )
                }
            </div>
        </>
    )
};
