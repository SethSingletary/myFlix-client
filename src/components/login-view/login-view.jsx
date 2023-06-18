import React, { useState } from "react"
import { Button, Form } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router";

export const LoginView = ({onLoggedIn}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();        

        let user = {
            Username: username,
            Password: password
        };
        fetch("https://my-flix2.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
        }).then((response) => {
            if(response.ok) {

                fetch(`https://my-flix2.herokuapp.com/users/${user.Username}`)
                .then((response) => response.json())
                .then((data) => {
                  console.log(data);
            
                  localStorage.setItem("Username", data.Username);
                  localStorage.setItem("Password", data.Password);
                  localStorage.setItem("Email", data.Email);
                  localStorage.setItem("Birthday", data.Birthday);
                  localStorage.setItem("FavoriteMovies", data.FavoriteMovies);
                  localStorage.setItem("User", user);
                });

                onLoggedIn(user);
                
            } else {
                alert("Login Failed!")
            }
        })
    }

    return(
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="button">Submit</Button>
        </Form>
        <Button onClick={goToSignup} className="button">Or Signup</Button>
        </>
    )
    function goToSignup() {
        navigate('/signup');
    }
}