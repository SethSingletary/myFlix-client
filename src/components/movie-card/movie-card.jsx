import React from "react";
import PropTypes from "prop-types";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

export const MovieCard = ({movie, onMovieClick}) => {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src="movie.Image"></Card.Img>
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Genre}</Card.Text>
                <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
                    <Button variant="link" onClick={onMovieClick}>Open</Button>
                </Link>
            </Card.Body>
        </Card>
        //<Button onClick={() => onMovieClick(movie)} variant="link">Open</Button>





    );
}
MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};