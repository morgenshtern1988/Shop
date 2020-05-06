import React from "react";

export const Select = ({defaultValue, value, selected, id}: any) => {
    return (
        <select name="" id={id} className="w-100">
            {/*<option defaultValue={defaultValue} selected={selected}>{value}</option>*/}
            <option defaultValue="one">1</option>
            <option defaultValue="two">2</option>
            <option defaultValue="three">3</option>
            <option defaultValue="four">4</option>
            <option defaultValue="five">5</option>
            <option defaultValue="six">6</option>
            <option defaultValue="seven">7</option>
        </select>
    )
};
