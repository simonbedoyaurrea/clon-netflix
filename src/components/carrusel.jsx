import React, { useEffect, useState } from 'react'
import '../nuevos-estilos.css/carrusel.css'
import useFetch from '../hooks/fetch'
import { useNavigate } from 'react-router-dom';

  function Carrusel({apiUrl,title}) {

  const { data: carrusel} = useFetch(apiUrl);

  const navigate = useNavigate();

  const handleImageClick = (movieId) => {
    navigate(`/details/${movieId}`);
  };


  return (
    <>
    <h2 className='carrusel-title'>{title}</h2>
    <div className='carrusel-content'>
    <div className='carrusel-box'>
        {
            carrusel && carrusel.results.slice(0,25).map(images=>
            
              <div className='carrusel-movie'>
            <img
            key={images.id}
            onClick={()=>{handleImageClick(images.title || images.name)}}
            src={`https://image.tmdb.org/t/p/w500/${images.poster_path}`} 
            alt={images.title}
            className='carrusel-image'
            />
            <p className='movie-title'>{images.title || images.name}</p>

            </div>
            
            )
          }
    </div>

    </div>
    </>
  )
}

export default Carrusel