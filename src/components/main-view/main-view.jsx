import React, { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import PropTypes from 'prop-types';

export const MainView = () => {
    const [movies, setMovies] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState(null);
    useEffect(() => {
        fetch("https://my-flix2.herokuapp.com/movies")
          .then((response) => response.json())
          .then((data) => {
            const moviesFromApi = data.map((doc) => {
              return {
                id: doc._id,
                title: doc.Title,
                genre: doc.Genre
              };
            });
            setMovies(moviesFromApi);
          });
      }, []);

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
        </div>
    );
};