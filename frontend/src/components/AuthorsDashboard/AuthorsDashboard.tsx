import React from "react";
import Button from "../Button";

export const AuthorsDashboard = ({author, productArr}: any) => {

    const deleteAuthorInDB = (id: string) => {

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
                <Button onClick={() => deleteAuthorInDB(author._id)} innerText={"Delete"}/>
                <Button onClick={() => console.log("a")} innerText={"Edit"}/>
            </td>
        </tr>
    )
};
