import React from "react";
//
const Search = (props: any) => {
    const {title, placeholder, onClick} = props;
    // console.log(valueProduct.current.value)

    return (
        <>
            <div className="search">
                <label>{title || "Search"}</label>
                <input type="text"
                       placeholder={placeholder || "Enter value"}
                       onClick={(e) => console.log(e)}
                />
            </div>
        </>
    )
};
export default Search;
