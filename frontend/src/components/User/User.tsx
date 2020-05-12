import React from "react";
import Button from "../Button";
import {Checkbox, FormControl} from "react-bootstrap";

export const User = ({user}: any) => {
    const {firstName, lastName, email} = user;
    return (
        <tr>
            <td><span>{firstName}</span><span>{lastName}</span></td>
            <td>{email}</td>
            <td className="w-25">
                <div className='custom-control custom-switch'>
                    <input
                        type='checkbox'
                        className='custom-control-input'
                        id={firstName + lastName}
                        // readOnly
                    />
                    <label className='custom-control-label' htmlFor={firstName + lastName}>
                    </label>
                </div>

            </td>
            <td>
                <Button className="icon-pan btn-edit mr-2"/>
                <Button className="icon-close btn-close"/>
            </td>
        </tr>
    )
};
