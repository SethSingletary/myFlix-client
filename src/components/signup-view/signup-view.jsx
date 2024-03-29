import React, { useState } from "react"
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

export const SignupView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const navigate = useNavigate();

    function navToLogin() {
        navigate('/login');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday,
        };
        console.log(data);
        fetch("https://my-flix2.herokuapp.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }).then((response) => {
            if(response.ok){
                
                localStorage.setItem('Username', data.Username);
                localStorage.setItem('Password', data.Password);
                localStorage.setItem('Email', data.Email);
                localStorage.setItem('Birthday', data.Birthday);
                localStorage.setItem('User', data);

                alert("Signup Succesful");
                navigate('/');
                window.location.reload();
            } else {
                alert("Signup Failed!")
            }
        })
    };

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
            <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formBirthday">
                <Form.Label>Birthday:</Form.Label>
                <Form.Control
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                />
            </Form.Group>
            <Button type="submit" className="button">Submit</Button>
        </Form>
        <Button onClick={navToLogin} className="button">Or login</Button>
        </>
    )

}