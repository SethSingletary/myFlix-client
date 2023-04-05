import { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap";

export const ProfileView = ({}) => {
    const [username, setUsername] = useState(localStorage.getItem('Username'));
    const [password, setPassword] = useState(localStorage.getItem('Password'));
    const [email, setEmail] = useState(localStorage.getItem('Email'));
    const [birthday, setBirthday] = useState(localStorage.getItem('Birthday'));
    const [movies, setMovies] = useState([]);
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    

    const orignialUsername = localStorage.getItem('Username');
    const orignialPassword = localStorage.getItem('Password');
    const orignialEmail = localStorage.getItem('Email');
    const orignialBirthday = localStorage.getItem('Birthday');

    console.log(orignialUsername);
    console.log(username);
    //console.log(password);
    //console.log(email);
    //console.log(birthday);

    let test = fetch(`https://my-flix2.herokuapp.com/users/${orignialUsername}`)

    console.log(test);

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(orignialUsername);
        
        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        }

        fetch(`https://my-flix2.herokuapp.com/users/${orignialUsername}`, {

            //credentials: "omit",
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                //Authorization: `Bearer {token}`
            },
            body: JSON.stringify(data),
        }).then((response) => {
            if(response.ok){
                localStorage.setItem('Username', data.Username);
                localStorage.setItem('Password', data.Password);
                localStorage.setItem('Email', data.Email);
                localStorage.setItem('Birthday', data.Birthday);
                alert("Update Succesful");
                window.location.reload();
            } else {
                alert("Update Failed!")
            }
        })
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
                <Form.Label>{orignialUsername}:</Form.Label>
                <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>{orignialPassword}:</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>{orignialEmail}:</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formBirthday">
                <Form.Label>{orignialBirthday}:</Form.Label>
                <Form.Control
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formFavoriteMovies">
                <Form.Label>{favoriteMovies}:</Form.Label>
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    )

    /*
    useEffect(() => {
        fetch("https://my-flix2.herokuapp.com/login?Username=SethSingletary&Password=Password1")
            .then((response) => response.json())
            .then((data) => {
                setUser(data.username);
                setPassword(data.password);
                setEmail(data.email);
                setBirthday(data.birthday);
                console.log(user);
                console.log(password);
                console.log(data);
            })
    })
    **/

}