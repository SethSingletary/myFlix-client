import { Button } from "react-bootstrap";
import { Card, Link } from "react-bootstrap";

export const MovieCard = ({movie, onMovieClick}) =>{
    return(
            <Card>
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Link to={`/movie/${encodeURIComponent(movie._id)}`}>
                        <Button variant="link" onClick={onMovieClick}>Open</Button>
                    </Link>
                    
                </Card.Body>
            </Card>
    )
    //Without link you can see cards, but can't click into detailed view. I can't seem to find why yet. Must research
}