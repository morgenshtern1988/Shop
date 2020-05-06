import React from "react";

const Button = (props: any) => {

    const {innerText, onClick, className, id} = props;
    return (
        <button className={className} onClick={onClick} id={id}>{innerText}</button>
    )
};

export default Button;
