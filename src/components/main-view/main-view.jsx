import React, { useEffect, useState } from "react"
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSeletedMovie] = useState(null);

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

    if(selectedMovie){
        return <MovieView movie={selectedMovie} onBackClick={() => setSeletedMovie(null)}/>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard movie={movie} onMovieClick={(newSelectedMovie) => {setSeletedMovie(newSelectedMovie);}}/>
            ))}
        </div>
    )
}