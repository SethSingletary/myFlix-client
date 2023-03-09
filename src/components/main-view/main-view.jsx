import React, { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import PropTypes from 'prop-types';
import { SignupView } from "../signup-view/signup-view";
import { Container, Row, Col, Navbar, Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { ProfileView} from "../profile-view/profile-view";
import { NavigationBar} from "../naviagation-bar/navigation-bar"

export const MainView = () => {
    const storedUsername = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [username, setUsername] = useState(storedUsername? storedUsername: null);
    const [token, setToken] = useState(storedToken? storedToken: null);
    const [user, setUser] = useState({
      username: "",
      password: "",
      email: "",
      birthday: "",
      favoriteMovies: [],
    });
    const [filteredMovieList, setFilteredMovieList] = useState([]);


    useEffect(() => {
      if (!token) {
        return;
      }
  
      fetch("https://my-flix2.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setMovies(data);
        });
    }, [token]);

    function movieSearch(searchString) {
      setFilteredMovieList(movies.filter((movie) => movie.title.toLowerCase().includes(searchString))
      );
    }

    const clearCurrentUser = () => {
      setUsername(null);
      setToken(null);
      localStorage.clear();
    }

      return(
        <BrowserRouter>
        {username ? (
          <NavigationBar
            username={username}
            onLoggedOut={clearCurrentUser}
            onSearch={movieSearch}
          />
        ) : (
          ""
        )}
          <Row className="justfy-content-md-center">
            <Routes>
              <Route
                path="/signup"
                element={
                  <>
                    {user ? (
                      <Navigate to="/"/>
                    ) : (
                      <Col md={5}>
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
                      <Col md={5}>
                        <LoginView onLoggedIn={(user) => setUser(user)}/>
                        <p>Or Signup</p>
                        <SignupView/>
                      </Col>
                    )}
                  </>
                }
              />
              <Route
                path="/movies/:movieId"
                element={
                  <>
                    {!user ? (
                      <Navigate to="/login" replace/>
                    ) : movies.length === 0 ? (
                      <Col>The list is empty!</Col>
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
                      <Col>The list is empty!</Col>
                    ) : (
                      <>
                        {movies.map((movie) => (
                          <Col className="mb-4" key={movie._id} md={3}>
                            <MovieCard 
                              movie={movie}
                              onMovieClick={() => setSelectedMovie(movie)}
                            />
                          </Col>
                        ))}
                      </>
                    )}
                  </>
                }
              />
              <Route
                path="/profile"
                element={
                  <>
                  {!user ? (
                    <Navigate to="/login" replace/>
                  ) : (
                    <>
                      <ProfileView/>
                    </>
                  )}
                  </>
                }
              />
            </Routes>
            </Row>
          </BrowserRouter>
          );
        };
            /**
            {!user ? (
              <Col md={5}>
                <LoginView onLoggedIn={(user) => setUser(user)}/>
                or
                <SignupView/>
              </Col>
            ) : selectedMovie ? (
              <MovieView
                movie={selectedMovie}
                onBackClick={() => setSelectedMovie(null)}
              />
            ) : movies.length === 0 ? (
              <div>The list is empty!</div>
            ) : (
              <>
                {movies.map((movie) => (
                  <Col className="mb-5" key={movie._id} md={3}>
                  <MovieCard
                    key={movie._id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                      setSelectedMovie(newSelectedMovie);
                    }}
                  />
                  </Col>
                ))}
              </>
            )}
            */