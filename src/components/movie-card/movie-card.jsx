import React from "react"
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

export const MovieCard = ({movie, onMovieClick}) =>{
    return(
        <Card>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Link to={`/movie/${encodeURIComponent(movie.id)}`}>
                    <Button onClick={onMovieClick} className="button">Open</Button>
                </Link>

            </Card.Body>
        </Card>
)
    //Without link you can see cards, but can't click into detailed view. I can't seem to find why yet. Must research
}