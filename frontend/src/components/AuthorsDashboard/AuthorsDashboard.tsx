import React from "react";
import Button from "../Button";
import {useDispatch} from "react-redux";
import {deleteAuthorThunk} from "../../reducers/authors";

export const AuthorsDashboard = ({author, productArr}: any) => {
    const dispatch = useDispatch();

    const deleteAuthor = async (id: string) => {
        await dispatch(deleteAuthorThunk(id))
    };

    const searchBookByAuthor = ({id, productArr}: any) => {
        return productArr.find((product: any) => product._id === id);
    };

    return (
        <tr>
            <td>{author._id}</td>
            <td>{author.name}</td>
            <td>
                {
                    author.product_ids.map((id: any) => {
                        const book = searchBookByAuthor({id, productArr});
                        return <div key={id} className="wrap-div">
                            {
                                book === undefined ?
                                    <div key={id} className="inner-div"/> :
                                    <p key={id}>{book.name}</p>

                            }
                        </div>
                    })
                }
            </td>
            <td>
                <Button onClick={() => deleteAuthor(author._id)} innerText={"Delete"}/>
                <Button onClick={() => console.log("a")} innerText={"Edit"}/>
            </td>
        </tr>
    )
};
