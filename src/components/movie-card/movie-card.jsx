import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

export const MovieCard = ({movie, onMovieClick}) =>{
    return(
            <Card>
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Button onClick={() => onMovieClick(movie)}>Open</Button>
                </Card.Body>
            </Card>
    )
}