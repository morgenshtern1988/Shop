import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getProductThunk} from "../../reduxStore/product/product";
import Product from "../../components/Product/Product";
import Catalog from "../../components/Catalog/Catalog";

const ProductContainer = (props: any) => {
    const {products, getProductForApi} = props;
    console.log(products);
    useEffect(() => getProductForApi());

    return (
        <>
            <section className="products">
                <Catalog/>
                <p>Товары</p>
                {products.length > 0 &&
                <div>
                    {
                        products[0].map((product: any) => {
                                return <Product
                                    product={product}
                                    key={product._id}/>
                            }
                        )
                    }
                </div>
                }
            </section>
        </>
    )
};
let mapStateToProps = (state: any) => {
    return {
        products: state.productReducer
    }
};
let mapDispatchToProps = (dispatch: any) => {
    return {
        getProductForApi: () => dispatch(getProductThunk("http://localhost:7227/admin/printing-edition"))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)
