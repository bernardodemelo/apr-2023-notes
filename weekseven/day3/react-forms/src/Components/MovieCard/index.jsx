function MovieCard(props) {
  // Destructuring the props.movie Object
  const {movie} = props;
  return (
    <div className="movie-card">
        <h3>{movie.title}</h3>
        <p>Director: {movie.director}</p>
        <p>Rating: {movie.IMDBRating}</p>
    </div>
  )
}

export default MovieCard