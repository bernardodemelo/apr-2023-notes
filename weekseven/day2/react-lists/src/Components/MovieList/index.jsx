import {useState} from 'react';

// Import the Array of Movie Objects
import moviesData from "./movies-data.json";


function MovieList(){
    const [movies, setMovies] = useState(moviesData);
    
    return(
        <div>
        
        </div>
    )
}

export default MovieList