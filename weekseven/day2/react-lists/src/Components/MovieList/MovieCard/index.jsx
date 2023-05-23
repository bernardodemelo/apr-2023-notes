/* eslint-disable react/prop-types */
function MovieCard(props){
    const {movie} = props; 

    function generateScoreLabel(score){
        if(score > 9){
            return <span className="rating green">{score}</span>
        } else if (score < 7) {
            return <span className="rating red">{score}</span>
        } 
        else {
            return <span className="rating black">{score}</span>
        }
    }

    return(
        <div key={movie._id} className="movie-card">
        <h3>{movie.title}</h3>
        <p>Director: {movie.director}</p>
        <p>Rating: {generateScoreLabel(movie.IMDBRating)}</p>
        {movie.hasOscars? <p>Got the Oscar Award!</p> : <p>Try Next time!</p> }
        <button onClick={()=> props.deleteMovie(movie._id)}>Click to Delete</button>
        </div>
    )

}

export default MovieCard;