import React from "react";
import "./style.scss";
import Button from "../Button/Button";

const Catalog = () => {
    return (
        <div className="wrap-catalog">
            <div>
                <h1>Category</h1>
                <div className="list-printing">
                    <label htmlFor="books"><input type="checkbox" id="books"/>Books</label>
                    <label htmlFor="newspapers"><input type="checkbox" id="newspapers"/>Newspapers</label>
                    <label htmlFor="magazines"><input type="checkbox" id="magazines"/>Magazines</label>
                </div>
                <h1>Price, $</h1>
                <input type="text" placeholder="От"/>
                <input type="text" placeholder="До"/>
                <Button text="OK"/>
            </div>
        </div>
    )
};

export default Catalog;
