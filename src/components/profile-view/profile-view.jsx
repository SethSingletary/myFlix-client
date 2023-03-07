import React, { useState, useEffect, useRef} from "react";
import {Card, ListGroup, Button, Form, Row, Col} from "react-bootstrap";
import avatar from "./profile-icon.svg";
import { MovieCard } from "../movie-card/movie-card";

const profileView = ({
    user,
    favoriteMovies,
    toggleFavorite,
    token,
    onDelete,
}) => {
    const [updateUser, setUpdateUser] = useState(false);
    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState(user.password);
    const [email, setEmail] = useState(user.email);
    const [birthday, setBirthday] = useState(user.birthday);
    const birthdayInputRef = useRef(null);

    useEffect(() => {
        if (birthdayInputRef.current) {
            birthdayInputRef.current.value = formatDate(birthday);
        }
    }, [updateUser]);

    const handleUpdate = async () => {
        event.preventDefault();

        const userData = {
            username: username,
            password: password,
            email: email,
            birthday: birthday,
        };
        try {
            const response = await fetch(
                `https://my-flix2.herokuapp.com/users/${user.username}`,
                {
                    method: "PUT",
                    body: JSON.stringify(userData),
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            const { success, message, data } = await response.json();
            if (success) {
                alert(message);
                setUpdateUser(false);
            } else {
                console.error(message);
                alert("Update failed");
            }
        } catch (error) {
      console.error(error);
    }

        }
    }
}