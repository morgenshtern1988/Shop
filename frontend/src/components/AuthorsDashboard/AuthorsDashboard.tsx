import React from "react";
import Button from "../Button";
import {useDispatch} from "react-redux";
import {deleteAuthorThunk} from "../../reducers/authors";

export const AuthorsDashboard = ({author}: any) => {
    const dispatch = useDispatch();

    const deleteAuthor = async (id: string) => {
        await dispatch(deleteAuthorThunk(id))
    };
    return (
        <tr>
            <td>{author._id}</td>
            <td>{author.name}</td>
            <td>
                {
                    author.product_ids.map((product: any) => {
                        return <div key={product._id} className="wrap-div">
                            {
                                product === undefined ?
                                    <div key={product._id} className="inner-div"/> :
                                    <p key={product._id}>{product.name}</p>

                            }
                        </div>
                    })
                }
            </td>
            <td>
                <Button onClick={() => console.log("a")} className="icon-pan btn-edit mr-2"/>
                <Button onClick={() => deleteAuthor(author._id)} className="icon-close btn-close"/>
            </td>
        </tr>
    )
};
