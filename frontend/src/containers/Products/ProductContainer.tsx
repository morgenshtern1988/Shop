import React, {useEffect, useReducer, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../../services/api";
import Product from "../../components/Product/Product";
import "./style.scss";
import Search from "../../components/Search/Search";
import Catalog from "../../components/Catalog/Catalog";
import {store} from "../../store";

const productFromApi = async () => {
    const product = await getProduct();
    store.dispatch({type: 'INIT_PRODUCT', payload: product});
    // console.log(store.getState())
};

const ProductContainer = (props: any) => {

    const products = useSelector((store: any) => store.productReducer);
    const dispatch = useDispatch();
    // console.log(products);
    useEffect(() => {
        productFromApi();
    }, []);

    const getFilterProduct = (value: any) => {
        const result = products.filter((product: any) => product.name.toLowerCase().includes(value.toLowerCase()));
        // console.log(result);
        // store.dispatch({type: "FILTER_PRODUCT", payload: result});
        // console.log(store.getState())
    };

    return (
        <section className="products">
            <Catalog/>
            <Search onClick={getFilterProduct}
                    placeholder="Enter book"/>
            {products.map((product: any) => {
                return <Product
                    product={product}
                    key={product["_id"]}
                />
            })}
        </section>
    )
};

export default ProductContainer;
