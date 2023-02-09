import React from "react";

export const MovieView = ({movie, onBackClick}) => {
    return (<div>
        <div>{movie.genre}</div>
        <button onClick={onBackClick}>Back</button>
    </div>);
}