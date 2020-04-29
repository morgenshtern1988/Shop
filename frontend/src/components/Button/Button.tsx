import React from "react";

const Button = (props: any) => {

    const {innerText, onClick} = props;
    return (
        <button onClick={onClick}>{innerText}</button>
    )
};

export default Button;
