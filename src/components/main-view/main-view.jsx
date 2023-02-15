import React, { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import PropTypes from 'prop-types';
import { SignupView } from "../signup-view/signup-view";

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = JSON.parse(localStorage.getItem("token"));

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, users] = useState(storedUser? storedUser: null);
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

    if(!user){
      return( <><LoginView onLoggedIn={(user, token) => {
        setUser(user); 
        setToken(token);
      }}/>
      or 
      <SignupView/>
      </>)
    }


    if(selectedMovie){
        return (<MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)}/>);
    }

    if(movies.length === 0){
        return <div>The list is empty!</div>;
    }




    return (
        <div>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                    />
            ))}
            <button onClick={() => {setUser(null); setToken(null); localStorage.clear();}}>Logout</button>
        </div>
    );
};