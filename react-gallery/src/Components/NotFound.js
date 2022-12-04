import React from "react";

const NotFound = ({ search }) => {
    return (
        <div className="not-found">
            <h2>Oops! No Results Found!</h2>
            <p>please search something else instead of {search}</p>
        </div>
    );
};

export default NotFound;