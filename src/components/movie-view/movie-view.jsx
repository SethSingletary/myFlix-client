import React from "react"
import { json, Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";

let favoriteMovies = [];



export const MovieView = ({movie}) => {
    favoriteMovies.push(movie);

    const [username, setUsername] = useState(localStorage.getItem('Username'));
    const [password, setPassword] = useState(localStorage.getItem('Password'));
    const [email, setEmail] = useState(localStorage.getItem('Email'));
    const [birthday, setBirthday] = useState(localStorage.getItem('Birthday'));

    const addFavorite = async => {
        
        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday,
            FavoriteMovies: favoriteMovies,
        }

        fetch(`https://my-flix2.herokuapp.com/users/${username}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }).then((response) => {
            if(response.ok){
                alert("Added to favorites");
                window.location.reload();
            } else {
                alert("Task failed")
            }
        })
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Link to={`/`}>
                    <Button>Back</Button>
                </Link>
                <Button onClick={addFavorite}>Favorite</Button>
            </Card.Body>
        </Card>
    )
}