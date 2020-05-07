import React, {useEffect} from "react";
import {AuthorsDashboard} from "../../components/AuthorsDashboard";
import {useDispatch, useSelector} from "react-redux";
import {getAuthorsThunk} from "../../reducers/authors";
import {RootState} from "../../types/inrerface";
import {Table} from "react-bootstrap";
import Button from "../../components/Button";
import {getProductThunk} from "../../reducers/product/product";

export const AuthorsDashboardContainer = () => {

    const productReducer = (state: RootState) => state.productReducer.productArr;
    const productArr = useSelector(productReducer);

    const authorsReducer = (state: RootState) => state.authorsReducer;
    const author = useSelector(authorsReducer);
    const dispatch = useDispatch();

    const {authorsArr} = author;

    useEffect(() => {
        dispatch(getProductThunk());
        dispatch(getAuthorsThunk())
    }, []);

    const displayModal = () => {
        dispatch({type: "IS_SHOW_MODAL_ADD_AUTHOR", payload: {isDisplay: true}})
    };

    return (
        <div className="container">
            <div className="d-flex mb-3 mb-3 justify-content-between align-items-center">
                <h1 className="heading-text">Authors Page</h1>
                <div>
                    <Button className="icon-plus btn-author" onClick={() => displayModal()}/>
                </div>
            </div>
            <Table responsive className="table-striped table-product-manager w-100 mb-5">
                <thead className="thead-dark">
                <tr>
                    <th className="w-25">ID</th>
                    <th>Authors</th>
                    <th className="">Product</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {
                    authorsArr ?
                        authorsArr.map((author: any) => {
                                return <AuthorsDashboard
                                    productArr={productArr}
                                    author={author}
                                    key={author._id}/>
                            }
                        ) : <></>
                }
                </tbody>
            </Table>
        </div>
    )
};
