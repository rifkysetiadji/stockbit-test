import React from 'react'

 const CardMovie=({movie,onClickPoster,onClickTitle})=>{
    return(
        <div className='card-movie' data-test='card-movie'>
            <img src={movie.Poster} onClick={()=>onClickPoster(movie.Poster)}/>
            <div className='sub-card'>
                <h2 onClick={()=>onClickTitle(movie.imdbID)}>{movie.Title}</h2>
                <p>Year : {movie.Year}</p>
                <p>IMBD Id : {movie.imdbID}</p>
            </div>
        </div>
    )
}
export default CardMovie