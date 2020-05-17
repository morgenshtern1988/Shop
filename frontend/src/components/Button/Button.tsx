import React from "react";

const Button = ({innerText, onClick, className, id, disabled}: any) => {
    return (
        <button className={className}
                disabled={disabled}
                onClick={onClick}
                id={id}>{innerText}</button>
    )
};

export default Button;
