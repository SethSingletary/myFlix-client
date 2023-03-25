import { Button, Navbar } from "react-bootstrap";
import { ProfileView } from "../profile-view/profile-view";

export const NavigationBar = () => {

    return(
        <Navbar>
            <Button>Profile</Button>
            <Button>Logout</Button>
            <Button>Home</Button>
        </Navbar>
    )
}