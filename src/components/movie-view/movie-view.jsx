import React from "react"
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap"

export const MovieView = ({movie}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Link to={`/`}>
                    <Button>Back</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}