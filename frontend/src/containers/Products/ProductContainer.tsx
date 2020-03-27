import React, {useEffect, useState} from "react"
import {getProduct} from "../../services/api";
import Product from "../../components/Product/Product";
import "./style.scss"
import Search from "../../components/Search/Search";

const productFromApi = async (setter: any) => {
    const product = await getProduct();
    setter(product);
};

const ProductContainer = (props: any) => {

    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);

    useEffect(() => {
        productFromApi(setProducts);
    }, []);

    useEffect(() => {
        setFilterProducts(products)
    }, [products]);

    const getFilterProduct = (value: any) => {
        // console.log(value);
        const result = products.filter((product: any) => product.name.toLowerCase().includes(value));
        setFilterProducts(result);
    };

    return (
        <>
            <section className="products">
                <Search onChange={getFilterProduct}
                        placeholder="Enter book"/>
                {filterProducts.map(product => {
                    return <Product
                        product={product}
                        key={product["_id"]}
                    />
                })}
            </section>
        </>
    )
};
export default ProductContainer;
