import React from "react";
import {connect} from "react-redux";
import {getProductThunk} from "../../store/product/product";
import Product from "../../components/Product/Product";
import Catalog from "../../components/Catalog/Catalog";
/*
let ProductContainer = (props: any) => {
    const getFilterProduct = (value: any) => {
        // const result = products.filter((product: any) => product.name.toLowerCase().includes(value.toLowerCase()));
        // console.log(result);
        // store.dispatch({type: "FILTER_PRODUCT", payload: result});
        // console.log(store.getState())
    };
*/
const ProductContainer = (props: any) => {
    const {products} = props;
    console.log(props);
    return (
        <section className="products">
            <Catalog/>
            <p>Товары</p>
            {products.map((product: any) => {
                    return <Product
                        product={product}
                        key={product._id}/>
                }
            )}
        </section>
    )
};
let mapStateToProps = (state: any) => {
    return {
        products: state.productReducer
    }
};
let mapDispatchToProps = (dispatch: any) => {
    return {
        getProductForApi: dispatch(getProductThunk("http://localhost:3001/admin/printing-edition"))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)
