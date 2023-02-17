import React from "react";
import PropTypes from "prop-types";
import {Button, Card} from "react-bootstrap";

export const MovieCard = ({movie, onMovieClick}) => {
    return (
        <Card>
            <Card.Img variant="top" src="movie.Image"></Card.Img>
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Genre}</Card.Text>
                <Button onClick={() => onMovieClick(movie)} variant="link">Open</Button>
            </Card.Body>
        </Card>





    );
}
MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};