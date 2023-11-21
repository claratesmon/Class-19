import { useState } from 'react';

// import the array of movie objects
import moviesData from '../movies-data.json';
import MovieCard from './MovieCard';

function MoviesList2() {
    // Declare a state variable "movies"
    // and set the array from movies-data.json as the initial state
    const [movies, setMovies] = useState(moviesData);

    

    const deleteMovie = (movieID) => {
        const filteredMovies = movies.filter((eachMovie) => {
            return eachMovie._id !== movieID;
        })
        //console.log(filteredMovies);
        setMovies(filteredMovies);
    }

    return (
        <div>
            <h2>Movie List</h2>
            <ul>
                {movies.map((eachMovie) => {
                    return (
                        <MovieCard key={eachMovie._id} movie={eachMovie} deleteMovie={deleteMovie}/>
                    )
                })}
            </ul>
        </div>
    );
}

export default MoviesList2;