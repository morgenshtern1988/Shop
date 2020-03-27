import React from "react";

const Search = (props:any) => {
    const {title, placeholder, onChange} =props;
    return (
        <div className="search">
            <label>{title || "Search"}</label>
            <input type="text"
                   placeholder={placeholder || "Enter value"}
                   onChange={(e)=> onChange(e.target.value)}/>
        </div>
    )
};
export default Search;
