import React, { useEffect, useState } from 'react'
import Movies from './movies'
import '../nuevos-estilos.css/moviescontainer.css'


function MoviesContainer() {

const [movie,setMovie]=useState(null)

useEffect(()=>{
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b3779b706b0e128230bce9b6c8ac8be4`)
.then(res=>res.json())
.then(data=>setMovie(data))
},[])

  return (
    <div className='movie-container-items'>
    {movie && <Movies movie={movie}/>}
    </div>
  )
}

export default MoviesContainer