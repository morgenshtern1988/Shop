import React from "react";
//
const Search = (props: any) => {
    const {title, placeholder, onClick} = props;
    console.log(props);

    return (
        <>
            <div className="search">
                <label>{title || "Search"}</label>
                <input type="text"
                       placeholder={placeholder || "Enter value"}
                       onChange={(e) => console.log(e)
                       }
                />
            </div>
        </>
    )
};
export default Search;
