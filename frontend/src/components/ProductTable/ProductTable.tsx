import React from "react";
import Product from "./Product";
import {Table} from "react-bootstrap";

const ProductTable = (props: any) => {
    const {products} = props;
    return (
        <>
            <h1 className="heading-text">Product Management</h1>
            <Table responsive className="table-striped">
                <thead className="thead-dark ">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Author</th>
                    <th>Price</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map((product: any) => {
                            return <Product
                                product={product}
                                key={product._id}/>
                        }
                    )
                }
                </tbody>
            </Table>
            {/*}*/}
        </>
    )
};

export default ProductTable;
/*
{
    products.map((product: any) => {
            return <Product
                product={product}
                key={product._id}/>
        }
    )
}*/
