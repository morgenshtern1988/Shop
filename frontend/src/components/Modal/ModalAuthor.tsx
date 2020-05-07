import React from "react";
import Button from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {postAuthorThunk} from "../../reducers/authors";
import {RootState} from "../../types/inrerface";

export const ModalAuthor = ({hideModalAuthor}: any) => {
    const dispatch = useDispatch();
    const selectIsOn = (state: RootState) => state.authorsReducer.newAuthor;
    const author = useSelector(selectIsOn);

    const addAuthorInDB = ({author}: any) => {
        dispatch(postAuthorThunk({author}));
    };

    return (
        <div className="wrap-add-author">
            <div className="top text-right">
                <span className="icon-close" onClick={(e: any) => hideModalAuthor(e)}/>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column wrap-info">
                <div className="icon-plus d-flex align-items-center "><span>Add new Author</span></div>
                <input type="text" placeholder="Name.." className=""
                       onChange={(e: any) => dispatch({
                           type: "SET_STATE_NEW_AUTHORS",
                           payload: {author: e.target.value}
                       })}/>
                <div className="d-flex justify-content-between w-100">
                    <Button innerText={"Cancel"} id={"cancel"} className={"w-50 cancel btn"}
                            onClick={(e: any) => hideModalAuthor(e)}/>
                    <Button innerText={"Add"} id={"btn-add"} className="w-50 btn"
                            onClick={() => addAuthorInDB({author})}/>
                </div>
            </div>
        </div>
    )
};
