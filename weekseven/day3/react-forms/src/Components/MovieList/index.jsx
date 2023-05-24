import {useState} from 'react';
// Import Data file 
import movieDataJson from "./movies-data.json";

// Import Components
import MovieCard from '../MovieCard';
import AddMovie from "../AddMovie";
import FilterMovie from '../FilterMovie';

function MovieList() {
    // Real Data List of Movies
    const [movies, setMovies] = useState(movieDataJson);

    // Filtered Movies State
    const [moviesFilterData, setMoviesFilterData] = useState(movieDataJson);

    const addNewMovie = (newMovie)=>{
        const updatedMovies = [...movies, newMovie];
        setMovies(updatedMovies);
    };

    const filterMovieList = (str) =>{
        let filteredMovies;

        if(str === "All"){
            filteredMovies = movies;
        } else {
            filteredMovies = movies.filter((movie)=>{
                return movie.title[0].toLowerCase() === str.toLowerCase();
            })
        }

        setMoviesFilterData(filteredMovies);

    }

  return (
    <div>
    <h2>Movie List</h2>
    <FilterMovie filterMovies={filterMovieList}/>
    <AddMovie addNewMovie={addNewMovie}/>
    {moviesFilterData.map(movie=>{
            return <MovieCard key={movie._id} movie={movie}/>
    })
    }
    </div>
  )
}

export default MovieList;