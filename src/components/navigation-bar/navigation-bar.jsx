import { Button, Navbar } from "react-bootstrap";
import { ProfileView } from "../profile-view/profile-view";
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";

export const NavigationBar = () => {
    const navigate = useNavigate();

    return(
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/profile'}>Profile</Link></li>
                <li><Button onClick={handleLogout}>Logout</Button></li>
            </ul>
        
    )
    
    function handleLogout(){
        console.log("Working!");
        localStorage.clear('Username');
        navigate('/')
        window.location.reload();
        
    }
}