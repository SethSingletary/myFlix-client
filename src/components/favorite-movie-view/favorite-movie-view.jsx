import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export const FavoriteMovieView = ({movie}) => {
    const navigate = useNavigate();

    const username = localStorage.getItem("Username");

    const deleteFavorite = async => {
        fetch(`https://my-flix2.herokuapp.com/users/${username}/${movie.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json"
            }
        }).then((respone) => {
            if(respone.ok){
                alert("Movie was deleted!");
                navigate('/');
                window.location.reload();
            } else{
                alert("Failed to delete");
            }
        })

    }

    return(
        <Card>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Button onClick={deleteFavorite}>Delete Favorite</Button>
            </Card.Body>
        </Card>
    )
}