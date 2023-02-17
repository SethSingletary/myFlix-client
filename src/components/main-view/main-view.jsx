import React, { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import PropTypes from 'prop-types';
import { SignupView } from "../signup-view/signup-view";
import { Container, Row } from "react-bootstrap";

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState(storedUser? storedUser: null);
    const [token, setToken] = useState(storedToken? storedToken: null);


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

/** 
    useEffect(() => {
        fetch("https://my-flix2.herokuapp.com/movies")
          .then((response) => response.json())
          .then((data) => {
            const moviesFromApi = data;
            /** 
            const moviesFromApi = data.map((doc) => {
              return {
                id: doc._id,
                title: doc.Title,
                genre: doc.Genre,
              };
            });
            
            setMovies(moviesFromApi);
          });
      }, []);
      */

      return(
        <Row className="justfy-content-md-center">
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
                <MovieCard
                  key={movie._id}
                  movie={movie}
                  onMovieClick={(newSelectedMovie) => {
                    setSelectedMovie(newSelectedMovie);
                  }}
                />
              ))}
            </>
          )}
          </Row>
          );
        };
