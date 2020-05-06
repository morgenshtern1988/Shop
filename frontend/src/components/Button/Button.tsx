import React from "react";

const Button = (props: any) => {

    const {innerText, onClick, className} = props;
    return (
        <button className={className} onClick={onClick}>{innerText}</button>
    )
};

export default Button;
