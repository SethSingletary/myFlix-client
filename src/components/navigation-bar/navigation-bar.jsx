import { Button, Navbar } from "react-bootstrap";
import { ProfileView } from "../profile-view/profile-view";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const NavigationBar = () => {

    return(
        
            <ul>
                <li><a href="https://clever-pixie-e8d67c.netlify.app/">Home</a></li>
                <li><a href="https://clever-pixie-e8d67c.netlify.app/profile">Profile</a></li>
                <li><Button onClick={handleLogout()}>Logout</Button></li>
            </ul>
        
    )

    function handleLogout(){
        
        console.log("Working!")
    }
}