import React from "react";

const Button = (props: any) => {

    const {text, onClick} = props;
    return (
        <button onClick={onClick}>{text}</button>
        // <button onClick={(e)=> onClick(e)}>{text}</button>
    )
};

export default Button;
