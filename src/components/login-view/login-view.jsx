import { useState } from "react"

export const LoginView = ({onLoggedIn}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            Username: username,
            Password: password
        };
        fetch("https://my-flix2.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }).then((response) => {
            if(response.ok){
                onLoggedIn(username);
            } else {
                alert("Login Failed!")
            }
        })
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Username:<input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/></label>
                <label>Password:<input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/></label>
                <button type="submit">Submit</button>

            </form>
        </>
    )
}