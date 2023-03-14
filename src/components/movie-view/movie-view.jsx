import { Button, Card } from "react-bootstrap"

export const MovieView = ({movie, onBackClick}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Button onClick={onBackClick}>Back</Button>
            </Card.Body>
        </Card>
    )
}