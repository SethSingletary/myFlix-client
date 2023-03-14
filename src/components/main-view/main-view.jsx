import React, { useEffect, useState } from "react"
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { SignupView } from "../signup-view/signup-view";
import { Col, Row } from "react-bootstrap";

export const MainView = () => {

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSeletedMovie] = useState(null);
    const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://my-flix2.herokuapp.com/movies")
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((doc) => {
          return {
            id: doc._id,
            title: doc.Title,
          };
        });

        setMovies(moviesFromApi);
      });
  }, []);
/** 
    if(!user){
      return(
        <>
        <LoginView onLoggedIn={(user) => setUser(user)}/>
        <SignupView/>
        </>
      )
    }

    if(selectedMovie){
        return <MovieView movie={selectedMovie} onBackClick={() => setSeletedMovie(null)}/>;
    }
*/
    return (
      <Row className="justify-content-md-center">
        {!user ? (
          <>
            <LoginView onLoggedIn={(user) => setUser(user)}/>
            or
            <SignupView/>
          </>
        ) : selectedMovie ? (
          <>
            <MovieView movie={selectedMovie} onBackClick={() => setSeletedMovie(null)}/>
          </>
        ) : movies.length === 0 ? (
          <>This list is empty!</>
        ) : (
          <>
            {movies.map((movie) => (
              <Col md={8}>
                <MovieCard movie={movie} onMovieClick={(newSelectedMovie) => {setSeletedMovie(newSelectedMovie);}}/>
              </Col>

            ))}
          </>
        )}
      </Row>

      /** 
        <div>
            {movies.map((movie) => (
                <MovieCard movie={movie} onMovieClick={(newSelectedMovie) => {setSeletedMovie(newSelectedMovie);}}/>
            ))}
        </div>
        */
    )
}