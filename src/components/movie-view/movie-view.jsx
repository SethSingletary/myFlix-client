import React from "react"
import { json, Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap"

let favoriteMovies = [];
let Username = localStorage.getItem("Username");


export const MovieView = ({movie}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Link to={`/`}>
                    <Button>Back</Button>
                </Link>
                <Button onClick={addFavorite(movie)}>Favorite</Button>
            </Card.Body>
        </Card>
    )
}
function addFavorite(movie) {
    favoriteMovies.push(movie)
    localStorage.setItem("FavoriteMovies", JSON.stringify(favoriteMovies));

    let data = {
        Username: localStorage.getItem("Username"),
        Password: localStorage.getItem("Password"),
        Email: localStorage.getItem("Email"),
        Birthday: localStorage.getItem("Birthday"),
        FavoriteMovies: favoriteMovies,
    }

    fetch(`https://my-flix2.herokuapp.com/users/${Username}`),{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    }


}