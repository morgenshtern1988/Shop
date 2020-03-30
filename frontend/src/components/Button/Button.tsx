import React from "react";

const Button = (props:any) =>{

    const {text, onClick} = props;
    return(
        <button onClick={(e)=> onClick(e.target)}>{text}</button>
    )
};

export default Button;
