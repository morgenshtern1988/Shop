import React from "react";

export const HeaderBottom = () => {
    return (
        <header className="bottom-header d-flex pt-4 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <a href="http://localhost:3000/">Home</a>
                        <a href="http://localhost:3000/printing-editing">Book Catalog</a>
                    </div>
                    <div className="col-6 text-right">
                        <input type="text" placeholder="Search"/>
                        {/*<button onClick={props.onFindProduct}>click</button>*/}
                    </div>
                </div>
            </div>
        </header>
    )
};
