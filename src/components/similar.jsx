import React, { useEffect, useState } from 'react'
import '../nuevos-estilos.css/similar.css'
import { useNavigate } from 'react-router-dom';

export default function SimilarMovies({movieId}) {

    const [similarMovie,setSimilarMovie]=useState(null)
    const [similarSerie,setSimilarSerie]=useState(null)

    const navigate = useNavigate();

    const handleImageClick = (movieId) => {
      navigate(`/details/${movieId}`);
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId.id}/recommendations?api_key=b3779b706b0e128230bce9b6c8ac8be4`)
        .then(response=> response.json())
        .then(data=>{return setSimilarMovie(data)}
      )
    },[])

useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${movieId.id}/recommendations?api_key=b3779b706b0e128230bce9b6c8ac8be4`)
        .then(response=> response.json())
        .then(data=>{return setSimilarSerie(data)}
      )
    },[])

    return (
      <div className='recommendations-container'>
        {movieId.media_type === 'movie' && similarMovie && similarMovie.results && similarMovie.results.slice(0, 10).map(similares => (
          <img
            key={similares.id}
            src={`https://image.tmdb.org/t/p/w185${similares.poster_path}`}
            onClick={()=>{handleImageClick(similares.title)}}
            className='similar-image'
            alt={similares.title || similares.name}
          />
        ))}
        {movieId.media_type === 'tv' && similarSerie && similarSerie.results && similarSerie.results.slice(0, 10).map(similares => (
          <img
            key={similares.id}
            src={`https://image.tmdb.org/t/p/w185${similares.poster_path}`}
            onClick={()=>{handleImageClick(similares.name)}}
            className='similar-image'
            alt={similares.title || similares.name}
          />
        ))}
      </div>
    );
}
