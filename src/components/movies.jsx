import React from 'react'
import '../nuevos-estilos.css/movies.css'


 function Movies({movie}) {
  return (
    <> {movie.results.map(movies=>
    <div className='movie-container'>
<img 
src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
alt={movies.title}
className='movie-poster'
/>
<p className='movie-name' >{movies.title}</p>
</div>
)}

</>
  )
}

export default Movies