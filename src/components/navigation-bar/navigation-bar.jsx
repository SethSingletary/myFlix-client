import { Button, Navbar } from "react-bootstrap";
import { ProfileView } from "../profile-view/profile-view";
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";

export const NavigationBar = () => {
    const navigate = useNavigate();

    return(
            <ul className="navigationBar">
                <li><Button onClick={handleHome} className="button"></Button></li>
                <li><Button><Link to={'/profile'}>Profile</Link></Button></li>
                <li><Button onClick={handleLogout} className="button">Logout</Button></li>
            </ul>
        
    )
    
    function handleLogout(){
        console.log("Working!");
        localStorage.clear('Username');
        navigate('/')
        window.location.reload();
        
    }
    function handleHome(){
        console.log("Home Working!");
        navigate('/')
        window.location.reload();
    }
}