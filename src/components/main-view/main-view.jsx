import React, { useState } from "react"
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {

    const [movies, setMovies] = useState([
        {id: 1, title: "The Phantom Menace"},
        {id: 2, title: "Attack of the Clones"}
    ]);

    const [selectedMovie, setSeletedMovie] = useState(null);

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