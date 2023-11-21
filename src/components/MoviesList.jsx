import { useState } from 'react';

// import the array of movie objects
import moviesData from '../movies-data.json';

function MovieList() {
    // Declare a state variable "movies"
    // and set the array from movies-data.json as the initial state
    const [movies, setMovies] = useState(moviesData);

    const hasOscars = (oscars) => {
        if (oscars) {
            return "🏆"
        }
    };
    return (
        <div>
            <h2>Movie List</h2>
            <ul>
                {movies.map((eachMovie) => {
                    return (
                        <li key={eachMovie._id}>
                            <h2>{eachMovie.title}</h2>
                            <h3>{eachMovie.director}</h3>
                            {/* If we have oscars I want to display 🏆 */}
                            <p>{hasOscars(eachMovie.hasOscars)}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default MovieList;