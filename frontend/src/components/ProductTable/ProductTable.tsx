import React from "react";

const ProductTable = (props: any) => {
    const {products} = props;
    console.log(products);
    return (
        <>
            <div>

            </div>
            {/*   {products.length > 0 &&
                <div>
                    {
                        products[0].map((product: any) => {
                                return <Product
                                    product={product}
                                    key={product._id}/>
                            }
                        )
                    }
                </div>*/}
        </>
    )
};

export default ProductTable;
