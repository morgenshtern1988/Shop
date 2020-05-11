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
                        // product.map((product:any)=>{
                            console.log(product)
                        return <div key={product._id} className="wrap-div">
                            {
                                product === undefined ?
                                    <div key={product._id} className="inner-div"/> :
                                    <p key={product._id}>{product.name}</p>

                            }
                        </div>
                        // })
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
