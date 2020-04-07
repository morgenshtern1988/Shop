import React from "react";
import {Button, Glyphicon} from "react-bootstrap";

export default function LoaderButton({
                                         isLoading = false,
                                         className = "",
                                         disabled = false,
                                         ...props
                                     }) {
    return (
        <Button
            className={`LoaderButton ${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <Glyphicon glyph="refresh" className="spinning"/>}
            {props.children}
        </Button>
    );
}
