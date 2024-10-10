import React, { useEffect, useState } from 'react'
import '../estilos/peliculas.css'

function Peliculas() {

    const [pelicula,setPelicula]=useState(null)

useEffect(()=>{
  fetch('https://api.themoviedb.org/3/movie/popular?api_key=b3779b706b0e128230bce9b6c8ac8be4')
.then((res)=>res.json())
.then((data)=>setPelicula(data))},[])



  return (
    <>
    <div className="movies">
    {
        pelicula &&
    pelicula.results.map(movie=>
    <div className='contenedor-pelicula' key={movie.original_title}>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
      <h1 className="title">{movie.original_title}</h1>
      <p>Release date: <span>{movie.release_date}</span></p>
    </div>
    )
}
</div>
    </>
  )
}

export default Peliculas