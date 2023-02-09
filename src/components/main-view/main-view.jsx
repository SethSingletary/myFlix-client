import React, { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {id: 1, title: "The Phantom Menace", genre: "A genre"},
        {id: 2, title: "Attack of the Clones", genre: "A genre"},
        {id: 3, title: "Revenge of the Sith", genre: "A genre"}
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

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