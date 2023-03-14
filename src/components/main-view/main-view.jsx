import React, { useEffect, useState } from "react"
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { SignupView } from "../signup-view/signup-view";
import { Col, Row } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
      <BrowserRouter>
        <Row className="justify-content-md-center">
          <Routes>
            <Route
              path="/signup"
              element={
                <>
                  {user ? (
                    <Navigate to="/"/>
                  ) : (
                    <Col md={4}>
                      <SignupView/>
                    </Col>
                  )}
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  {user ? (
                    <Navigate to="/"/>
                  ) : (
                    <Col md={4}>
                      <LoginView onLoggedIn={(user) => setUser(user)}/>
                    </Col>
                  )}
                </>
              }
            />
            <Route
              path="/movie/:movieId"
              element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace/>
                  ) : movies.length === 0 ? (
                    <>
                      This List is empty!
                    </>
                  ) : (
                    <Col md={8}>
                      <MovieView movie={selectedMovie}/>
                    </Col>
                  )}
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                {!user ? (
                  <Navigate to="/login" replace/>
                ) : movies.length === 0 ? (
                  <>
                    This List is empty!
                  </>
                ) : (
                  <>
                    {movies.map((movie) => (
                      <Col md={8} key={movie._id}>
                        <MovieCard movie={movie} onMovieClick={() => setSeletedMovie(movie)}/>
                      </Col>
                    ))}
                  </>
                )}
                </>
              }
            />

          </Routes>

        </Row>
      </BrowserRouter>
      /** 
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
      /*

      /** 
        <div>
            {movies.map((movie) => (
                <MovieCard movie={movie} onMovieClick={(newSelectedMovie) => {setSeletedMovie(newSelectedMovie);}}/>
            ))}
        </div>
        */
    )
}