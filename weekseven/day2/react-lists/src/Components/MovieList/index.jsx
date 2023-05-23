import {useState} from 'react';

// Import the Array of Movie Objects
import moviesData from "./movies-data.json";

// Import Component
import MovieCard from './MovieCard';


// Map, filter, reduce 
function MovieList(){
    const [movies, setMovies] = useState(moviesData);
    const [showMovies, setShowMovies] = useState(true);
    
    // delete function to find the Id and Delete
    const deleteMovie = movieId =>{
        const filteredMovies = movies.filter(movie=>{
            return movie._id != movieId
        });

        setMovies(filteredMovies);
    }

    const toggleShowMovies = () =>{
        setShowMovies(!showMovies);
    }


    return(
        <div>
            <h2>Movies List</h2>
            <button onClick={toggleShowMovies}>{showMovies? 'Hide': 'Show'}</button>
            {showMovies && movies.map(movie=>{
                return(
                    <MovieCard key={movie._id} movie={movie} deleteMovie={deleteMovie} />
                )
            })}
        </div>
    )
}

export default MovieList