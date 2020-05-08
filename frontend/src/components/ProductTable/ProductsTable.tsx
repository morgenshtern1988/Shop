import React, {useEffect} from "react";
import Product from "./Product";
import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Button from "../Button";
import {RootState} from "../../types/inrerface";

const ProductsTable = ({products, filterCategory, setStateCategory, stateCategory, defaultProducts}: any) => {

    const isActiveReducer = (state: RootState) => state.isActiveReducer;
    const isActive = useSelector(isActiveReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const res = [...stateCategory.book, ...stateCategory.newspapers, ...stateCategory.magazines];
        dispatch({type: "SORT_PRODUCT", payload: {res}});
    }, [stateCategory]);

    const isActiveBlockCategory = () => {
        if (isActive.blockCategory) {
            dispatch({type: "VISIBLE_BLOCK", payload: {isShow: false}})

        } else {
            dispatch({type: "VISIBLE_BLOCK", payload: {isShow: true}})

        }
    };
    const isActiveModalAdd = () => {
        dispatch({type: "IS_SHOW_MODAL_ADD_PRODUCT", payload: {isDisplay: true}})
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="heading-text">Product Management</h1>
                <div>
                    <Button className="icon-plus btn-author" onClick={() => isActiveModalAdd()}/>
                </div>
            </div>
            <Table responsive className="table-striped table-product-manager w-100">
                <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th className="w-100">Description</th>
                    <th>
                        <Button innerText="Category" className={"list-category position-relative"}
                                onClick={() => isActiveBlockCategory()}/>
                        {
                            isActive.blockCategory ?
                                <div className="position-absolute list flex-column">
                                    <label htmlFor="Book"><input type="checkbox" id="Book" className="check"
                                                                 onChange={(e: any) => filterCategory({
                                                                     e,
                                                                     setStateCategory,
                                                                     stateCategory,
                                                                     defaultProducts
                                                                 })}/>Books</label>
                                    <label htmlFor="Newspapers"><input type="checkbox" id="Newspapers"
                                                                       className="check"
                                                                       onChange={(e: any) => filterCategory({
                                                                           e,
                                                                           setStateCategory,
                                                                           stateCategory,
                                                                           defaultProducts
                                                                       })}/>Newspapers</label>
                                    <label htmlFor="Magazines"><input type="checkbox" id="Magazines"
                                                                      className="check"
                                                                      onChange={(e: any) => filterCategory({
                                                                          e,
                                                                          setStateCategory,
                                                                          stateCategory,
                                                                          defaultProducts
                                                                      })}/>Magazines</label>
                                </div> : <></>
                        }
                    </th>
                    <th>Author</th>
                    <th>Price</th>
                    <th/>
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
        </div>
    )
};

export default ProductsTable;
