import React, {useEffect} from "react";
import {AuthorsDashboard} from "../../components/AuthorsDashboard";
import {useDispatch, useSelector} from "react-redux";
import {getAuthorsThunk} from "../../reducers/authors";
import {RootState} from "../../types/inrerface";
import {Table} from "react-bootstrap";
import Button from "../../components/Button";
import {getProductThunk} from "../../reducers/product/product";
import {Paginate} from "../../components/Pagination";
import {loadPage} from "../../helpers/pages";

export const AuthorsPage = ({pageOfItems: authorArr}: any) => {
    const dispatch = useDispatch();

    const pagereducer = (state: RootState) => state.authorsReducer;
    const pageReducer = useSelector(pagereducer);
    const {pager} = pageReducer;

    useEffect(() => {
        const page = loadPage();
        if (page !== pager.currentPage) {
            dispatch(getAuthorsThunk(page));
            dispatch(getProductThunk(page));
        }
    });
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
                    authorArr.map((author: any) => {
                            return <AuthorsDashboard
                                author={author}
                                key={author._id}/>
                        }
                    )
                }
                </tbody>
            </Table>
            <Paginate pager={pager}/>
        </div>
    )
};
