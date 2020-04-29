import React from "react";

export const Search = (props: any) => {
    const {placeholder, onChange} = props;
    // console.log(props);
    return (
        <>
            <div className="search">
                <input type="text"
                       className="w-75"
                       placeholder={placeholder || "Enter value"}
                       onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </>
    )
};
