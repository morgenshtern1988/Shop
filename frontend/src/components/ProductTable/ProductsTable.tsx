import React, {useEffect} from "react";
import Product from "./Product";
import {Table} from "react-bootstrap";
import {filterCategory} from "../../infrastructure/FilterCategory";
import {useDispatch} from "react-redux";
import Button from "../Button";

const ProductsTable = ({products, filterCategory, setStateCategory, stateCategory, defaultProducts}: any) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const res = [...stateCategory.book, ...stateCategory.newspapers, ...stateCategory.magazines];
        dispatch({type: "SORT_PRODUCT", payload: res})
    }, [stateCategory]);

    return (
        <>
            <h1 className="heading-text">Product Management</h1>
            <Table responsive className="table-striped table-product-manager">
                <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>
                        <Button innerText="Category" className={"list-category position-relative"}/>
                        {/*<label htmlFor="Book"><input type="checkbox" id="Book" className="check"*/}
                        {/*                             onChange={(e: any) => filterCategory({*/}
                        {/*                                 e,*/}
                        {/*                                 setStateCategory,*/}
                        {/*                                 stateCategory,*/}
                        {/*                                 defaultProducts*/}
                        {/*                             })}/>Books</label>*/}
                        {/*<label htmlFor="Newspapers"><input type="checkbox" id="Newspapers"*/}
                        {/*                                   className="check"*/}
                        {/*                                   onChange={(e: any) => filterCategory({*/}
                        {/*                                       e,*/}
                        {/*                                       setStateCategory,*/}
                        {/*                                       stateCategory,*/}
                        {/*                                       defaultProducts*/}
                        {/*                                   })}/>Newspapers</label>*/}
                        {/*<label htmlFor="Magazines"><input type="checkbox" id="Magazines"*/}
                        {/*                                  className="check"*/}
                        {/*                                  onChange={(e: any) => filterCategory({*/}
                        {/*                                      e,*/}
                        {/*                                      setStateCategory,*/}
                        {/*                                      stateCategory,*/}
                        {/*                                      defaultProducts*/}
                        {/*                                  })}/>Magazines</label>*/}
                    </th>
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
        </>
    )
};

export default ProductsTable;
