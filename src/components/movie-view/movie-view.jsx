import React from "react";
import PropTypes from "prop-types";

export const MovieView = ({movie, onBackClick}) => {
    return (
    <div>
        <div>{movie.Title}</div>
        <div>{movie.Genre}</div>
        <button onClick={onBackClick}>Back</button>
    </div>);
}


//<div>{movie.director.name}</div>
//<div>{movie.published}</div>
//Need to figure out why director.name breaks the code and published doesn't show up.
