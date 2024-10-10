import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../nuevos-estilos.css/movieinfo.css'
import Similar from './similar';
import SimilarMovies from './similar';
import { CiMonitor } from "react-icons/ci";


function MovieInfo() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [genre,setGenre] =useState({})
  

  useEffect(() => {
      fetch(`https://api.themoviedb.org/3/search/multi?query=${movieId}&api_key=b3779b706b0e128230bce9b6c8ac8be4`)
      .then(response=> response.json())
      .then(data=>setMovieDetails(data)
    )
  },[movieId])
// fetch para los generos 
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=b3779b706b0e128230bce9b6c8ac8be4`)
    .then(response=> response.json())
    .then(data=> setGenre(data)
  )
},[])
  

    let borderColorClass = '';

    if (movieDetails) {
      const voteAverage = Math.floor(movieDetails.results[0].vote_average * 10);
      console.log(voteAverage)

    if (voteAverage > 50 && voteAverage<=75 ) {
        borderColorClass = 'medium';
      }
    else if (voteAverage <50) {
        borderColorClass = 'low';
      }
    else if(voteAverage >75 && voteAverage<=100){
        borderColorClass = 'high';
      }
    }


  
  

  return (
    movieDetails &&
    <div className='containeer'>
      <div className='info-container'>
          <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.results[0].poster_path}`} 
          className='multi-image'
          />

          <div className='title-overview-container'>

              <h1 className='multi-title'> {movieDetails.results[0].title || movieDetails.results[0].name}<span className='year'>{`(${movieDetails.results[0].first_air_date?.split('-')[0] || movieDetails.results[0].release_date?.split('-')[0]})`}</span></h1>
              <div className='genre-date'>
                    {movieDetails.results[0].genre_ids && movieDetails.results[0].genre_ids.map(id => {
                      const genero = genre.genres?.find(g => g.id === id);
                      return genero ? <span key={id} className='genre'>{genero.name}</span> : null;
                    })}
                  
              <p className='multi-date'> {movieDetails.results[0].first_air_date|| movieDetails.results[0].release_date}</p>
            </div>
              <p className='multi-overview'>{movieDetails.results[0].overview}</p>


              <div className='rate-container'>
              <div className={`multi-rate ${borderColorClass}`} >{Math.floor(movieDetails.results[0].vote_average*10)}<span className='percent'>%</span></div>
              <p className='user-score'>user <br /> score</p>
              </div>
              {movieDetails.results[0].adult==false && <CiMonitor />}
        </div>
      </div>
      <div className='similar-movies'>
        <h2 className='maybe-you-like'>maybe you like </h2>
        <SimilarMovies movieId={movieDetails.results[0]}/>
      </div>
    </div>
  ); 
}

export default MovieInfo;
