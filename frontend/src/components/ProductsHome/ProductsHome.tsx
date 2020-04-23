import React from "react";
import {ProductHome} from "./ProductHome";

export const ProductsHome = (props: any) => {
    const {products} = props;
    return (
        <>
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
