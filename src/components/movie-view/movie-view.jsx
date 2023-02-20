import React from "react";
import PropTypes from "prop-types";
import { Button, Col } from "react-bootstrap";
import {Link} from "react-router-dom";

export const MovieView = ({movie, onBackClick}) => {

    return (
        <Col md={8}>
            <div>{movie.Title}</div>
            <div>{movie.Genre}</div>
            <Link to={'/'}>
                <Button className="back-button">Back</Button>
            </Link>
        </Col>
    )
}
//            <button onClick={onBackClick}>Back</button>


//<div>{movie.director.name}</div>
//<div>{movie.published}</div>
//Need to figure out why director.name breaks the code and published doesn't show up.
