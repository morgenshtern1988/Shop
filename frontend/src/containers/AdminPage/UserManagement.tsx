import React, {useEffect} from "react";
import {Table} from "react-bootstrap";
import Button from "../../components/Button";
import {RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";
import {getUserThunk} from "../../reducers/user";
import {User} from "../../components/User";

export const UserManagement = () => {
    const isActiveReducer = (state: RootState) => state.isActiveReducer.blockStatus;
    const blockStatus = useSelector(isActiveReducer);

    const userReducer = (state: RootState) => state.userReducer.userArr;
    const userArr = useSelector(userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserThunk())
    }, []);

    const isActiveBlockStatus = () => {
        if (blockStatus) {
            dispatch({type: "VISIBLE_STATUS", payload: {isShowStatus: false}})

        } else {
            dispatch({type: "VISIBLE_STATUS", payload: {isShowStatus: true}})
        }
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="heading-text">User Management</h1>
            </div>
            <Table responsive className="table-striped table-product-manager w-100">
                <thead className="thead-dark">
                <tr>
                    <th className="w-25">User Name</th>
                    <th className="w-50">User Email</th>
                    <th>
                        <Button innerText="Status" className={"list-status position-relative"}
                                onClick={() => isActiveBlockStatus()}
                        />
                        {
                            blockStatus ?
                                <div className="position-absolute list flex-column">
                                    <label htmlFor="active"><input type="checkbox" id="Book"
                                                                   className="check"/>Active</label>
                                    <label htmlFor="blocked"><input type="checkbox" id="Book"
                                                                    className="check"/>Blocked</label>
                                </div>
                                : <></>
                        }
                    </th>
                    <th/>
                    <th/>
                </tr>
                </thead>
                <tbody>
                   {
                    userArr.length !== 0 ?
                        userArr.map((user: any) => {
                                return <User
                                    user={user}
                                    key={user._id}/>
                            }
                        ) : <></>
                }
                </tbody>
            </Table>
        </div>
    )
};
