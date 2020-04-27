import React from "react";
import {ProductHome} from "./ProductHome";
import {Filter} from "../Filter";
import {RootState} from "../../types/inrerface";
import {useSelector} from "react-redux";
import {Catalog} from "../Catalog";

export const ProductsHome = (props: any) => {
    const {products} = props;

    const defaultProductReducer = (state: RootState) => state.productReducer;
    const defaultProducts = useSelector(defaultProductReducer);

    return (
        <div className="row">
            <Filter products={products}
                    defaultProducts={defaultProducts}/>
            <div className="row justify-content-end">
                <Catalog products={products} defaultProducts={defaultProducts}/>
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
    )
};
