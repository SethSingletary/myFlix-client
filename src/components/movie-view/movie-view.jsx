import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

export const MovieView = ({movie, onBackClick}) => {

    return (
        <Col md={8}>
            <div>{movie.Title}</div>
            <div>{movie.Genre}</div>
            <button onClick={onBackClick}>Back</button>
        </Col>
    )
}


//<div>{movie.director.name}</div>
//<div>{movie.published}</div>
//Need to figure out why director.name breaks the code and published doesn't show up.
