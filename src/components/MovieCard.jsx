import { useState } from 'react';
import moviesData from '../movies-data.json';

function MovieCard(props) {
    const [movies, setMovies] = useState(moviesData);
    const hasOscarsFunction = (oscars) => {
        if (oscars) {
            return "🏆"
        }
    };
    
    const {_id, title, director, hasOscars, IMDBRating} = props.movie
    console.log(props.movie)
    
    return (
        <li key={_id}>
            <h2>{title}</h2>
            <h3>{director}</h3>
            {/* If we have oscars I want to display 🏆 */}
            <p>{hasOscarsFunction(hasOscars)}</p>
            <p>{IMDBRating}</p>
        </li>
    )
}


export default MovieCard