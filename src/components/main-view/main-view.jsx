import React, { useEffect, useState } from "react";
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { SignupView } from "../signup-view/signup-view";
import { Col, Row, Form } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProfileView } from "../profile-view/profile-view";
import Button from "react-bootstrap";
import { NavigationBar } from "../navigation-bar/navigation-bar";


export const MainView = () => {

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState(localStorage.getItem("User" ?? null));
    const [filteredMovies, setFilteredmovies] = useState([]);

    const handleSearch = (e) => {
      const searchQuery = e.target.value.toLowerCase();
      let tempArray = movies.filter((movie) => movie.title.toLowerCase().includes(searchQuery));
      setFilteredmovies(tempArray);
    }

    useEffect(() => {
      setFilteredmovies(movies);
    }, [movies]);

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
                      <NavigationBar/>
                      This List is empty!
                    </>
                  ) : (
                    <Col md={8}>
                      <NavigationBar/>
                      <MovieView movie={selectedMovie} />
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
                    <NavigationBar/>
                    This List is empty!
                  </>
                ) : (
                  <>
                    <NavigationBar/>
                    <Form>
                    <Form.Control
                      type="search"
                      placeholder="Search by Title"
                      aria-label="Search"
                      onChange={handleSearch}
                    />
                  </Form>
                    {filteredMovies.map((movie) => (
                      <Col md={8} key={movie.id}>
                        <MovieCard movie={movie} onMovieClick={() => setSelectedMovie(movie)}/>
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
                    <ProfileView user={user}/>
                  )}
                </>
              }
            />
          </Routes>
        </Row>
      </BrowserRouter>
    )
}